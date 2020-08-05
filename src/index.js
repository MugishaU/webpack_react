import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SpotifyApiContext } from "react-spotify-api";

ReactDOM.render(
  <SpotifyApiContext.Provider
    value={
      "BQBL-1g7aFBqRqWakiV87PfB4NN7Tp0uRbwrGOLpmgx6b3TckdZk5HCv9iLrOxs3WHFLoYCTKxgYHWuqPNqK0bi1eQCfqWdADwOP_OtW2kH3GDGHjqeojxnPCGleqg3qY84_v3g0gpjF2uI"
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SpotifyApiContext.Provider>,
  document.getElementById("root")
);
