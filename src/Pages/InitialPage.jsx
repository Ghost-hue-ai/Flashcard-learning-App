import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { GitHub, Twitter, Mail } from "react-feather";
import Footer from '../Components/Footer';
import appService from '../appwrite/authConfig.js';
import {
  Languages,
  Brain,
  WifiOff,
  BarChart3,
  BadgeCheck,
  RefreshCw,
} from 'lucide-react';

function InitialPage() {
  const navigate = useNavigate();

  const activeStyle = {
    color: 'purple',
    fontWeight: 'bold',
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 flex flex-col justify-between">

        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-blue-500 shadow-md">
          <h2 className="font-bold text-2xl text-white tracking-wide">FlashCard Hub</h2>
          <button
              onClick={() => appService.loginWithAuth0()}
              className="bg-white text-blue-700 font-semibold text-lg px-5 py-2 rounded hover:bg-blue-100 transition"
          >
            Start Learning
          </button>

        </header>

        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 px-6 py-16 max-w-7xl mx-auto">

          {/* Text Content */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl font-extrabold text-blue-800 leading-snug">
              Learn Smarter, Not Harder
            </h1>
            <p className="text-lg text-gray-700">
              Master any subject with our smart flashcard app using spaced repetition.
              Learn on any device — anywhere, anytime.
            </p>
            <button
                onClick={() => appService.loginWithAuth0()}
                className="flex items-center gap-3 bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
            >
              <img className="w-6 h-6" src="/computer.png" alt="logo" />
              Get Started Free
            </button>
          </div>

          {/* Illustration */}
          <div className="w-full max-w-xl animate-fadeIn">
            <img
                src="/tree.png"
                alt="learning illustration"
                className="w-full h-auto rounded-xl "
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-14">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-8">What Our Users Say</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Aarav S.',
                  quote: "I passed my exams thanks to this app! The spaced repetition makes a huge difference.",
                },
                {
                  name: 'Sneha T.',
                  quote: "Simple, clean, and effective. Exactly what I needed to stay on track with my language goals.",
                },
                {
                  name: 'Raj K.',
                  quote: "Offline support is a game changer. Now I study even on bus rides!",
                }
              ].map((testimonial, idx) => (
                  <div key={idx} className="bg-purple-50 p-6 rounded-lg shadow text-left">
                    <p className="italic text-gray-800 mb-3">“{testimonial.quote}”</p>
                    <p className="font-semibold text-purple-700">— {testimonial.name}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why FlashMaster Section */}
        {/* Why FlashMaster Section */}
        <section className="py-16 bg-purple-100 text-gray-800">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-10">Why Choose FlashMaster?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Learn English & Spanish',
                  desc: 'Access curated decks to master grammar, vocabulary, and more — tailored for both English and Spanish learners.',
                  icon: <Languages size={32} className="text-purple-700" />,
                },
                {
                  title: 'Spaced Repetition',
                  desc: 'Boost retention with scientifically backed review intervals that adapt to your memory curve.',
                  icon: <Brain size={32} className="text-purple-700" />,
                },
                {
                  title: 'Offline Access',
                  desc: 'No internet? No problem. Study anywhere, anytime — even without Wi-Fi.',
                  icon: <WifiOff size={32} className="text-purple-700" />,
                },
                {
                  title: 'Progress Tracking',
                  desc: 'See your learning stats and celebrate milestones with our built-in progress tracker.',
                  icon: <BarChart3 size={32} className="text-purple-700" />,
                },
                {
                  title: 'Interactive Pre-Cards',
                  desc: 'Warm up your brain with short pre-quizzes that prepare you for the main flashcard set.',
                  icon: <BadgeCheck size={32} className="text-purple-700" />,
                },
                {
                  title: 'Multi-Device Sync',
                  desc: 'Start on your phone, continue on your laptop. Your learning journey stays synced.',
                  icon: <RefreshCw size={32} className="text-purple-700" />,
                },
              ].map((card, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
                    <div className="mb-4">{card.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-purple-700">{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 mt-10">
          <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-purple-600 mb-2">FlashMaster</h2>
              <p className="text-sm">Your ultimate flashcard companion for smarter study sessions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                {['/dashboard', '/about', '/contact'].map((path, i) => (
                    <li key={i}>
                      <NavLink
                          to={path}
                          style={({ isActive }) => (isActive ? activeStyle : undefined)}
                          className="hover:text-purple-600 transition"
                      >
                        {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                      </NavLink>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                  <GitHub size={20} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                  <Twitter size={20} />
                </a>
                <a href="mailto:youremail@example.com" className="hover:text-purple-600">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-300">
            © {new Date().getFullYear()} FlashMaster. All rights reserved.
          </div>
        </footer>
      </div>
  );
}

export default InitialPage;
