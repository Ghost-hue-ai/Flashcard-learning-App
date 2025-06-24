import React from "react";
import SEO from "../Components/SEO.jsx";

function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Flashcard Learning App"
        description="Read the privacy policy and technology notice for the Flashcard Learning App."
      />
      <div className="min-h-screen bg-gray-50 text-gray-800 p-8 flex flex-col items-center justify-center">
        <div className="max-w-3xl bg-white shadow-md rounded-xl p-8">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">
            Privacy & Technology Notice
          </h1>
          <p className="mb-4 text-lg">
            This app was built as a learning project to help students study
            smarter using flashcards. It uses a variety of modern tools and
            services to function smoothly:
          </p>

          <ul className="list-disc list-inside space-y-3 text-md text-gray-700">
            <li>
              <strong>Appwrite</strong> – Handles database, authentication, file
              storage, and backend logic. All user data and flashcards are
              securely stored with Appwrite.
            </li>
            <li>
              <strong>Auth0 (with Appwrite OAuth2)</strong> – Used for
              authentication. It helps users log in safely with social accounts
              like Google or Facebook.
            </li>
            <li>
              <strong>React</strong> – The main frontend library used to build
              the UI and interactive components.
            </li>
            <li>
              <strong>Redux Toolkit</strong> – For managing application state
              such as flashcard progress and user data.
            </li>
            <li>
              <strong>Tailwind CSS</strong> – Provides modern, responsive
              styling with utility-first classes.
            </li>
            <li>
              <strong>React Router</strong> – Enables navigation between pages
              like Dashboard, About, Contact, and Update Profile.
            </li>
            <li>
              <strong>Recharts</strong> – Used to display progress stats with
              beautiful pie charts.
            </li>
            <li>
              <strong>React Icons</strong> – For clean, recognizable brand and
              UI icons throughout the app.
            </li>
          </ul>

          <p className="mt-6 text-md text-gray-600">
            No personal data is shared with third parties. All information is
            used solely within the app to enhance your learning experience.
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPage;
