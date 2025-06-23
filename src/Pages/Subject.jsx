import React, {useRef, useState, useEffect, useCallback} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Dialog from "@radix-ui/react-dialog";
import documentService from "../appwrite/SubjectConfig";
import flashcardService from "../appwrite/flashcardConfig";
import INPUT from "../Components/Input";
import { getSubjectId } from "../store/subjectSlice";
import {updateRecentLogs} from "../store/CompletedCard.js";

function Toast({ message, onClose }) {
  // Simple toast for feedback
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg animate-fadeInOut z-50">
      {message}
    </div>
  );
}

function Dashboard() {

  const dispatch = useDispatch();
  const [subjects, setSubjects] = useState([]);
  const [toast, setToast] = useState(null);
  const user = useSelector((state) => state.auth.userData);
  const userId = user?.userId;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [des, setDes] = useState('');
  const [isEditing, setEditing] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  async function handleDelete(card) {
    try {
      const flashcardsObject = await flashcardService.getAllFlashcard({
        userId: userId,
        subjectId: card.$id,
      })
      dispatch(updateRecentLogs(`#${card.name} was deleted`))
      const flashcards = flashcardsObject.documents || [];

      await Promise.all(
        flashcards.map((flashcard) =>
          flashcardService.deleteFlashCard(flashcard.$id)
        )
      );

      //now deleting the subject

      await documentService.deleteSubject(card.$id);

      setSubjects((prevSubjects) => prevSubjects.filter((sub) => sub !== card));
      setToast("Subject and its flashcards deleted successfully!");
    } catch (error) {
      console.error("error deleting the subject in dashboard", error);
    }
  }

  async function handleEdit(card) {
    setEditing(card);
    setName(card.name);
    setDes(card.description);
    setIsDialogOpen(true);
  }

  const  fetchSubjects = useCallback(async () => {

      if (!userId) return;
      try {
        const subjectsObj = await documentService.getAllSubject({ userId });
        setSubjects(subjectsObj.documents);
      } catch (error) {
        console.error("Error fetching subjects", error);
      }



  }, [userId]);
  async function handleSubjectCreation() {
    try {
      await documentService.createSubject({
        name: name,
        description: des,
        userId,
      });
      dispatch(updateRecentLogs(`#${name}  subject was Created`))
      setToast("Subject created successfully!");
      await fetchSubjects();
    } catch (error) {
      setToast("Failed to create subject. Try again!");
      console.error("Error creating subject", error);
    }
  }
  function resetSubjectForm() {
    setEditing(null);
    setName("");
    setDes("");
  }

  // useEffect(() => {
  //   if (isEditing) {
  //     setName(isEditing.name);
  //     setDes(isEditing.description);
  //   }
  // }, [ isEditing,isDialogOpen]);
  useEffect(() => {
    (async () => {
      await fetchSubjects();
    })();
  }, [userId,fetchSubjects]);

  return (
    <>
      <div className="min-h-screen bg-gray-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6">
        <header className="mb-6 flex justify-between items-center max-w-7xl mx-auto px-2 sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-purple-500">
            Your Flashcard Subjects
          </h1>
          <Dialog.Root
            open={isDialogOpen}
            onOpenChange={(isOpen) => {
              setIsDialogOpen(isOpen);
              if (!isOpen) {
                setEditing(null);
                setName("");
                setDes("");
              }
            }}
          >
            <Dialog.Trigger asChild>
              <button
                className="
                px-5 py-2 bg-white dark:bg-indigo-700
                text-indigo-700 dark:text-white
                font-semibold rounded-lg shadow-md
                hover:shadow-xl hover:bg-indigo-100 dark:hover:bg-indigo-600
                transition duration-300 transform hover:-translate-y-0.5
              "
                aria-label="Create new subject"
              >
                + New Subject
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm animate-fadeIn" />
              <Dialog.Content
                className="
                fixed top-1/2 left-1/2 max-w-md w-full p-6
                bg-white dark:bg-gray-900
                rounded-2xl shadow-2xl
                -translate-x-1/2 -translate-y-1/2
                focus:outline-none
                animate-scaleIn
              "
              >
                <Dialog.Title className="text-2xl font-extrabold mb-4 text-indigo-900 dark:text-indigo-300">
                  {isEditing ? "Edit Subject" : "Create New Subject"}
                </Dialog.Title>
                <Dialog.Description className="mb-4 text-indigo-700 dark:text-indigo-400">
                  Add a name and description for your flashcard subject.
                </Dialog.Description>

                <INPUT
                  label="Subject Name"
                  placeholder="Enter subject name"
                  className="mb-4"
                  value={name}
                  handleOnChange={(value) => {
                    setName(value);
                  }}
                />
                <textarea
                  placeholder="Describe your subject here..."
                  className="
                  w-full resize-none p-3 border-2 border-indigo-300 rounded-lg
                  bg-indigo-50 text-indigo-900 placeholder-indigo-400
                  focus:outline-none focus:ring-4 focus:ring-indigo-400
                  transition mb-6 min-h-[90px] font-medium dark:bg-gray-800 dark:text-indigo-200
                  dark:border-gray-600 dark:placeholder-gray-500
                "
                  value={des}
                  onChange={(e) => {
                    setDes(e.target.value);
                  }}
                />

                <div className="flex justify-end space-x-3">
                  <Dialog.Close asChild>
                    <button
                      className="
                      px-5 py-2 rounded-lg
                      bg-indigo-200 text-indigo-800
                      hover:bg-indigo-300
                      font-semibold transition
                    "
                    >
                      Cancel
                    </button>
                  </Dialog.Close>
                  <button
                    onClick={async () => {
                      if (isEditing) {
                        await documentService.updateSubject({
                          name: name,
                          description: des,
                          documentId: isEditing.$id,
                        });

                        setIsDialogOpen(false);
                        resetSubjectForm();

                        await fetchSubjects();
                      } else {
                        await handleSubjectCreation();

                        resetSubjectForm();
                      }
                    }}
                    className="
                    px-5 py-2 rounded-lg
                    bg-indigo-700 text-white
                    hover:bg-indigo-800
                    font-bold transition
                  "
                  >
                    {isEditing ? "Update" : "Create"}
                  </button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 max-w-7xl mx-auto px-2 sm:px-6">
          {subjects && subjects.length ? (
            subjects.map((subject) => (
              <div
                key={subject.$id}
                className="
          bg-indigo-100 dark:bg-gray-900
          rounded-xl p-4
          shadow-md dark:shadow-md
          hover:shadow-lg hover:-translate-y-1
          transition transform duration-300 ease-in-out
          border border-transparent hover:border-indigo-300
          flex flex-col justify-between
          max-w-xs
          min-h-[180px]
        "
                title={`View flashcards for ${subject.name}`}
              >
                <div
                  onClick={() => {
                    dispatch(getSubjectId(subject.$id));
                    navigate(`/dashboard/${subject.name}`);
                  }}
                  className="cursor-pointer flex-grow"
                >
                  <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200 mb-1 line-clamp-2">
                    {subject.name}
                  </h3>
                  <p className="text-indigo-700 dark:text-indigo-300 line-clamp-3 font-medium">
                    {subject.description || "No description provided."}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-wide">
                    Click to open →
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={async() => {
                    await handleEdit(subject);
                    }}
                    className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-500 text-white rounded shadow"
                    title="Edit subject"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(subject)}
                    className="px-3 py-1 text-sm bg-purple-500 hover:bg-red-600 text-white rounded shadow"
                    title="Delete subject"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-indigo-400 dark:text-indigo-200 col-span-full text-center mt-20 text-lg font-semibold">
              No subjects found. Start by creating a new subject!
            </p>
          )}
        </main>

        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </div>
    </>
  );
}

export default Dashboard;
