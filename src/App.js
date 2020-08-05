import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AlbumPage from "./Containers/AlbumPage";
import { useArtist } from "react-spotify-api";

class App extends React.Component {
  render() {
    return (
      <>
        <ExampleHooks id={"3Y7RZ31TRPVadSFVy1o8os"} />
        <ExampleHooks id={"4ULO7IGI3M2bo0Ap7B9h8a"} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <h1 id="welcome">Welcome</h1>
                <h3>go to /albums</h3>
              </>
            )}
          />
          <Route path="/albums" component={AlbumPage} />
          <Route render={() => <h1 id="notfound">Page Not Found!</h1>} />
        </Switch>
      </>
    );
  }
}
export default withRouter(App);

function ExampleHooks(props) {
  const { data, loading, error } = useArtist(props.id);
  let artist = data;
  console.log(artist);
  return artist ? (
    <div>
      <h1>{artist.name}</h1>
      <ul>
        {artist.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <img src={artist.images[0].url}></img>
    </div>
  ) : null;
}
