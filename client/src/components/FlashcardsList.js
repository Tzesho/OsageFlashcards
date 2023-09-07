// FlashcardsList.js

import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardsList({ flashcards }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {flashcards.map((card, index) => (
        <Flashcard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
}
