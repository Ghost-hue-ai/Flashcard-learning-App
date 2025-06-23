const config = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  subjectCollectionId: import.meta.env.VITE_APPWRITE_SUBJECT_COLLECTION_ID,
  flashcardCollectionId: import.meta.env.VITE_APPWRITE_FLASHCARD_COLLECTION_ID,
  predefinedsUBJECTS : import.meta.env.VITE_APPWRITE_PREDEFINEDSUBJECT_COLLECTION_ID,
  predefinedCards : import.meta.env.VITE_APPWRITE_PREDEFINEDCARDS_COLLECTION_ID,
  bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default config;
