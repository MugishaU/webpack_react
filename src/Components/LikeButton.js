import React from "react";

class LikeButton extends React.Component {
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
  };

  render() {
    return (
      <i
        style={{ cursor: "pointer", color: "green" }}
        onClick={this.toggleLike}
        className={this.state.like ? this.state.fill : this.state.empty}
      />
    );
  }
}
export default LikeButton;
