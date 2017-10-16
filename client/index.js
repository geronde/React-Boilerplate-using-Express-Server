import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

// This container's purpose is to enable hot reload for React. For more, visit https://github.com/gaearon/react-hot-loader .

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root"),
);

// Webpack Hot Module Replacement API
if (module.hot) {
	 const NextApp = require("./App").default;
  module.hot.accept("./App", () => { render(NextApp); });
}
