import React, { useState, useEffect, useCallback } from "react";
import { CheckCircle, XCircle } from "react-feather"; // You can swap to react-icons if preferred
import SEO from "../Components/SEO.jsx";

function FlagQuiz() {
  const [countriesName, setCountriesName] = useState([]);
  const [countriesData, setCountriesData] = useState({});
  const [options, setOptions] = useState([]);
  const [correctAns, setCorrectAns] = useState("");
  const [selectedAns, setSelectedAns] = useState("");
  const [disableOptions, setDisableOptions] = useState(false);
  const [score, setScore] = useState(0);
  const [usedCountries, setUsedCountries] = useState([]);
  const createRandomBtns = useCallback(() => {
    const remaining = countriesName.filter(
      (name) => !usedCountries.includes(name)
    );

    if (remaining.length === 0) {
      // Optional: handle game over here
      return;
    }

    const rightAns = remaining[Math.floor(Math.random() * remaining.length)];
    const wrongAns = countriesName
      .filter((country) => country !== rightAns)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const mixedAns = [...wrongAns, rightAns].sort(() => 0.5 - Math.random());

    setCorrectAns(rightAns);
    setOptions(mixedAns);
    setSelectedAns("");
    setDisableOptions(false);

    // Instead of including usedCountries in dependencies,
    // update here with functional update:
    setUsedCountries((prevUsed) => [...prevUsed, rightAns]);
  }, [countriesName]); // <-- remove usedCountries from deps

  const handleOnClick = (e) => {
    const userChoice = e.target.innerText;
    setSelectedAns(userChoice);
    setDisableOptions(true);

    if (userChoice === correctAns) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      createRandomBtns();
    }, 1000);
  };

  useEffect(() => {
    (async () => {
      try {
        const url = "https://restcountries.com/v3.1/all?fields=name,flags";
        const response = await fetch(url);
        const countryData = await response.json();

        if (countryData) {
          const names = [];
          const dataMap = {};

          countryData.forEach((country) => {
            names.push(country.name.common);
            dataMap[country.name.common] = country.flags.png;
          });

          setCountriesName(names);
          setCountriesData(dataMap);
        }
      } catch (e) {
        console.log("🌍 Failed fetching flags:", e);
      }
    })();
  }, []);

  useEffect(() => {
    if (countriesName.length > 0) {
      createRandomBtns();
    }
  }, [countriesName, createRandomBtns]);

  return (
    <>
      <SEO
        title="Flag Quiz | Flashcard Learning App"
        description="Test your geography knowledge with the Flag Quiz. Identify flags from around the world!"
      />
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-purple-400 mb-8 tracking-wide animate-pulse">
          🌍 Flag Quiz Game
        </h1>

        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col items-center transition-all duration-500">
          <div className="mb-6 text-xl font-semibold text-green-400">
            Score: {score}
          </div>

          {correctAns && (
            <>
              <img
                src={countriesData[correctAns]}
                alt="Country Flag"
                className="w-72 h-44 object-contain border-4 border-purple-500 rounded-xl mb-8 shadow-lg transition-all duration-300"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {options.map((option, i) => {
                  const isCorrect = option === correctAns;
                  const isClicked = option === selectedAns;

                  const baseStyles =
                    "w-full py-4 px-6 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg";
                  const btnStyle = isClicked
                    ? isCorrect
                      ? "bg-green-600 flex items-center justify-center gap-2"
                      : "bg-red-600 flex items-center justify-center gap-2"
                    : disableOptions && isCorrect
                    ? "bg-green-500"
                    : "bg-purple-700 hover:bg-purple-600";

                  return (
                    <button
                      key={i}
                      className={`${baseStyles} ${btnStyle}`}
                      disabled={disableOptions}
                      onClick={handleOnClick}
                    >
                      {option}
                      {isClicked && isCorrect && (
                        <CheckCircle className="ml-2" />
                      )}
                      {isClicked && !isCorrect && <XCircle className="ml-2" />}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default FlagQuiz;
