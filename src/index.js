import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1";
axios.defaults.headers.common["Authorization"] =
  "Bearer AAAAAAAAAAAAAAAAAAAAANWdFwEAAAAAHEVffuHpCqCzQOH%2BHdFDQdt0%2FTc%3DNFIHiieYWx6yNAKM3YE3lbllLMYdAwqvCimctvMCZ2SqzGGDuC";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
