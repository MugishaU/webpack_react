import React from "react";
class App extends React.Component {
  render() {
    const music = [
      {
        artist: "J.Cole",
        genre: "Rap",
        album: "2014 Forest Hills Drive",
        coverArt: "",
        songs: ["No Role Modelz", "G.O.M.D.", "Apparently"],
      },
      {
        artist: "Kendrick Lamar",
        genre: "Rap",
        album: "Good Kid Maad City",
        coverArt: "",
        songs: ["Don't kill my vibe", "Money Trees", "Poetic Justice"],
      },
      {
        artist: "Burna Boy",
        genre: "Afrobeats",
        album: "African Giant",
        coverArt: "",
        songs: ["Gum Body", "African Giant", "Dangote"],
      },
      {
        artist: "Lauryn Hill",
        genre: "R&B",
        album: "The Miseducation of Lauryn Hill",
        coverArt: "",
        songs: ["To Zion", "Nothing Even Matters", "Everything is Everything"],
      },
    ];
    const hold = [];

    return (
      <>
        <h1>Hello World!</h1>

        <div>
          {music.map((item) => {
            return (
              <Card
                artist={item.artist}
                genre={item.genre}
                album={item.album}
                songs={item.songs}
              ></Card>
            );
          })}
        </div>
      </>
    );
  }
}
export default App;

function Card(props) {
  return (
    <>
      <h3>Artist: {props.artist}</h3>
      <h4>Genre: {props.genre}</h4>
      <h4>Album: {props.album}</h4>
      <h4>Favourite Songs:</h4>
      <ul>
        {props.songs.map((song) => {
          return <li>{song}</li>;
        })}
      </ul>
      <hr></hr>
    </>
  );
}
