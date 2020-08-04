import React from "react";

class Card extends React.Component {
  state = {
    like: true,
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
        <button onClick={this.props.onClick}>Like</button>
        <h4>{this.props.likeStatus}</h4>
        <hr></hr>
      </>
    );
  }
}
export default Card;
