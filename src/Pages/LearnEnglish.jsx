import React, { useState, useEffect } from "react";
import FlashCard from "../Components/PredefinedFlashcard.jsx";
import englishDic from "../Languages/English.js";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCard,
  updateEnglishCardData,
  updateRecentLogs,
} from "../store/CompletedCard.js";
import CompletedCards from "../Components/CompletedCards.jsx";
import { useNavigate } from "react-router-dom";
import SEO from "../Components/SEO.jsx";

const LearnEnglish = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const completedCards = useSelector((state) => state.card.completedCards);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="Learn English | Flashcard Learning App"
        description="Practice and master English vocabulary and grammar with interactive flashcards."
      />
      {loading ? (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
          <h3 className="text-center text-xl font-semibold text-gray-500 animate-pulse">
            Loading...
          </h3>
        </div>
      ) : (
        <div className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-white">
          {/* Header Row */}
          <div className="flex justify-between items-center max-w-7xl mx-auto mb-6">
            <h2 className="text-3xl font-bold text-blue-900">Learn English</h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-300"
              onClick={() => {
                // Future: add practice logic here!
                navigate(`/dashboard/learnEnglish/practice`);
              }}
            >
              Practice
            </button>
          </div>

          {/* Flashcards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {englishDic &&
              englishDic.map((dict) => {
                let dictId = dict.id;
                if (completedCards[dictId]) {
                  return (
                    <div key={dictId} className="flex justify-around ">
                      <CompletedCards
                        question={dict.question}
                        choices={dict.choices}
                        answer={dict.answer}
                        reasoning={dict.reason}
                        language="English"
                        selectedChoice={completedCards[dictId].selectedChoice}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={dictId} className="flex justify-around ">
                      <FlashCard
                        id={dict.id}
                        language="English"
                        question={dict.question}
                        choices={dict.choices}
                        answer={dict.answer}
                        reasoning={dict.reason}
                        handleClick={({
                          id,
                          selectedChoice,
                          correctAnswer,
                          completed,
                        }) => {
                          setTimeout(() => {
                            dispatch(
                              updateCard({
                                id,
                                selectedChoice,
                                correctAnswer,
                                completed,
                              })
                            );
                            dispatch(updateEnglishCardData());
                            dispatch(
                              updateRecentLogs(
                                `Completed English Learning Flashcard #${dict.id}`
                              )
                            );
                          }, 4000);
                        }}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default LearnEnglish;
