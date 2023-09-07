// Flashcard.js

import React, { useState } from "react";
import "./Flashcard.css";

export default function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="card-front">{question}</div>
      <div className="card-back">{answer}</div>
    </div>
  );
}
