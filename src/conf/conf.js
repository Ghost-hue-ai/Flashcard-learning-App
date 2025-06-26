const DEPLOYED_DOMAIN = "https://flarelearn.vercel.app";
const LOCAL_DOMAIN = "http://localhost:5173";

const getBaseDomain = () => {
  // Use deployed domain if running in production, else use localhost
  if (typeof window !== "undefined") {
    if (window.location.hostname === "flarelearn.vercel.app") {
      return DEPLOYED_DOMAIN;
    }
    // You can add more checks for other production domains if needed
  }
  return LOCAL_DOMAIN;
};

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

  // Base domain
  baseDomain: getBaseDomain(),
  // You can also add dynamic callback/returnTo URLs:
  get auth0ReturnTo() {
    return getBaseDomain() + "/";
  },
  get auth0Callback() {
    return getBaseDomain() + "/oauth/callback";
  },
  get auth0Failure() {
    return getBaseDomain() + "/login";
  },
};

export default config;
