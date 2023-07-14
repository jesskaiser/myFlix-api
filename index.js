const express = require('express'),
    morgan = require('morgan'),
    // import built in node modules fs and path
    fs = require('fs'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    uuid = require('uuid');

// create a write stream (in append mode) into ‘log.txt’
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {
    flags: 'a',
});

// log request with Morgan
app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());

//users data
let users = [
    {
        id: 1,
        username: 'bob',
        password: 'password',
        email: 'Bob@gmail.com',
        favouriteMovies: ['The Matrix']
    },
    {
        id: 2,
        username: 'mark',
        password: 'password',
        email: 'mark@gmail.com',
        favouriteMovies: []
    },
];

//top 10 movies data
let movies = [
    {
        Title: 'The Matrix',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY3156_.jpg',
        Year: '1999',
        Genres: [
            {
                Name: 'Action',
                Description:
                    'Action fiction is a form of genre fiction whose subject matter is characterized by emphasis on exciting action sequences.',
            },
            {
                Name: 'Sci-fi',
                Description:
                    'Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
            },
        ],
        Directors: [
            {
                Name: 'Lana Wachowski',
                Dob: '21/06/1965',
                Death: '-',
                Bio: 'Lana Wachowski and her sister Lilly Wachowski, also known as the Wachowskis, are the duo behind such ground-breaking movies as The Matrix (1999) and Cloud Atlas (2012).',
            },
            {
                Name: 'Lilly Wachowski',
                Dob: '29/12/1967',
                Death: '-',
                Bio: 'Lilly teamed up with her older sibling, Lana Wachowski, and began working on films. Their first script was optioned and formed the basis for the film Assassins (1995).',
            },
        ],
        Featured: true,
        Description:
            'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    },
    {
        Title: 'Inception',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        Year: '2010',
        Genres: [
            {
                Name: 'Action',
                Description:
                    'Action fiction is a form of genre fiction whose subject matter is characterized by emphasis on exciting action sequences.',
            },
            {
                Name: 'Adventure',
                Description:
                    'Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.',
            },
            {
                Name: 'Sci-Fi',
                Description:
                    'Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
            },
        ],
        Directors: [
            {
                Name: 'Christopher Nolan',
                Dob: '30//07/1970',
                Death: '-',
                Bio: 'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England.',
            },
        ],
        Featured: true,
        Description:
            'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    },
    {
        Title: 'Life Is Beautiful',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BOWY1OWI1MmUtNjAxYy00MmRiLWI4YWItYjNjMmU4Yzc3M2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
        Year: '1997',
        Genres: [
            {
                Name: 'Comedy',
                Description:
                    'A comedy film is a category of film which emphasizes on humor. ',
            },
            {
                Name: 'Drama',
                Description:
                    'In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.',
            },
            {
                Name: 'Romance',
                Description:
                    'Romance films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters.',
            },
        ],
        Directors: [
            {
                Name: 'Roberto Benigni',
                Dob: '27/10/1952',
                Death: '-',
                Bio: 'Roberto Benigni was born on October 27, 1952 in Manciano La Misericordia, Castiglion Fiorentino, Tuscany, Italy.',
            },
        ],
        Featured: true,
        Description:
            'When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.',
    },
    {
        Title: 'Back to the Future',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        Year: '1985',
        Genres: [
            {
                Name: 'Adventure',
                Description:
                    'Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.',
            },
            {
                Name: 'Comedy',
                Description:
                    'A comedy film is a category of film which emphasizes on humor. ',
            },
            {
                Name: 'Sci-Fi',
                Description:
                    'Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
            },
        ],
        Directors: [
            {
                Name: 'Robert Zemeckis',
                Dob: '14/05/1952',
                Death: '-',
                Bio: 'A whiz-kid with special effects, Robert is from the Spielberg camp of film-making (Steven Spielberg produced many of his films). ',
            },
        ],
        Featured: true,
        Description:
            'Marty McFly, a 17  Year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
    },
    {
        Title: 'American History X',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg',
        Year: '1998',
        Genres: [
            {
                Name: 'Crime',
                Description:
                    'Films of this genre generally involve various aspects of crime and its detection. ',
            },
            {
                Name: 'Drama',
                Description:
                    'In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.',
            },
        ],
        Directors: [
            {
                Name: 'Tony Kaye',
                Dob: '1952',
                Death: '-',
                Bio: 'Kaye is a six time Grammy nominated music video director from London.',
            },
        ],
        Featured: true,
        Description:
            'Living a life marked by violence, neo-Nazi Derek finally goes to prison after killing two black youths. Upon his release, Derek vows to change; he hopes to prevent his brother, Danny, who idolizes Derek, from following in his footsteps.',
    },
    {
        Title: 'Trainspotting',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        Year: '1996',
        Genres: [
            {
                Name: 'Drama',
                Description:
                    'In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.',
            },
        ],
        Directors: [
            {
                Name: 'Danny Boyle',
                Dob: '20/10/1956',
                Death: '-',
                Bio: 'Daniel Francis Boyle is a British filmmaker, producer and writer from Radcliffe, Greater Manchester.',
            },
        ],
        Featured: true,
        Description:
            'Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.',
    },
    {
        Title: 'The Truman Show',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
        Year: '1998',
        Genres: [
            {
                Name: 'Comedy',
                Description:
                    'A comedy film is a category of film which emphasizes on humor. ',
            },
            {
                Name: 'Drama',
                Description:
                    'In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.',
            },
        ],
        Directors: [
            {
                Name: 'Peter Weir',
                Dob: '21/08/1944',
                Death: '-',
                Bio: 'Peter Weir was born on August 21, 1944 in Sydney, New South Wales, Australia.',
            },
        ],
        Featured: true,
        Description:
            'An insurance salesman discovers his whole life is actually a reality TV show.',
    },
    {
        Title: 'Kill Bill: Vol.1 ',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        Year: '2003',
        Genres: [
            {
                Name: 'Action',
                Description:
                    'Action fiction is a form of genre fiction whose subject matter is characterized by emphasis on exciting action sequences.',
            },
            {
                Name: 'Crime',
                Description:
                    'Films of this genre generally involve various aspects of crime and its detection. ',
            },
            {
                Name: 'Thriller',
                Description:
                    'Thrillers are characterized and defined by the moods they elicit, giving their audiences heightened feelings of suspense, excitement, surprise, anticipation and anxiety.',
            },
        ],
        Directors: [
            {
                Name: 'Quentin Tarantino',
                Dob: '27/03/1963',
                Death: '-',
                Bio: 'Quentin Jerome Tarantino was born in Knoxville, Tennessee.',
            },
        ],
        Featured: true,
        Description:
            'After awakening from a four    Year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
    },
    {
        Title: 'The Green Mile',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg',
        Year: '1999',
        Genres: [
            {
                Name: 'Crime',
                Description:
                    'Films of this genre generally involve various aspects of crime and its detection. ',
            },
            {
                Name: 'Drama',
                Description:
                    'In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.',
            },
            { Name: 'Fantasy', Description: '' },
        ],
        Directors: [
            {
                Name: 'Frank Darabont',
                Dob: '28/01/1959',
                Death: '-',
                Bio: 'Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution. ',
            },
        ],
        Featured: true,
        Description:
            "A tale set on Death row in a Southern jail, where gentle giant John possesses the mysterious power to heal people's ailments. When the lead guard, Paul, recognizes John's gift, he tries to help stave off the condemned man's execution.",
    },
    {
        Title: 'Snatch',
        ImageURL:
            'https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
        Year: '2000',
        Genres: [
            {
                Name: 'Comedy',
                Description:
                    'A comedy film is a category of film which emphasizes on humor. ',
            },
            {
                Name: 'Crime',
                Description:
                    'Films of this genre generally involve various aspects of crime and its detection. ',
            },
        ],
        Directors: [
            {
                Name: 'Guy Ritchie',
                Dob: '10/09/1968',
                Death: '-',
                Bio: 'Guy Ritchie was born in Hatfield, Hertfordshire, UK on September 10, 1968. After watching Butch Cassidy and the Sundance Kid (1969) as a child, Guy realized that what he wanted to do was make films.',
            },
        ],
        Featured: true,
        Description:
            'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    },
];

//serves file from the public folder
app.use(express.static('public'));

//error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
