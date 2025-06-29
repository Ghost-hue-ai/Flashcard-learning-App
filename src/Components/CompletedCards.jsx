import React, { useState } from "react";
import { useDispatch } from "react-redux";

function GrammarFlashcard({
  language,
  question,
  choices,
  answer,
  selectedChoice,
  setSelectedChoice,
  reasoning,
  category,
  className = "",
  handleClick,
  id,
}) {
  const dispatch = useDispatch();
  const [flipped, setFlipped] = useState(false);

  // If selectedChoice is undefined, treat as completed and non-interactive
  const isAnswered = selectedChoice !== undefined && selectedChoice !== null;

  const handleCardClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      className={`w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] h-72 cursor-pointer ${className}`}
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => ["Enter", " "].includes(e.key) && handleCardClick()}
      aria-label={`Grammar flashcard in ${language}`}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full glass-card rounded-xl px-4 py-3 flex flex-col overflow-hidden justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {category && (
            <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full select-none">
              {category}
            </div>
          )}
          <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full select-none flex items-center gap-1">
            <span>Done</span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 text-center">
            {language}
          </div>
          <div className="text-white font-semibold text-sm mb-2 text-center">
            {question}
          </div>
          {choices && (
            <ul className="text-white text-sm space-y-1 pl-5">
              {choices.map((choice, i) => {
                let className = "transition-colors duration-200 ";
                if (selectedChoice !== undefined && selectedChoice !== null) {
                  if (choice === answer) {
                    className += "text-green-400 font-bold";
                  } else if (choice === selectedChoice) {
                    className += "text-red-400 line-through font-bold";
                  } else {
                    className += "text-gray-400";
                  }
                } else {
                  className += "text-gray-400";
                }
                return (
                  <li key={i} className={className}>
                    {choice}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full rotate-y-180 glass-card rounded-xl px-4 py-3 flex flex-col justify-start items-center overflow-auto"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-xs font-semibold text-blue-300 uppercase tracking-wide mb-2">
            Answer
          </div>
          <div className="text-white font-bold text-center mb-2">{answer}</div>
          {reasoning && (
            <div className="text-white text-sm text-center px-2">
              <span className="font-semibold text-green-400">Why:</span>{" "}
              {reasoning}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GrammarFlashcard;
