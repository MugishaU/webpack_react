import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AlbumCard from "../Components/AlbumCard";

class AlbumPage extends React.Component {
  state = {
    music: [
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
    ],
  };
  render() {
    return (
      <>
        <div>
          {this.state.music.map((item, idx) => {
            return (
              <AlbumCard
                key={idx}
                artist={item.artist}
                genre={item.genre}
                album={item.album}
                songs={item.songs}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default withRouter(AlbumPage);
