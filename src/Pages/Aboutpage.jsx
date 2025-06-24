import React from "react";
import SEO from "../Components/SEO.jsx";

function AboutPage() {
  return (
    <>
      <SEO
        title="About FlashMaster"
        description="Learn about FlashMaster, a modern flashcard app to help students study smarter using interactive flashcards."
      />
      <div className="min-h-screen bg-gray-50 text-gray-800 p-8 flex flex-col items-center justify-center">
        <div className="max-w-2xl bg-white shadow-md rounded-xl p-6 text-center">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">
            About FlashMaster
          </h1>
          <p className="text-lg mb-4">
            This project was developed as a learning initiative to explore
            modern web development tools and practices.
          </p>
          <p className="text-md text-gray-600">
            FlashMaster is designed to help students engage with their studies
            using interactive flashcards. Whether it's learning languages,
            revising grammar, or testing geography knowledge, this app aims to
            make learning more effective and fun.
          </p>
          <p className="mt-4 text-sm text-gray-500 italic">
            Built with ❤️ using React and Appwrite.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
