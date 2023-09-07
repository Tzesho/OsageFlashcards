// Flashcard.js

import React, { useState } from "react";
import "./Flashcard.css";

export default function Flashcard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="card-front">Front Content</div>
      <div className="card-back">Back Content</div>
    </div>
  );
}
