import { StrictMode } from 'react'
import AuthLoader from './Components/AuthLoader.jsx';
import store from './store/store.js'
import { createRoot } from 'react-dom/client'
import FlashcardPage from "./Pages/FlashcardPage.jsx";
import './index.css'
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import App from './App.jsx'
import LOGIN from './Components/LogInForm.jsx'

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
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<InitialPage />} />
      <Route path='/login' element={<LOGIN/>}/>
        <Route path="/oauth/callback" element={<OAuthCallback />} />


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
            <Route path='/updateProfile' element={<UpdatePage/>}/>
        <Route path='subjects' element={<Subject />} />
        <Route path="dashboard/:subjectname" element={<FlashcardPage />} />
          <Route path="dashboard/:languageName/practice" element={<PracticePage/>}/>


      </Route>

      </>



  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthLoader>
        <RouterProvider router={router} />
      </AuthLoader>
    </Provider>
  </StrictMode>,
)
