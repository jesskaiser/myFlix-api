const express = require("express");
const app = express();

//top 10 movies data
let topTenMovies = [
  {
    title: "The Matrix",
    year: "1999",
    genre: ["Action", "Sci-fi"],
    directors: ["Lana Wachowski", "Lilly Wachowski"],
    writers: ["Lana Wachowski", "Lilly Wachowski"],
    stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    title: "Inception",
    year: "2010",
    genre: ["Action", "Adventure", "Sci-Fi"],
    directors: ["Christopher Nolan"],
    writers: ["Christopher Nolan"],
    stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  {
    title: "Life Is Beautiful",
    year: "1997",
    genre: ["Comedy", "Drama", "Romance"],
    directors: ["Roberto Benigni"],
    writers: ["Vincenzo Cerami", "Roberto Benigni"],
    stars: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini"]
  },
  {
    title: "Back to the Future",
    year: "1985",
    genre: ["Adventure", "Comedy", "Sci-Fi"],
    directors: ["Robert Zemeckis"],
    writers: ["Robert Zemeckis", "Bob Gale"],
    stars: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"]
  },
  {
    title: "American History X",
    year: "1998",
    genre: ["Crime", "Drama"],
    directors: ["Tony Kaye"],
    writers: ["David McKenna"],
    stars: ["Edward Norton", "Edward Furlong", "Beverly D'Angelo"]
  },
  {
    title: "Trainspotting",
    year: "1996",
    genre: ["Drama"],
    directors: ["Danny Boyle"],
    writers: ["Irvine Welsh", "John Hodge"],
    stars: ["Ewan McGregor", "Ewen Bremner", "Jonny Lee Miller"]
  },
  {
    title: "The Truman Show",
    year: "1998",
    genre: ["Comedy", "Drama"],
    directors: ["Peter Weir"],
    writers: ["Andrew Niccol"],
    stars: ["Jim Carrey", "Ed Harris", "Laura Linney"]
  },
  {
    title: "Kill Bill: Vol.1 ",
    year: "2003",
    genre: ["Action", "Crime", "Thriller"],
    directors: ["Quentin Tarantino"],
    writers: ["Quentin Tarantino", "Uma Thurman"],
    stars: ["Uma Thurman", "David Carradine", "Daryl Hannah"]
  },
  {
    title: "The Green Mile",
    year: "1999",
    genre: ["Crime", "Drama", "Fantasy"],
    directors: ["Frank Darabont"],
    writers: ["Stephen King", "Frank Darabont"],
    stars: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"]
  },
  {
        
    title: "Snatch",
    year: "2000",
    genre: ["Comedy", "Crime"],
    directors: ["Guy Ritchie"],
    writers: ["Guy Ritchie"],
    stars: ["Jason Statham", "Brad Pitt", "Stephen Graham"]
  },
];
//Express GET route located at the endpoint “/movies” that returns a JSON object containing data about the top 10 movies
app.get("/movies", (req, res) => {
   res.json(topTenMovies);
});

//GET route located at the endpoint “/” that returns a default textual response
 app.get("/", (req, res) => {
   res.send("Grab popcorn");
 });