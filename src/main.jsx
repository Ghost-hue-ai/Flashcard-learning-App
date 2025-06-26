import { StrictMode } from 'react'
import React from 'react';

import AuthLoader from './Components/AuthLoader.jsx';
import store from './store/store.js'
import LogRocket from 'logrocket';

import { createRoot } from 'react-dom/client'
import FlashcardPage from "./Pages/FlashcardPage.jsx";
import './index.css'
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import App from './App.jsx'
import LOGIN from './Components/LogInForm.jsx'
import AboutPage from "./Pages/Aboutpage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import PrivacyPage from "./Pages/PrivacyPage.jsx";

import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import InitialPage from './Pages/InitialPage.jsx'
import Layout from './Components/Layout.jsx'
import Subject from './Pages/Subject.jsx'
import Flashcard from './Components/Flashcard.jsx'
import { Provider } from 'react-redux'
import DashboardPage from './Pages/DashboardPage.jsx';
import LearnSpanish from './Pages/LearnSpanish.jsx';
import LearnEnglish from './Pages/LearnEnglish.jsx'
import PracticePage from "./Pages/PracticePage.jsx";
import OAuthCallback from './Components/OAuthHandler.jsx'
import UpdatePage from "./Pages/UpdatePage.jsx";
import YourProfile from "./Pages/YourProfile.jsx";
import FlagQuiz from "./Pages/FlagQuiz.jsx";

LogRocket.init('wxlpzt/flashcard-error');



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        LogRocket.captureException(error, { extra: errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return <p>Oops! Something went wrong.</p>;
        }
        return this.props.children;
    }
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<InitialPage />} />
      <Route path='/login' element={<LOGIN/>}/>
        <Route path="/oauth/callback" element={<OAuthCallback />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/terms and policy' element={<PrivacyPage/>}/>



        <Route
        element={
          <ProtectedRoute authenticationRequired={true}>
            <Layout />
           </ProtectedRoute>
        }
      >
          <Route path = 'dashboard/learnSpanish' element={<LearnSpanish/>}/>
          <Route path="dashboard/learnEnglish" element ={<LearnEnglish/>}/>
        <Route path='dashboard' element={<DashboardPage/>}/>
            <Route path='yourProfile' element={<YourProfile/>}/>
            <Route path='/updateProfile' element={<UpdatePage/>}/>
        <Route path='subjects' element={<Subject />} />
        <Route path="dashboard/:subjectname" element={<FlashcardPage />} />
          <Route path="dashboard/:languageName/practice" element={<PracticePage/>}/>
            <Route path='/dashboard/flagQuiz' element={<FlagQuiz/>}/>


      </Route>

      </>



  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>

        <ErrorBoundary>
            <AuthLoader>
                <RouterProvider router={router} />
            </AuthLoader>
        </ErrorBoundary>

    </Provider>
  </StrictMode>
);
