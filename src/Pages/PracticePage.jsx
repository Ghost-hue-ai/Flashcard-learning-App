import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import englishDic from "../Languages/English.js";
import spanishSentences from "../Languages/Spanish.js";
import FlashCard from "../Components/PredefinedFlashcard.jsx";
import { useDispatch } from "react-redux";
import { updateSpanishCardData, updateRecentLogs } from "../store/CompletedCard.js";
import SEO from "../Components/SEO.jsx";

function PracticePage() {
  const { languageName } = useParams();
  const dispatch = useDispatch();

  const [started, setStarted] = useState(false);
  const [randomIndex, setRandomIndex] = useState(null);
  const [usedIndexes, setUsedIndexes] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const isSpanish = languageName === "learnSpanish";
  const data = isSpanish ? spanishSentences : englishDic;
  const storageKey = isSpanish ? "usedSpanishCard" : "usedEnglishCard";

  const getRandomIndex = useCallback((dataLength, used) => {
    const available = Array.from({ length: dataLength }, (_, i) => i).filter(
        (i) => !used.includes(i)
    );
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  }, []);

  const startPractice = () => {
    const stored = localStorage.getItem(storageKey);
    let loadedIndexes = [];

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) loadedIndexes = parsed;
      } catch (err) {
        console.error("Error parsing", storageKey, err);
      }
    }

    const isFresh = loadedIndexes.length === 0;
    const next = getRandomIndex(data.length, isFresh ? [] : loadedIndexes);

    if (next !== null) {
      setRandomIndex(next);
      const updated = isFresh ? [next] : loadedIndexes;
      setUsedIndexes(updated);
      if (isFresh) {
        localStorage.setItem(storageKey, JSON.stringify([next]));
      }
    }

    setStarted(true);
  };

  const handleCardComplete = ({ id, question, answer }) => {
    setShowAnswer(true);

    if (isSpanish) {
      dispatch(updateSpanishCardData({ id, question, answer }));
      dispatch(updateRecentLogs(`Completed Spanish Flashcard #${id}`));
    }

    setTimeout(() => {
      const next = getRandomIndex(data.length, [...usedIndexes, randomIndex]);
      if (next !== null) {
        setRandomIndex(next);
        setUsedIndexes((prev) => {
          const updated = [...prev, next];
          localStorage.setItem(storageKey, JSON.stringify(updated));
          return updated;
        });
        setShowAnswer(false);
      }
    }, 3000);
  };

  const renderCard = () => {
    if (randomIndex === null || !data[randomIndex]) return null;
    const card = data[randomIndex];

    return (
        <FlashCard
            key={card.id}
            id={card.id}
            question={card.sentence || card.question}
            answer={card.translation || card.answer}
            choices={card.choices}
            reasoning={card.reason}
            language={isSpanish ? "Spanish" : "English"}
            category={card.category}
            showAnswer={showAnswer}
            handleClick={handleCardComplete}
        />
    );
  };

  return (
      <>
        <SEO
            title="Practice | Flashcard Learning App"
            description="Test your knowledge and reinforce learning with flashcards."
        />
        <div className="min-h-screen w-full bg-slate-900 text-white flex flex-col items-center justify-center p-6">
          {!started ? (
              <div className="text-center max-w-xl">
                <h1 className="text-3xl font-extrabold mb-4">
                  Ready to Practice {isSpanish ? "Spanish" : "English"}?
                </h1>
                <p className="text-slate-400 mb-6">
                  Test your knowledge using flashcards and track your progress. Click below to begin!
                </p>
                <button
                    onClick={startPractice}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-md transition"
                >
                  Start Practice
                </button>
              </div>
          ) : usedIndexes.length < data.length ? (
              <div className="w-full max-w-xl flex flex-col items-center gap-6">
                {renderCard()}
                <div className="text-sm text-slate-400 font-mono">
                  Progress: <span className="text-white">{usedIndexes.length}</span> / {data.length}
                </div>
              </div>
          ) : (
              <div className="text-green-400 font-bold text-xl text-center">
                🎉 You've completed all {isSpanish ? "Spanish" : "English"} flashcards!
              </div>
          )}
        </div>
      </>
  );
}

export default PracticePage;
