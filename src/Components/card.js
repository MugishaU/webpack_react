import React from "react";

class Card extends React.Component {
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

        <i
          style={{ cursor: "pointer", color: "darkgreen" }}
          onClick={this.toggleLike}
          className={this.state.like ? this.state.fill : this.state.empty}
        ></i>
        <hr></hr>
      </>
    );
  }
}
export default Card;
