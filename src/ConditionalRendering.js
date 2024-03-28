import React, { useState } from "react";

export default function ConditionalRendering() {
  const [indice, showIndice] = useState([
    {
      director: false,
      genre: false,
      ratings: false,
      actors: false,
      runtime: false,
      awards: false,
    },
  ]);
}
