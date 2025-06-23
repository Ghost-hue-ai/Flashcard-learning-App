import React, { useState, useEffect } from "react";
import documentService from "../appwrite/SubjectConfig";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Dialog from "@radix-ui/react-dialog";
import flashcardsServ from "../appwrite/flashcardConfig";
import Input from "../Components/Input";
import Flashcard from "../Components/Flashcard";
import { updateRecentLogs } from "../store/CompletedCard.js";

function FlashcardPage() {
    const { subjectname } = useParams();
    const dispatch = useDispatch();
    const subjectIdFromRedux = useSelector((state) => state.subject.subjectId);
    const user = useSelector((state) => state.auth.userData);
    const userId = user?.userId;

    const [subjectId, setSubjectId] = useState(subjectIdFromRedux);
    const [flashcards, setFlashcards] = useState([]);
    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingCard, setEditingCard] = useState(null);

    async function handleEdit(card) {
        setEditingCard(card);
        setIsDialogOpen(true);
    }

    const fetchFlashcards = React.useCallback(async () => {
        if (!userId || !subjectId) return;
        try {
            const flashcardsDoc = await flashcardsServ.getAllFlashcard({
                userId,
                subjectId,
            });
            setFlashcards(flashcardsDoc.documents || []);
        } catch (error) {
            console.error("error fetching flashcards", error);
        }
    }, [userId, subjectId]);

    async function handleFlashCardCreation() {
        try {
            await flashcardsServ.createFlashcard({
                name,
                question,
                answer,
                subjectId,
                status: true,
                userId,
            });
            dispatch(updateRecentLogs(`Flashcard "${name}" was created`));
        } catch (error) {
            console.error("error creating flashcard", error);
        }
    }

    async function handleFlashcardUpdate() {
        try {
            return await flashcardsServ.updateFlashcard({
                documentId: editingCard.$id,
                name,
                question,
                answer,
            });
        } catch (error) {
            console.error("error updating flashcard", error);
        }
    }

    async function handleDelete(flashcard) {
        try {
            await flashcardsServ.deleteFlashCard(flashcard.$id);
            dispatch(updateRecentLogs(`Flashcard "${flashcard.name}" was deleted`));
            setFlashcards((prev) => prev.filter((card) => card.$id !== flashcard.$id));
        } catch (error) {
            console.error("error deleting flashcard", error);
        }
    }

    useEffect(() => {
        if (isDialogOpen && editingCard) {
            setName(editingCard.name || "");
            setQuestion(editingCard.question || "");
            setAnswer(editingCard.answer || "");
        }
    }, [isDialogOpen, editingCard]);

    useEffect(() => {
        async function ensureSubjectId() {
            if (!subjectId && subjectname && userId) {
                const subjectsObj = await documentService.getAllSubject({ userId });
                const found = subjectsObj.documents.find((s) => s.name === subjectname);
                if (found) {
                    setSubjectId(found.$id);
                }
            }
        }
        (async ()=> {
            await ensureSubjectId();
        })()
    }, [subjectId, subjectname, userId]);

    useEffect(() => {
        (async()=> {
            if (userId && subjectId) {
             await   fetchFlashcards();
            }
        })()
    }, [subjectId, userId, fetchFlashcards]);

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-700">
                {subjectname || "Your"} Flashcards
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-4">
                {flashcards.length ? (
                    flashcards.map((card) => (
                        <Flashcard
                            key={card.$id}
                            className="hover:cursor-pointer"
                            question={card.question}
                            answer={card.answer}
                            name={card.name}
                            handleDelete={() => handleDelete(card)}
                            handleEdit={() => handleEdit(card)}
                        />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500 italic">
                        No flashcards yet. Create your first one!
                    </p>
                )}
            </div>

            <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <Dialog.Trigger asChild>
                    <button className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 active:scale-95 transition-transform z-50">
                        + New Flashcard
                    </button>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 max-w-lg w-full p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl -translate-x-1/2 -translate-y-1/2 focus:outline-none animate-scaleIn border-2 border-purple-600">
                        <Dialog.Title className="text-3xl font-extrabold mb-6 text-purple-700 dark:text-purple-400 text-center tracking-wide">
                            {editingCard ? "Edit Flashcard" : "Create New Flashcard"}
                        </Dialog.Title>

                        <Input
                            label="Card Name"
                            placeholder="Enter card name"
                            className="mb-5"
                            value={name}
                            handleOnChange={setName}
                        />
                        <Input
                            label="Question"
                            placeholder="Enter question"
                            className="mb-5"
                            value={question}
                            handleOnChange={setQuestion}
                        />
                        <textarea
                            placeholder="Enter answer"
                            className="w-full resize-none p-4 border border-purple-300 dark:border-purple-700 rounded-xl bg-purple-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-purple-400 dark:focus:ring-purple-600 transition mb-8 min-h-[100px] font-medium shadow-inner"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />

                        <div className="flex justify-between">
                            <Dialog.Close asChild>
                                <button className="px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold transition w-full mr-4">
                                    Cancel
                                </button>
                            </Dialog.Close>

                            <button
                                onClick={async () => {
                                    if (editingCard && isDialogOpen) {
                                        await handleFlashcardUpdate();
                                    } else {
                                        await handleFlashCardCreation();
                                    }
                                    setEditingCard(null);
                                    setName("");
                                    setQuestion("");
                                    setAnswer("");
                                    setIsDialogOpen(false);
                                    await fetchFlashcards();
                                }}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition w-full"
                            >
                                Confirm
                            </button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}

export default FlashcardPage;
