import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import SEO from "../Components/SEO.jsx";

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Flashcard Learning App"
        description="Contact the Flashcard Learning App team for questions, feedback, or collaboration opportunities."
      />
      <div className="min-h-screen bg-gray-50 text-gray-800 p-8 flex flex-col items-center justify-center">
        <div className="max-w-xl bg-white shadow-md rounded-xl p-6 text-center">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">
            Contact Us
          </h1>
          <p className="text-lg mb-4">
            Have questions, feedback, or just want to say hi? Feel free to reach
            out!
          </p>
          <p className="text-md text-gray-600 mb-6">
            This platform was built with students in mind. If you'd like to
            connect or collaborate, don't hesitate.
          </p>

          <div className="flex justify-center gap-6 text-purple-600 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=61577694876597"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/flashdev009/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Ghost-hue-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:flashdev009@gmail.com"
              className="text-gray-700 hover:text-purple-600"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
