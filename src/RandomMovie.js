import React, { useState } from "react";
const { API_KEY } = require("./config.json");

const MovieSelector = () => {
  const MovieCodes = [
    "tt0111161", // The Shawshank Redemption
    "tt0468569", // The Dark Knight
    "tt1375666", // Inception
    "tt0137523", // Fight Club
    "tt0120737", // The Lord of the Rings: The Fellowship of the Ring
    "tt0167260", // The Lord of the Rings: The Return of the King
    "tt0167261", // The Lord of the Rings: The Two Towers
    "tt0133093", // The Matrix
    "tt0993846", // The Wolf of Wall Street
    "tt0088763", // Back to the Future
    "tt0109830", // Forrest Gump
    "tt0110912", // Pulp Fiction
    "tt0076759", // Star Wars: Episode IV - A New Hope
    "tt0120815", // Saving Private Ryan
    "tt0102926", // The Silence of the Lambs
    "tt0120586", // American History X
    "tt0110357", // The Lion King
    "tt0080684", // Star Wars: Episode V - The Empire Strikes Back
    "tt0073486", // One Flew Over the Cuckoo's Nest
    "tt0253474", // The Pianist
    "tt0172495", // Gladiator
    "tt0114369", // Se7en
    "tt0108052", // Schindler's List
    "tt0088763", // Back to the Future
    "tt0169547", // American Beauty
    "tt0118799", // Life Is Beautiful
    "tt0099685", // Goodfellas
    "tt0120586", // American History X
    "tt0120735", // The Lord of the Rings: The Fellowship of the Ring
    "tt0137523", // Fight Club
    "tt0180093", // Requiem for a Dream
    "tt0482571", // The Prestige
    "tt0209144", // Memento
    "tt0078748", // Alien
    "tt0043014", // Sunset Blvd.
    "tt0208092", // Snatch
    "tt0082971", // Raiders of the Lost Ark
    "tt0120735", // The Lord of the Rings: The Fellowship of the Ring
    "tt0317248", // City of God
    "tt0054215", // Psycho
    "tt0105236", // Reservoir Dogs
    "tt0034583", // Casablanca
    "tt0090605", // Aliens
    "tt0081505", // The Shining
    "tt0057012", // Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb
    "tt0120735", // The Lord of the Rings: The Fellowship of the Ring
    "tt0082979", // Indiana Jones and the Last Crusade
    "tt0114814", // The Usual Suspects
    "tt0095327", // Grave of the Fireflies
    "tt0167404", // The Sixth Sense
    "tt0057012", // Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb
    "tt0056592", // To Kill a Mockingbird
    "tt0047478", // Seven Samurai
    "tt0208092", // Snatch
    "tt0093058", // Full Metal Jacket
    "tt0032553", // The Great Dictator
    "tt0088763", // Back to the Future
    "tt0064116", // Once Upon a Time in the West
    "tt0050212", // The Bridge on the River Kwai
    "tt0078788", // The Deer Hunter
    "tt0062622", // 2001: A Space Odyssey
    "tt0113277", // Heat
    "tt0097576", // Indiana Jones and the Last Crusade
    "tt0075314", // Taxi Driver
    "tt0053125", // North by Northwest
    "tt0102926", // The Silence of the Lambs
    "tt0089881", // Ran
    "tt0081398", // Raging Bull
    "tt0119488", // L.A. Confidential
    "tt0061512", // Cool Hand Luke
    "tt0033467", // Citizen Kane
    "tt0120382", // The Truman Show
    "tt0042192", // All About Eve
    "tt0053604", // The Apartment
    "tt0059578", // For a Few Dollars More
    "tt0118715", // The Big Lebowski
    "tt0080678", // The Elephant Man
    "tt0052357", // Vertigo
    "tt0086190", // Star Wars: Episode VI - Return of the Jedi
    "tt0116231", // The Bandit
    "tt0070735", // The Sting
    "tt0012349", // The Kid
    "tt0086250", // Scarface
    "tt0071853", // Monty Python and the Holy Grail
    "tt0093058", // Full Metal Jacket
    "tt0071315", // Chinatown
    "tt0084787", // The Thing
    "tt0056592", // To Kill a Mockingbird
    "tt0036775", // Double Indemnity
    "tt0040522", // Bicycle Thieves
    "tt0119217", // Good Will Hunting
    "tt0056172", // Lawrence of Arabia
    "tt0031381", // Gone with the Wind
    "tt0053604", // The Apartment
    "tt0027977", // Modern Times
    "tt0097576", // Indiana Jones and the Last Crusade
    "tt0017136", // Metropolis
    "tt0103064", // Terminator 2: Judgment Day
  ];

  var [MovieData, setMovieData] = useState(null);

  const selectRandomMovie = async () => {
    try {
      const RandomIndex = Math.floor(Math.random() * MovieCodes.length);
      const RandomMovieCode = MovieCodes[RandomIndex];
      const Response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${RandomMovieCode}`
      );
      const MovieData = await Response.json();

      setMovieData(MovieData);
      MovieData = 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return MovieData;
};

export default MovieSelector;
