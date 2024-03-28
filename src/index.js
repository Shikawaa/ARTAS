import React from "react";
import ReactDOM from "react-dom/client";
import MovieSelector from "./RandomMovie";
import OmdbApi from "./OMDBApi";

ReactDOM.createRoot(document.getElementById("root")).render(<OmdbApi />);
