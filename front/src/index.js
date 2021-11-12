import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import { setRTLTextPlugin } from "react-map-gl"; //allow arabic

setRTLTextPlugin(
  // find out the latest version at https://www.npmjs.com/package/@mapbox/mapbox-gl-rtl-text
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  // lazy: only load when the map first encounters Hebrew or Arabic text
  true
);
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
