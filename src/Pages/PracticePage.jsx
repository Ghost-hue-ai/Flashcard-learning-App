import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import englishDic from "../Languages/English.js";
import spanishSentences from "../Languages/Spanish.js";
import CompletedCards from "../Components/CompletedCards.jsx";
import FlashCard from "../Components/PredefinedFlashcard.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSpanishCardData,
  updateRecentLogs,
} from "../store/CompletedCard.js";
import SEO from "../Components/SEO.jsx";

function PracticePage() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [usedSpanishIndexes, setUsedSpanishIndexes] = useState([]);
  const [usedEnglishIndexes, setUsedEnglishIndexes] = useState([]);
  const completedSpanish = useSelector(
    (state) => state.card?.completedSpanishCard || {}
  );
  const dispatch = useDispatch();
  const { languageName } = useParams();

  const getRandomIndex = useCallback((dataLength, used) => {
    const available = Array.from({ length: dataLength }, (_, i) => i).filter(
      (i) => !used.includes(i)
    );
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  }, []);

  // Load usedSpanishIndexes from localStorage on mount
  useEffect(() => {
    if (languageName === "learnSpanish") {
      const stored = localStorage.getItem("usedSpanishCard");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setUsedSpanishIndexes(parsed);
          }
        } catch (err) {
          console.error(
            "Failed to parse usedSpanishCard from localStorage:",
            err
          );
        }
      }
    }
    if (languageName === "learnEnglish") {
      // Similarly, you can implement loading usedEnglishIndexes here if you want persistence for English.
    }
  }, [languageName]);

  // Set initial random index when language changes and usedIndexes update
  useEffect(() => {
    if (languageName === "learnEnglish") {
      const next = getRandomIndex(englishDic.length, usedEnglishIndexes);
      if (next !== null) {
        setRandomIndex(next);
        setUsedEnglishIndexes((prev) => [...prev, next]);
      }
    } else if (languageName === "learnSpanish") {
      const next = getRandomIndex(spanishSentences.length, usedSpanishIndexes);
      if (next !== null) {
        setRandomIndex(next);
        setUsedSpanishIndexes((prev) => [...prev, next]);
      }
    }
  }, [languageName]);

  const handleNextSpanish = () => {
    const next = getRandomIndex(spanishSentences.length, usedSpanishIndexes);
    if (next !== null) {
      setRandomIndex(next);
      setUsedSpanishIndexes((prev) => {
        const updated = [...prev, next];
        localStorage.setItem("usedSpanishCard", JSON.stringify(updated));
        return updated;
      });
    }
  };

  const handleNextEnglish = () => {
    const next = getRandomIndex(englishDic.length, usedEnglishIndexes);
    if (next !== null) {
      setRandomIndex(next);
      setUsedEnglishIndexes((prev) => [...prev, next]);
      // Optional: add localStorage persistence here too
    }
  };

  return (
    <>
      <SEO
        title="Practice | Flashcard Learning App"
        description="Test your knowledge and reinforce learning with practice sessions for all subjects."
      />
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center p-6">
        {languageName === "learnSpanish" ? (
          usedSpanishIndexes.length < spanishSentences.length ? (
            <div className="w-full max-w-xl flex flex-col items-center gap-6">
              {(() => {
                const dict = spanishSentences[randomIndex];
                const isCompleted = completedSpanish[dict.id];

                return isCompleted ? (
                  <CompletedCards
                    key={dict.id}
                    question={dict.sentence}
                    answer={dict.translation}
                    choices={dict.choices}
                    language="Spanish"
                    category={dict.category}
                  />
                ) : (
                  <FlashCard
                    key={dict.id}
                    id={dict.id}
                    question={dict.sentence}
                    answer={dict.translation}
                    choices={dict.choices}
                    language="Spanish"
                    category={dict.category}
                    handleClick={({ id, question, answer }) => {
                      setTimeout(() => {
                        dispatch(
                          updateSpanishCardData({ id, question, answer })
                        );
                        dispatch(
                          updateRecentLogs(
                            `Completed Spanish Learning Flashcard #${id}`
                          )
                        );
                      }, 4000);
                    }}
                  />
                );
              })()}
              <div className="flex bg-gray-700 w-full justify-between px-2 py-4 rounded-xl">
                <button
                  onClick={handleNextSpanish}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-white font-semibold shadow-lg transition duration-300"
                >
                  Show Another
                </button>
                <span className="font-bold text-2xl">
                  {" "}
                  {usedSpanishIndexes.length}/{spanishSentences.length}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-green-400 font-bold text-xl text-center">
              🎉 You've completed all Spanish flashcards!
            </div>
          )
        ) : languageName === "learnEnglish" ? (
          usedEnglishIndexes.length < englishDic.length ? (
            <div className="w-full max-w-xl flex flex-col items-center gap-6">
              <FlashCard
                key={englishDic[randomIndex].id}
                id={englishDic[randomIndex].id}
                question={englishDic[randomIndex].question}
                choices={englishDic[randomIndex].choices}
                answer={englishDic[randomIndex].answer}
                reasoning={englishDic[randomIndex].reason}
                category={englishDic[randomIndex].category}
              />
              <div className="w-full bg-gray-700 flex items-center justify-between p-4 rounded-3xl">
                <button
                  onClick={handleNextEnglish}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-white font-semibold shadow-lg transition duration-300"
                >
                  Show Another
                </button>
                <span className="text-sm text-slate-300 font-mono">
                  Progress:{" "}
                  <span className="text-white font-bold">
                    {usedEnglishIndexes.length}
                  </span>{" "}
                  / {englishDic.length}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-green-400 font-bold text-xl text-center">
              🎉 You've completed all English flashcards!
            </div>
          )
        ) : null}
      </div>
    </>
  );
}

export default PracticePage;
