import React from "react";

function Card(props) {
  return (
    <>
      <h3>Artist: {props.artist}</h3>
      <h4>Genre: {props.genre}</h4>
      <h4>Album: {props.album}</h4>
      <h4>Favourite Songs:</h4>
      <ul>
        {props.songs.map((song, idx) => {
          return <li key={idx}>{song}</li>;
        })}
      </ul>
      <button onClick={props.onClick}>Like</button>
      <h4>{props.likeStatus}</h4>
      <hr></hr>
    </>
  );
}

export default Card;
