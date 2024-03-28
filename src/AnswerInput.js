import React, { useState } from "react";
import "./AnswerInput.css";

const debugList = [
  { code: "tt0111161", title: "The Shawshank Redemption" },
  { code: "tt0468569", title: "The Dark Knight" },
  { code: "tt1375666", title: "Inception" },
  { code: "tt0137523", title: "Fight Club" },
  {
    code: "tt0120737",
    title: "The Lord of the Rings: The Fellowship of the Ring",
  },
  { code: "tt0167260", title: "The Lord of the Rings: The Return of the King" },
  { code: "tt0167261", title: "The Lord of the Rings: The Two Towers" },
  { code: "tt0133093", title: "The Matrix" },
  { code: "tt0993846", title: "The Wolf of Wall Street" },
  { code: "tt0088763", title: "Back to the Future" },
  { code: "tt0109830", title: "Forrest Gump" },
  { code: "tt0110912", title: "Pulp Fiction" },
  { code: "tt0076759", title: "Star Wars: Episode IV - A New Hope" },
  { code: "tt0120815", title: "Saving Private Ryan" },
  { code: "tt0102926", title: "The Silence of the Lambs" },
  { code: "tt0120586", title: "American History X" },
  { code: "tt0110357", title: "The Lion King" },
  {
    code: "tt0080684",
    title: "Star Wars: Episode V - The Empire Strikes Back",
  },
  { code: "tt0073486", title: "One Flew Over the Cuckoo's Nest" },
  { code: "tt0253474", title: "The Pianist" },
  { code: "tt0172495", title: "Gladiator" },
  { code: "tt0114369", title: "Se7en" },
  { code: "tt0108052", title: "Schindler's List" },
  { code: "tt0169547", title: "American Beauty" },
  { code: "tt0118799", title: "Life Is Beautiful" },
  { code: "tt0099685", title: "Goodfellas" },
  { code: "tt0180093", title: "Requiem for a Dream" },
  { code: "tt0482571", title: "The Prestige" },
  { code: "tt0209144", title: "Memento" },
  { code: "tt0078748", title: "Alien" },
  { code: "tt0043014", title: "Sunset Blvd." },
  { code: "tt0208092", title: "Snatch" },
  { code: "tt0082971", title: "Raiders of the Lost Ark" },
  { code: "tt0317248", title: "City of God" },
  { code: "tt0054215", title: "Psycho" },
  { code: "tt0105236", title: "Reservoir Dogs" },
  { code: "tt0034583", title: "Casablanca" },
  { code: "tt0090605", title: "Aliens" },
  { code: "tt0081505", title: "The Shining" },
  {
    code: "tt0057012",
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
  },
  { code: "tt0082979", title: "Indiana Jones and the Last Crusade" },
  { code: "tt0114814", title: "The Usual Suspects" },
  { code: "tt0095327", title: "Grave of the Fireflies" },
  { code: "tt0167404", title: "The Sixth Sense" },
  { code: "tt0056592", title: "To Kill a Mockingbird" },
  { code: "tt0047478", title: "Seven Samurai" },
  { code: "tt0093058", title: "Full Metal Jacket" },
  { code: "tt0032553", title: "The Great Dictator" },
  { code: "tt0064116", title: "Once Upon a Time in the West" },
  { code: "tt0050212", title: "The Bridge on the River Kwai" },
  { code: "tt0078788", title: "The Deer Hunter" },
  { code: "tt0062622", title: "2001: A Space Odyssey" },
  { code: "tt0113277", title: "Heat" },
  { code: "tt0075314", title: "Taxi Driver" },
  { code: "tt0053125", title: "North by Northwest" },
  { code: "tt0089881", title: "Ran" },
  { code: "tt0081398", title: "Raging Bull" },
  { code: "tt0119488", title: "L.A. Confidential" },
  { code: "tt0061512", title: "Cool Hand Luke" },
  { code: "tt0033467", title: "Citizen Kane" },
  { code: "tt0120382", title: "The Truman Show" },
  { code: "tt0042192", title: "All About Eve" },
  { code: "tt0053604", title: "The Apartment" },
  { code: "tt0059578", title: "For a Few Dollars More" },
  { code: "tt0118715", title: "The Big Lebowski" },
  { code: "tt0080678", title: "The Elephant Man" },
  { code: "tt0052357", title: "Vertigo" },
  { code: "tt0086190", title: "Star Wars: Episode VI - Return of the Jedi" },
  { code: "tt0116231", title: "The Bandit" },
  { code: "tt0070735", title: "The Sting" },
  { code: "tt0012349", title: "The Kid" },
  { code: "tt0086250", title: "Scarface" },
  { code: "tt0071853", title: "Monty Python and the Holy Grail" },
  { code: "tt0071315", title: "Chinatown" },
  { code: "tt0084787", title: "The Thing" },
  { code: "tt0036775", title: "Double Indemnity" },
  { code: "tt0040522", title: "Bicycle Thieves" },
];

export default function AnswerInput() {
  var [input, setInput] = useState("");

  const filteredMovies = debugList.filter(({ title }) =>
    title.toLowerCase().includes(input.toLowerCase())
  );

  function onSubmit(e) {
    e.preventDefault();
    console.log("input: ", input);
    console.log("return: ", input);
    return input;
  }

  function select(title) {
    console.log("selected:", title);
    setInput(title);
    input = title;
    console.log("return: ", input);
  }

  return (
    <div className="global">
      <form className="form" onSubmit={onSubmit}>
        <span className="title">So, what's the movie ?</span>{" "}
        <div className="searchcomponent">
          <div className="searchbar">
            <input
              className="search"
              placeholder="Type to search..."
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {input && (
              <div className="searchResults">
                <h3>Items:</h3>
                <div className="titles">
                  {filteredMovies.map(({ code, title }) => (
                    <div
                      onClick={() => select(title)}
                      className="title"
                      key={code}
                    >
                      {title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}
