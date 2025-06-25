const config = {
  // Appwrite
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  subjectCollectionId: import.meta.env.VITE_APPWRITE_SUBJECT_COLLECTION_ID,
  flashcardCollectionId: import.meta.env.VITE_APPWRITE_FLASHCARD_COLLECTION_ID,
  predefinedsUBJECTS: import.meta.env.VITE_APPWRITE_PREDEFINEDSUBJECT_COLLECTION_ID,
  predefinedCards: import.meta.env.VITE_APPWRITE_PREDEFINEDCARDS_COLLECTION_ID,
  bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,

  // Auth0
  auth0Domain: import.meta.env.VITE_AUTH0_DOMAIN,
  auth0ClientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  auth0ReturnTo: import.meta.env.VITE_AUTH0_RETURN_TO,
  auth0Callback: import.meta.env.VITE_AUTH0_CALLBACK,
  auth0Failure: import.meta.env.VITE_AUTH0_FAILURE,
};

export default config;
