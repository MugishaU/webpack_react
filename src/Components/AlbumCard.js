import React from "react";
import LikeButton from "./LikeButton";

class AlbumCard extends React.Component {
  state = {
    like: false,
    fill: "fas fa-heart fa-2x",
    empty: "far fa-heart fa-2x",
  };

  toggleLike = (event) => {
    event.stopPropagation();
    this.setState((prevState) => ({
      like: !prevState.like,
    }));
    console.log(this.state.like);
  };

  render() {
    return (
      <>
        <h3>Artist: {this.props.artist}</h3>
        <h4>Genre: {this.props.genre}</h4>
        <h4>Album: {this.props.album}</h4>
        <h4>Favourite Songs:</h4>
        <ul>
          {this.props.songs.map((song, idx) => {
            return <li key={idx}>{song}</li>;
          })}
        </ul>

        <LikeButton />
        <hr></hr>
      </>
    );
  }
}
export default AlbumCard;
