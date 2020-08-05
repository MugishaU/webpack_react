import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AlbumPage from "./Containers/AlbumPage";
class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <h1 id="welcome">Welcome</h1>} />
          <Route path="/albums" component={AlbumPage} />
          <Route render={() => <h1 id="notfound">Page Not Found!</h1>} />
        </Switch>
      </>
    );
  }
}
export default withRouter(App);
