import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

function Flashcard({ name, question, answer, handleEdit, handleDelete }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="grouprelative w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] h-64 perspective cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) =>
        ["Enter", " "].includes(e.key) && setFlipped((prev) => !prev)
      }
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden glass-card rounded-xl px-4 py-3 flex flex-col justify-between overflow-hidden">
          <div className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">
            {name}
          </div>
          <div className="text-sm text-white font-bold text-center flex-grow flex items-center justify-center overflow-auto">
            {question}
          </div>
          <div className="text-[10px] text-white/60 text-right mt-2 italic">
            Tap to reveal →
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 glass-card rounded-xl px-4 py-3 flex flex-col justify-between overflow-hidden">
          <div className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-2">
            Answer
          </div>
          <div className="text-sm text-white whitespace-pre-wrap overflow-auto flex-grow">
            {answer}
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit();
              }}
              className="p-1 bg-white/10 hover:bg-white/20 text-white rounded-full transition"
              title="Edit"
            >
              <Pencil size={14} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
              className="p-1 bg-red-400/10 hover:bg-red-400/30 text-white rounded-full transition"
              title="Delete"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
