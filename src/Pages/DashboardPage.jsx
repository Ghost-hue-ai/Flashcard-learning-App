import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PreDefinedSubject from "../appwrite/PredefinedSubject.js";
import { Languages, ListPlus } from "lucide-react";
import appService from "../appwrite/authConfig.js";
import { useDispatch, useSelector } from "react-redux";
import { MapPin } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { resetCards } from "../store/CompletedCard.js";
import storageServ from "../appwrite/bucketConfig.js";
import { Menu } from "lucide-react"; // If you're using Lucide, or use a react-icons alternative
import { NavLink } from "react-router-dom";
import SEO from "../Components/SEO.jsx";

const DashboardPage = () => {
  const { spanishCompleted, englishCompleted, recentLogs } = useSelector(
    (state) => state.card
  );

  const languageProgress = [
    { language: "Spanish", completed: spanishCompleted },
    { language: "English", completed: englishCompleted },
  ];
  const [profilePicUrl, setProfilePicUrl] = useState();
  const profilePicId = useSelector((state) => state.card.profilePic);
  const userInfo = useSelector((state) => state.auth.userData);
  const [isBouncing, setIsBouncing] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [predefinedSubjects, setPredefinedSubjects] = useState([]);
  const [user, setUser] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userData = useSelector((state) => state.card.userData);
  const [menuOpen, setMenuOpen] = useState(false);

  async function fetchPredefinedSubjects() {
    const subjectsDoc = await PreDefinedSubject.getAllPredefiniedSubjects();
    setPredefinedSubjects(subjectsDoc.documents);
    setLoading(false);
  }
  function getUser() {
    setUser(userInfo);
  }
  useEffect(() => {
    (() => {
      try {
        const url = storageServ.getFilePreview(profilePicId);
        console.log("🆔 profilePicId:", profilePicId);
        console.log("🖼️ Preview URL from Appwrite:", url); // <-- Log this
        if (url) {
          setProfilePicUrl(url);
        }
      } catch (e) {
        console.log("❌ Error fetching profile pic preview:", e);
      }
    })();
  }, [profilePicId]);

  useEffect(() => {
    (async () => {
      await fetchPredefinedSubjects();
      await getUser();
    })();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <SEO
        title="Dashboard | Flashcard Learning App"
        description="View your study progress, completed flashcards, and recent activity on your dashboard."
      />
      <div className="min-h-screen bg-gray-50 text-gray-900 p-8 flex flex-col">
        {/* HEADER */}
        <header className="flex min-w-full shadow-2xs justify-between items-center px-6 py-4 mb-8 max-w-6xl mx-auto bg-white rounded-xl">
          {/* Logo or App Name */}
          <h1 className="text-3xl font-extrabold tracking-tight text-purple-700">
            FlashLearn
          </h1>

          {/* User Section */}
          {/* Combined Dropdown Section */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-3 focus:outline-none hover:ring-2 hover:ring-purple-300 rounded-full p-1 transition"
            >
              {profilePicUrl ? (
                <img
                  src={profilePicUrl}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center font-bold text-lg">
                  {userData?.firstName?.[0] || user?.name || "U"}
                </div>
              )}

              <span className="text-sm font-semibold text-gray-800 hidden sm:block">
                {userData?.firstName || user?.name || "User"}
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-12 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20 divide-y divide-gray-200">
                {/* Account Actions */}
                <div className="py-2">
                  <button
                    onClick={async () => {
                      await appService.logOutUser();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 font-semibold"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => {
                      navigate("/updateProfile");
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 font-semibold"
                  >
                    Update Profile
                  </button>
                  <button
                    onClick={() => {
                      navigate("/yourProfile");
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 font-semibold"
                  >
                    Your Profile
                  </button>
                </div>

                {/* Navigation Pages */}
                <div className="py-2">
                  {[
                    { label: "About", path: "/about" },
                    { label: "Contact", path: "/contact" },
                    { label: "Privacy", path: "/privacy" },
                  ].map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        navigate(item.path);
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 font-semibold"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* LEFT: Subjects Grid */}
          <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading ? (
              <h2 className="text-2xl font-bold animate-pulse text-gray-600 col-span-full">
                Loading...
              </h2>
            ) : (
              <>
                {predefinedSubjects.map((subject) => (
                  <div
                    onClick={() => {
                      if (subject.name.toLowerCase().includes("spanish")) {
                        navigate("/dashboard/learnSpanish");
                      } else if (
                        subject.name.toLowerCase().includes("english")
                      ) {
                        navigate("/dashboard/learnEnglish");
                      } else {
                        console.log("Unknown subject:", subject.name);
                      }
                    }}
                    key={subject.$id}
                    className="bg-white rounded-xl border border-gray-300 p-6 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer flex flex-col items-center"
                  >
                    <Languages className="mb-4 text-purple-600" size={48} />
                    <h2 className="text-lg font-semibold text-center">
                      {subject.name}
                    </h2>
                    <h3 className="text-sm text-gray-500 uppercase mt-1">
                      {subject.category}
                    </h3>
                  </div>
                ))}

                {/* Custom Flashcard - different style */}
                <div
                  onClick={() => {
                    navigate("/subjects");
                  }}
                  className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl p-8 shadow-lg cursor-pointer flex flex-col items-center text-white hover:brightness-110 transition-transform transform hover:-translate-y-1"
                >
                  <ListPlus className="mb-6" size={56} />
                  <h2 className="text-xl font-extrabold text-center">
                    Create Unique Flashcards
                  </h2>
                  <h3 className="text-sm uppercase opacity-80 mt-2 tracking-wider">
                    Custom FlashCards
                  </h3>
                </div>

                {/* Flag Quiz Card */}
                <div
                  onClick={() => navigate("/dashboard/flagQuiz")}
                  className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 shadow-lg cursor-pointer flex flex-col items-center text-white hover:brightness-110 transition-transform transform hover:-translate-y-1"
                >
                  <MapPin className="mb-6" size={56} />
                  <h2 className="text-xl font-extrabold text-center">
                    Play Flag Quiz
                  </h2>
                  <h3 className="text-sm uppercase opacity-80 mt-2 tracking-wider">
                    Test Your Geography
                  </h3>
                </div>
              </>
            )}
          </section>

          {/* RIGHT: Sidebar with Recent Logs & Pie Charts */}
          <section className="w-full bg-white rounded-xl border border-gray-300 shadow flex flex-row overflow-hidden max-w-6xl mx-auto">
            {/* Recent Logs Sidebar */}
            <div className="w-72 bg-gray-50 border-r border-gray-200 p-6  max-h-[400px]">
              <h2 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">
                Recent Activity
              </h2>
              <ul className="flex flex-col gap-3 max-h-[350px] pr-2 overflow-scroll">
                {recentLogs && recentLogs.length > 0 ? (
                  recentLogs.map((log, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      {log}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500 italic">
                    No Recent Logs
                  </li>
                )}
              </ul>
            </div>

            {/* Pie Charts Area */}
            <div className="flex-1 p-6 overflow-auto">
              <h2 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">
                Completion Stats
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languageProgress.map(({ language, completed }) => {
                  const data = [
                    { name: "Completed", value: completed },
                    { name: "Remaining", value: 100 - completed },
                  ];
                  const COLORS = ["#8b5cf6", "#e5e7eb"];

                  return (
                    <div key={language} className="flex flex-col items-center">
                      <h3 className="text-md font-semibold mb-2">{language}</h3>
                      <PieChart width={200} height={200}>
                        <Pie
                          data={data}
                          innerRadius={60}
                          outerRadius={80}
                          dataKey="value"
                          stroke="none"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                      <span className="text-sm mt-1 text-gray-600">
                        {completed}% Completed
                      </span>
                    </div>
                  );
                })}
                <button
                  onClick={() => {
                    dispatch(resetCards());
                    setIsBouncing(true);
                    setTimeout(() => setIsBouncing(false), 300); // animation duration
                  }}
                  className={`
        bg-red-600 hover:bg-red-700 active:bg-red-800
        text-white font-semibold
        px-5 py-2 rounded-lg
        shadow-md
        transition
        duration-300
        focus:outline-none focus:ring-2 focus:ring-red-400
        select-none
        flex items-center gap-2
        ${isBouncing ? "animate-bounce" : ""}
      `}
                >
                  {/* Refresh Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582M20 20v-5h-.581M4.582 9A7.5 7.5 0 0112 4.5a7.5 7.5 0 017.5 7.5M12 19.5a7.5 7.5 0 01-7.5-7.5"
                    />
                  </svg>
                  Reset Progress
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
