import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SpotifyApiContext } from "react-spotify-api";

ReactDOM.render(
  <SpotifyApiContext.Provider
    value={
      "BQAl6aP9Lwit80mOIUauc_fj19z2FqltxrGMRV2rlrSiK9LSXT4c3zpgy1A_Wl7XA6Dl-ahx8ZxysFUAJdIl6a-s4eoDNehWidcW4r1X6wiRqHuLJkd6DzjP21qtogp_hnvuLJCe7Q_1n_Y"
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SpotifyApiContext.Provider>,
  document.getElementById("root")
);
