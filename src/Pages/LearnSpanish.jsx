import React, { useState, useEffect } from "react";
import spanishSentences from "../Languages/Spanish";
import Flashcard from "../Components/PredefinedFlashcard";
import {updateSpanishCardData, updateRecentLogs, updateCard, updateEnglishCardData} from "../store/CompletedCard.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import englishDic from "../Languages/English.js";
import CompletedCards from "../Components/CompletedCards.jsx";
import FlashCard from "../Components/PredefinedFlashcard.jsx";

const LearnSpanish = () => {
  const completedCards = useSelector((state) => state.card.completedSpanishCard);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
          <h3 className="text-center text-xl font-semibold text-gray-500 animate-pulse">
            Loading...
          </h3>
        </div>
      ) : (
        <div className="relative p-6 pt-20 max-w-7xl mx-auto min-h-screen"




        >
          {/* Button */}
          <div className="absolute top-6 right-6 z-10">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-300"
              onClick={() =>navigate(`/dashboard/learnSpanish/practice`)}
            >
              Practice
            </button>
          </div>

          {/* Your grid of flashcards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                spanishSentences &&
                spanishSentences.map((dict)=> {
                  let dictId = dict.id
                    return <div key={dictId} className="flex justify-around ">
                      <FlashCard
                          id = {dict.id}
                          question={dict.sentence}

                          answer={dict.translation}


                          language="Spanish"
                          category={dict.category}/>










                    </div>


                })
            }
          </div>

        </div>
      )}
    </>
  );
};

export default LearnSpanish;
