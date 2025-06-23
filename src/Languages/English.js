// src/Languages/GrammarQuestions.js

const grammarQuestions = [
    {
      id: 1,
      question: "Identify the sentence using the correct article.",
      choices: [
        "She bought a apple.",
        "She bought an apple.",
        "She bought apple.",
        "She bought the apple."
      ],
      answer: "She bought an apple.",
      reason: "Use 'an' before vowel sounds. 'Apple' starts with a vowel sound.",
      category: "Articles"
    },
    {
      id: 2,
      question: "Choose the correct sentence using passive voice.",
      choices: [
        "The cake was eaten by John.",
        "John eaten the cake.",
        "The cake eat by John.",
        "John was eat the cake."
      ],
      answer: "The cake was eaten by John.",
      reason: "Passive voice structure is object + form of 'to be' + past participle.",
      category: "Passive Voice"
    },
    {
      id: 3,
      question: "Which sentence correctly uses a conditional?",
      choices: [
        "If it rains, we will cancel the trip.",
        "If it will rain, we cancel the trip.",
        "If it rain, we will cancel the trip.",
        "If it rained, we cancel the trip."
      ],
      answer: "If it rains, we will cancel the trip.",
      reason: "This is a first conditional sentence: if + present simple, ... will + infinitive.",
      category: "Conditionals"
    },
    {
      id: 4,
      question: "Select the sentence with the correct subject-verb agreement.",
      choices: [
        "The list of items are on the desk.",
        "The list of items is on the desk.",
        "The list of items am on the desk.",
        "The list of items be on the desk."
      ],
      answer: "The list of items is on the desk.",
      reason: "The subject is 'list' (singular), so the verb must be 'is' (singular).",
      category: "Subject-Verb Agreement"
    },
    {
      id: 5,
      question: "Which of the following is a possessive pronoun?",
      choices: [
        "They",
        "Them",
        "Their",
        "Theirs"
      ],
      answer: "Theirs",
      reason: "'Theirs' is a pronoun that shows ownership. 'Their' is a possessive adjective.",
      category: "Pronouns"
    },
    {
      id: 6,
      question: "Choose the sentence that uses a comparative adjective correctly.",
      choices: [
        "This book is more interesting than the last one.",
        "This book is most interesting than the last one.",
        "This book is interestinger than the last one.",
        "This book is more interesting that the last one."
      ],
      answer: "This book is more interesting than the last one.",
      reason: "For longer adjectives like 'interesting', we use 'more' to form the comparative.",
      category: "Adjectives"
    },
    {
      id: 7,
      question: "Identify the correct use of a preposition of time.",
      choices: [
        "The meeting is at Friday.",
        "The meeting is on Friday.",
        "The meeting is in Friday.",
        "The meeting is by Friday."
      ],
      answer: "The meeting is on Friday.",
      reason: "Use 'on' for specific days of the week.",
      category: "Prepositions"
    },
    {
      id: 8,
      question: "Which sentence uses the past perfect tense correctly?",
      choices: [
        "She has finished her homework before she went out.",
        "She finished her homework before she went out.",
        "She had finished her homework before she went out.",
        "She was finishing her homework before she went out."
      ],
      answer: "She had finished her homework before she went out.",
      reason: "The past perfect tense ('had' + past participle) is used for an action that happened before another past action.",
      category: "Tenses"
    },
    {
      id: 9,
      question: "Which sentence correctly uses an adverb?",
      choices: [
        "He runs quick.",
        "He runs quickly.",
        "He is a quickly runner.",
        "He runs quickness."
      ],
      answer: "He runs quickly.",
      reason: "An adverb ('quickly') is used to modify a verb ('runs').",
      category: "Adverbs"
    },
    {
      id: 10,
      question: "Select the sentence with the correct punctuation for a list.",
      choices: [
        "I need to buy apples oranges and bananas.",
        "I need to buy: apples, oranges, and bananas.",
        "I need to buy apples, oranges, and bananas.",
        "I need to buy apples, oranges and, bananas."
      ],
      answer: "I need to buy apples, oranges, and bananas.",
      reason: "Use commas to separate items in a list. The final comma (Oxford comma) before 'and' is standard in many styles.",
      category: "Punctuation"
    },
    {
      id: 11,
      question: "Choose the correct modal verb for obligation.",
      choices: [
        "You might finish your work.",
        "You must finish your work.",
        "You can finish your work.",
        "You may finish your work."
      ],
      answer: "You must finish your work.",
      reason: "'Must' is a modal verb used to express strong obligation.",
      category: "Modals"
    },
    {
      id: 12,
      question: "Which of these sentences uses a gerund?",
      choices: [
        "I like to swim.",
        "Swimming is my favorite hobby.",
        "He is swimming in the pool.",
        "The swim was refreshing."
      ],
      answer: "Swimming is my favorite hobby.",
      reason: "A gerund is a verb form ending in '-ing' that functions as a noun. Here, 'Swimming' is the subject of the sentence.",
      category: "Gerunds and Infinitives"
    },
    {
      id: 13,
      question: "Identify the correct sentence in reported speech.",
      choices: [
        "She said, 'I am tired.'",
        "She said that she was tired.",
        "She said that I am tired.",
        "She said that she is tired."
      ],
      answer: "She said that she was tired.",
      reason: "In reported speech, the verb tense often shifts back. 'am' becomes 'was'.",
      category: "Reported Speech"
    },
    {
      id: 14,
      question: "Which sentence uses the correct quantifier for an uncountable noun?",
      choices: [
        "How many water do you drink?",
        "How much water do you drink?",
        "How few water do you drink?",
        "How a lot of water do you drink?"
      ],
      answer: "How much water do you drink?",
      reason: "Use 'much' for uncountable nouns like 'water'. Use 'many' for countable nouns.",
      category: "Quantifiers"
    },
    {
      id: 15,
      question: "Choose the correct tag question.",
      choices: [
        "He's coming to the party, is he?",
        "He's coming to the party, doesn't he?",
        "He's coming to the party, isn't he?",
        "He's coming to the party, wasn't he?"
      ],
      answer: "He's coming to the party, isn't he?",
      reason: "A positive statement is followed by a negative tag question.",
      category: "Tag Questions"
    },
    {
      id: 16,
      question: "Which sentence is in the present continuous tense?",
      choices: [
        "They watch a movie every week.",
        "They are watching a movie right now.",
        "They have watched the movie.",
        "They watched a movie yesterday."
      ],
      answer: "They are watching a movie right now.",
      reason: "The present continuous tense (am/is/are + verb-ing) is used for actions happening now.",
      category: "Tenses"
    },
    {
      id: 17,
      question: "Which sentence correctly uses 'who' and 'whom'?",
      choices: [
        "Whom did you invite to the dinner?",
        "Who did you invite to the dinner?",
        "To who did you give the book?",
        "Whom is coming with us?"
      ],
      answer: "Whom did you invite to the dinner?",
      reason: "'Whom' is the object of the verb 'invite'. A simple trick: if you can replace it with 'him' or 'her', use 'whom'.",
      category: "Pronouns"
    },
    {
      id: 18,
      question: "Select the sentence with the correct use of an apostrophe.",
      choices: [
        "The dogs bowl is full.",
        "The dog's bowl is full.",
        "The dogs' bowl is full.",
        "Its a beautiful day."
      ],
      answer: "The dog's bowl is full.",
      reason: "Use 's to show possession for a singular noun ('dog'). 'The dogs' bowl' would be for multiple dogs.",
      category: "Punctuation"
    },
    {
      id: 19,
      question: "Which sentence uses a phrasal verb correctly?",
      choices: [
        "Please turn on the light.",
        "Please on turn the light.",
        "Please turn the light on off.",
        "Please turn up the light."
      ],
      answer: "Please turn on the light.",
      reason: "'Turn on' is a common phrasal verb meaning 'to activate'.",
      category: "Phrasal Verbs"
    },
    {
      id: 20,
      question: "What is the superlative form of the adjective 'good'?",
      choices: [
        "Gooder",
        "Goodest",
        "Better",
        "Best"
      ],
      answer: "Best",
      reason: "'Good' has irregular comparative ('better') and superlative ('best') forms.",
      category: "Adjectives"
    },
    {
      id: 21,
      question: "Choose the correct sentence.",
      choices: [
        "Me and my friends went to the park.",
        "My friends and I went to the park.",
        "I and my friends went to the park.",
        "My friends and me went to the park."
      ],
      answer: "My friends and I went to the park.",
      reason: "When you are part of the subject, use 'I'. It is also polite to mention the other person first.",
      category: "Pronouns"
    },
    {
      id: 22,
      question: "Identify the sentence that uses the second conditional correctly.",
      choices: [
        "If I have a million dollars, I will buy a car.",
        "If I had a million dollars, I would buy a car.",
        "If I had a million dollars, I will buy a car.",
        "If I would have a million dollars, I would buy a car."
      ],
      answer: "If I had a million dollars, I would buy a car.",
      reason: "The second conditional (if + past simple, ... would + infinitive) is used for hypothetical situations.",
      category: "Conditionals"
    },
    {
      id: 23,
      question: "Which of the following sentences is grammatically correct?",
      choices: [
        "She don't like coffee.",
        "She doesn't like coffee.",
        "She not like coffee.",
        "She do not likes coffee."
      ],
      answer: "She doesn't like coffee.",
      reason: "For third-person singular subjects (he, she, it), use 'doesn't' in the present simple negative.",
      category: "Subject-Verb Agreement"
    },
    {
      id: 24,
      question: "Which conjunction best completes the sentence: 'I wanted to go, ___ I was too tired.'?",
      choices: [
        "so",
        "because",
        "but",
        "and"
      ],
      answer: "but",
      reason: "'But' is used to connect two contrasting ideas.",
      category: "Conjunctions"
    },
    {
      id: 25,
      question: "Choose the correct sentence using an infinitive of purpose.",
      choices: [
        "I am studying hard for pass the exam.",
        "I am studying hard to passing the exam.",
        "I am studying hard to pass the exam.",
        "I am studying hard for to pass the exam."
      ],
      answer: "I am studying hard to pass the exam.",
      reason: "The infinitive of purpose ('to' + base verb) is used to explain why an action is done.",
      category: "Gerunds and Infinitives"
    },
    {
      id: 26,
      question: "Identify the sentence with the correct word order.",
      choices: [
        "She speaks fluently English.",
        "She fluently speaks English.",
        "She speaks English fluently.",
        "English she speaks fluently."
      ],
      answer: "She speaks English fluently.",
      reason: "The standard word order is Subject-Verb-Object-Adverb (SVOA).",
      category: "Sentence Structure"
    },
    {
      id: 27,
      question: "Which sentence uses 'less' and 'fewer' correctly?",
      choices: [
        "There are less people here than yesterday.",
        "There are fewer people here than yesterday.",
        "I have fewer money than you.",
        "This requires less ingredients."
      ],
      answer: "There are fewer people here than yesterday.",
      reason: "Use 'fewer' for countable nouns (like 'people') and 'less' for uncountable nouns (like 'money' or 'water').",
      category: "Quantifiers"
    },
    {
      id: 28,
      question: "Choose the correct sentence in the future perfect tense.",
      choices: [
        "By next year, I will have graduated from college.",
        "By next year, I will graduate from college.",
        "By next year, I am graduating from college.",
        "By next year, I graduated from college."
      ],
      answer: "By next year, I will have graduated from college.",
      reason: "The future perfect tense (will have + past participle) describes an action that will be completed before a specific time in the future.",
      category: "Tenses"
    },
    {
      id: 29,
      question: "What is the correct way to make 'child' plural?",
      choices: [
        "Childs",
        "Childes",
        "Childrens",
        "Children"
      ],
      answer: "Children",
      reason: "'Child' is an irregular noun; its plural form is 'children'.",
      category: "Nouns"
    },
    {
      id: 30,
      question: "Which sentence uses 'affect' and 'effect' correctly?",
      choices: [
        "The rain will effect the game.",
        "The rain will affect the game.",
        "The affect of the rain was a flood.",
        "The rain had a positive affect."
      ],
      answer: "The rain will affect the game.",
      reason: "'Affect' is usually a verb meaning 'to influence'. 'Effect' is usually a noun meaning 'a result'.",
      category: "Vocabulary"
    },
    {
      id: 31,
      question: "Choose the correct sentence.",
      choices: [
        "The cat is laying on the sofa.",
        "The cat is lieing on the sofa.",
        "The cat is lying on the sofa.",
        "The cat is lain on the sofa."
      ],
      answer: "The cat is lying on the sofa.",
      reason: "'To lie' (recline) becomes 'lying' in the present participle. 'To lay' (put something down) becomes 'laying'.",
      category: "Verbs"
    },
    {
      id: 32,
      question: "Select the correctly punctuated question.",
      choices: [
        "He asked if I was coming.",
        "He asked if I was coming?",
        "He asked, 'Are you coming'.",
        "He asked, 'Are you coming?'"
      ],
      answer: "He asked, 'Are you coming?'",
      reason: "A direct question within a sentence is enclosed in quotation marks and ends with a question mark inside the quotes.",
      category: "Punctuation"
    },
    {
      id: 33,
      question: "Which sentence uses the third conditional correctly?",
      choices: [
        "If I had studied, I would have passed the exam.",
        "If I would have studied, I would have passed the exam.",
        "If I had studied, I would pass the exam.",
        "If I studied, I would have passed the exam."
      ],
      answer: "If I had studied, I would have passed the exam.",
      reason: "Third conditional (If + past perfect, ... would have + past participle) talks about an unreal past situation.",
      category: "Conditionals"
    },
    {
      id: 34,
      question: "Identify the sentence with a dangling modifier.",
      choices: [
        "Having finished the assignment, Jill turned on the TV.",
        "After finishing the assignment, the TV was turned on.",
        "Jill, having finished the assignment, turned on the TV.",
        "The TV was turned on by Jill after she finished the assignment."
      ],
      answer: "After finishing the assignment, the TV was turned on.",
      reason: "The phrase 'After finishing the assignment' has nothing to logically modify. It seems like the TV finished the assignment.",
      category: "Sentence Structure"
    },
    {
      id: 35,
      question: "Choose the sentence with the correct pronoun case.",
      choices: [
        "The teacher gave the award to my friend and I.",
        "The teacher gave the award to I and my friend.",
        "The teacher gave the award to my friend and me.",
        "The teacher gave the award to me and my friend."
      ],
      answer: "The teacher gave the award to my friend and me.",
      reason: "'Me' is an object pronoun. A good test is to remove 'my friend and'; you would say 'gave the award to me,' not 'to I.'",
      category: "Pronouns"
    },
    {
      id: 36,
      question: "Which sentence is in the past continuous tense?",
      choices: [
        "I was walking home when it started to rain.",
        "I walked home when it started to rain.",
        "I have walked home in the rain.",
        "I had walked home when it started to rain."
      ],
      answer: "I was walking home when it started to rain.",
      reason: "Past continuous (was/were + verb-ing) describes an ongoing action in the past that was interrupted.",
      category: "Tenses"
    },
    {
      id: 37,
      question: "Which sentence correctly uses 'its' and 'it's'?",
      choices: [
        "The dog wagged it's tail.",
        "Its a lovely day outside.",
        "It's time to go home now.",
        "The company lost it's funding."
      ],
      answer: "It's time to go home now.",
      reason: "'It's' is a contraction of 'it is' or 'it has'. 'Its' is a possessive pronoun.",
      category: "Punctuation"
    },
    {
      id: 38,
      question: "Choose the correct modal for polite requests.",
      choices: [
        "Will you pass the salt?",
        "Can you pass the salt?",
        "Could you please pass the salt?",
        "Must you pass the salt?"
      ],
      answer: "Could you please pass the salt?",
      reason: "'Could' is generally considered more polite than 'can' or 'will' for making requests.",
      category: "Modals"
    },
    {
      id: 39,
      question: "Which of these is NOT a coordinating conjunction?",
      choices: [
        "For",
        "And",
        "Nor",
        "Although"
      ],
      answer: "Although",
      reason: "'Although' is a subordinating conjunction. The coordinating conjunctions can be remembered with the acronym FANBOYS (For, And, Nor, But, Or, Yet, So).",
      category: "Conjunctions"
    },
    {
      id: 40,
      question: "Identify the correct sentence.",
      choices: [
        "I have went to that store before.",
        "I have gone to that store before.",
        "I have goed to that store before.",
        "I has gone to that store before."
      ],
      answer: "I have gone to that store before.",
      reason: "The present perfect tense uses 'have' + the past participle. The past participle of 'go' is 'gone'.",
      category: "Verbs"
    },
    {
      id: 41,
      question: "What is the correct preposition to use for a specific address?",
      choices: [
        "She lives in 123 Main Street.",
        "She lives on 123 Main Street.",
        "She lives by 123 Main Street.",
        "She lives at 123 Main Street."
      ],
      answer: "She lives at 123 Main Street.",
      reason: "Use 'at' for specific addresses or points.",
      category: "Prepositions"
    },
    {
      id: 42,
      question: "Which sentence uses the zero conditional correctly?",
      choices: [
        "If you will heat water to 100 degrees, it boils.",
        "If you heat water to 100 degrees, it will boil.",
        "If you heat water to 100 degrees, it boils.",
        "If you heated water to 100 degrees, it would boil."
      ],
      answer: "If you heat water to 100 degrees, it boils.",
      reason: "The zero conditional (if + present simple, ... present simple) is used for general truths and facts.",
      category: "Conditionals"
    },
    {
      id: 43,
      question: "Choose the sentence with the correct word: 'There', 'Their', or 'They're'.",
      choices: [
        "There going to the movies.",
        "Their is a book on the table.",
        "They're leaving their bags over there.",
        "Their are too many people here."
      ],
      answer: "They're leaving their bags over there.",
      reason: "'They're' = they are; 'their' = possessive; 'there' = a place.",
      category: "Vocabulary"
    },
    {
      id: 44,
      question: "Which of these is a compound sentence?",
      choices: [
        "The dog barked loudly.",
        "Because the dog barked, the cat ran away.",
        "The dog barked, and the cat ran away.",
        "The barking dog scared the cat."
      ],
      answer: "The dog barked, and the cat ran away.",
      reason: "A compound sentence consists of two or more independent clauses joined by a coordinating conjunction (like 'and').",
      category: "Sentence Structure"
    },
    {
      id: 45,
      question: "Which sentence uses 'some' and 'any' correctly?",
      choices: [
        "I don't have some money.",
        "Do you have any questions?",
        "I need any help.",
        "There is any milk in the fridge."
      ],
      answer: "Do you have any questions?",
      reason: "Use 'any' for questions and negative sentences. Use 'some' for positive statements and offers.",
      category: "Quantifiers"
    },
    {
      id: 46,
      question: "What is the past simple of the verb 'to lead'?",
      choices: [
        "Leaded",
        "Lead",
        "Leded",
        "Led"
      ],
      answer: "Led",
      reason: "'To lead' is an irregular verb. Its past simple and past participle form is 'led'.",
      category: "Verbs"
    },
    {
      id: 47,
      question: "Choose the sentence where the pronoun agrees with its antecedent.",
      choices: [
        "Each of the students must bring their own book.",
        "Each of the students must bring his or her own book.",
        "Each of the students must bring there own book.",
        "Each of the students must bring they're own book."
      ],
      answer: "Each of the students must bring his or her own book.",
      reason: "The antecedent 'Each' is singular, so it requires a singular pronoun ('his or her'). (Note: 'their' is becoming more accepted as a singular pronoun, but 'his or her' is traditionally correct).",
      category: "Pronouns"
    },
    {
      id: 48,
      question: "Identify the sentence that uses a semicolon correctly.",
      choices: [
        "I have a big test tomorrow; I can't go out tonight.",
        "I have a big test tomorrow, so; I can't go out tonight.",
        "I have a big test tomorrow; and I can't go out tonight.",
        "I have; a big test tomorrow I can't go out tonight."
      ],
      answer: "I have a big test tomorrow; I can't go out tonight.",
      reason: "A semicolon can be used to join two closely related independent clauses.",
      category: "Punctuation"
    },
    {
      id: 49,
      question: "Which sentence correctly reports a question?",
      choices: [
        "He asked me where was the station.",
        "He asked me where the station was.",
        "He asked me where is the station?",
        "He asked me where the station is."
      ],
      answer: "He asked me where the station was.",
      reason: "In reported questions, the word order is subject-verb (like a statement), not verb-subject (like a question).",
      category: "Reported Speech"
    },
    {
      id: 50,
      question: "Choose the correct article for the sentence: 'He is ___ honest man.'",
      choices: [
        "a",
        "an",
        "the",
        "no article"
      ],
      answer: "an",
      reason: "Use 'an' before words that start with a vowel sound, even if the first letter is a consonant. 'Honest' starts with a vowel sound.",
      category: "Articles"
    },
    {
      id: 51,
      question: "Which sentence uses 'whoever' correctly?",
      choices: [
        "Please give this prize to whomever.",
        "The prize will go to whoever finishes first.",
        "Whomever is responsible should come forward.",
        "I will vote for whomever you recommend."
      ],
      answer: "The prize will go to whoever finishes first.",
      reason: "'Whoever' is the subject of the verb 'finishes'. Use 'whoever' for the subject of a clause.",
      category: "Pronouns"
    },
    {
      id: 52,
      question: "Which sentence correctly uses a superlative adverb?",
      choices: [
        "Of all the players, he runs the most fastly.",
        "Of all the players, he runs the fastest.",
        "Of all the players, he runs the more fast.",
        "Of all the players, he runs the most fast."
      ],
      answer: "Of all the players, he runs the fastest.",
      reason: "'Fast' can be both an adjective and an adverb. The superlative form is 'fastest'.",
      category: "Adverbs"
    },
    {
      id: 53,
      question: "What does the phrasal verb 'look after' mean?",
      choices: [
        "To search for",
        "To investigate",
        "To take care of",
        "To admire"
      ],
      answer: "To take care of",
      reason: "'Look after' is a common phrasal verb meaning to be responsible for or to care for someone or something.",
      category: "Phrasal Verbs"
    },
    {
      id: 54,
      question: "Choose the correct preposition: 'She is allergic ___ nuts.'",
      choices: [
        "with",
        "for",
        "to",
        "of"
      ],
      answer: "to",
      reason: "The correct preposition to follow 'allergic' is 'to'.",
      category: "Prepositions"
    },
    {
      id: 55,
      question: "Identify the correct sentence in the passive voice (present perfect).",
      choices: [
        "The book has been read by many people.",
        "The book was read by many people.",
        "Many people have read the book.",
        "The book has being read by many people."
      ],
      answer: "The book has been read by many people.",
      reason: "The present perfect passive is formed with 'has/have been' + past participle.",
      category: "Passive Voice"
    },
    {
      id: 56,
      question: "Which sentence is grammatically correct?",
      choices: [
        "Neither the students nor the teacher were in the classroom.",
        "Neither the students nor the teacher was in the classroom.",
        "Neither the students nor the teacher be in the classroom.",
        "Neither the students or the teacher was in the classroom."
      ],
      answer: "Neither the students nor the teacher was in the classroom.",
      reason: "With 'neither...nor', the verb agrees with the subject closest to it. 'Teacher' is singular, so the verb is 'was'.",
      category: "Subject-Verb Agreement"
    },
    {
      id: 57,
      question: "Choose the correct word: 'The new policy will not ___ the budget.'",
      choices: [
        "affect",
        "effect",
        "affects",
        "effects"
      ],
      answer: "affect",
      reason: "'Affect' is the verb meaning 'to influence'. 'Effect' is the noun.",
      category: "Vocabulary"
    },
    {
      id: 58,
      question: "Which of these sentences uses an infinitive?",
      choices: [
        "I enjoy walking in the rain.",
        "She is good at painting.",
        "He promised to help me.",
        "Running is good exercise."
      ],
      answer: "He promised to help me.",
      reason: "An infinitive is the base form of a verb, usually preceded by 'to'. Here, 'to help' is the infinitive.",
      category: "Gerunds and Infinitives"
    },
    {
      id: 59,
      question: "Select the sentence with the correct use of a comma after an introductory phrase.",
      choices: [
        "After the long meeting we were all tired.",
        "After the long meeting, we were all tired.",
        "After the long meeting we were all tired.",
        "After, the long meeting we were all tired."
      ],
      answer: "After the long meeting, we were all tired.",
      reason: "A comma is generally used after an introductory prepositional phrase or clause.",
      category: "Punctuation"
    },
    {
      id: 60,
      question: "Which sentence uses the present perfect continuous tense correctly?",
      choices: [
        "She has been waiting for two hours.",
        "She is waiting for two hours.",
        "She has waited for two hours.",
        "She was waiting for two hours."
      ],
      answer: "She has been waiting for two hours.",
      reason: "Present perfect continuous (has/have been + verb-ing) is used to talk about an action that started in the past and is still ongoing.",
      category: "Tenses"
    },
    {
      id: 61,
      question: "Choose the correct form of the verb: 'Either of the options ___ acceptable.'",
      choices: [
        "is",
        "are",
        "be",
        "were"
      ],
      answer: "is",
      reason: "Pronouns like 'either', 'neither', and 'each' are singular and take a singular verb.",
      category: "Subject-Verb Agreement"
    },
    {
      id: 62,
      question: "Which sentence correctly uses 'than' or 'then'?",
      choices: [
        "This cake is better then that one.",
        "First we'll go shopping, than we'll see a movie.",
        "He is taller than his brother.",
        "I would rather have tea then coffee."
      ],
      answer: "He is taller than his brother.",
      reason: "'Than' is used for comparisons. 'Then' refers to time or sequence.",
      category: "Vocabulary"
    },
    {
      id: 63,
      question: "What is the correct way to write the plural of 'cactus'?",
      choices: [
        "Cactuses",
        "Cacti",
        "Both are correct",
        "Cactuss"
      ],
      answer: "Both are correct",
      reason: "Both 'cacti' (from Latin) and 'cactuses' are accepted plural forms of 'cactus' in English.",
      category: "Nouns"
    },
    {
      id: 64,
      question: "Which sentence uses a modal verb to express possibility?",
      choices: [
        "She can speak three languages.",
        "It might rain later today.",
        "You must be on time.",
        "He should see a doctor."
      ],
      answer: "It might rain later today.",
      reason: "'Might' is a modal verb used to express a future possibility.",
      category: "Modals"
    },
    {
      id: 65,
      question: "Identify the sentence with correct parallel structure.",
      choices: [
        "She loves swimming, to hike, and riding a bike.",
        "She loves swimming, hiking, and riding a bike.",
        "She loves to swim, hiking, and to ride a bike.",
        "She loves swimming, a hike, and to ride a bike."
      ],
      answer: "She loves swimming, hiking, and riding a bike.",
      reason: "Parallel structure means using the same pattern of words. In this case, all items in the list are gerunds (-ing forms).",
      category: "Sentence Structure"
    },
    {
      id: 66,
      question: "Choose the correct preposition: 'He is interested ___ learning Japanese.'",
      choices: [
        "on",
        "for",
        "about",
        "in"
      ],
      answer: "in",
      reason: "The correct collocation is 'interested in something'.",
      category: "Prepositions"
    },
    {
      id: 67,
      question: "Which sentence is in the future continuous tense?",
      choices: [
        "This time next week, I will relax on a beach.",
        "This time next week, I will be relaxing on a beach.",
        "This time next week, I am relaxing on a beach.",
        "This time next week, I will have relaxed on a beach."
      ],
      answer: "This time next week, I will be relaxing on a beach.",
      reason: "Future continuous (will be + verb-ing) describes an ongoing action at a specific time in the future.",
      category: "Tenses"
    },
    {
      id: 68,
      question: "Choose the sentence with the correct use of 'too', 'to', or 'two'.",
      choices: [
        "I ate to much cake.",
        "She is going too the store.",
        "He has to dogs.",
        "It is too cold to go outside."
      ],
      answer: "It is too cold to go outside.",
      reason: "'Too' means 'also' or 'excessively'; 'to' is a preposition or part of an infinitive; 'two' is the number.",
      category: "Vocabulary"
    },
    {
      id: 69,
      question: "What is the past participle of the verb 'to freeze'?",
      choices: [
        "Freezed",
        "Froze",
        "Frozen",
        "Freezen"
      ],
      answer: "Frozen",
      reason: "'Freeze' is an irregular verb. Its forms are freeze (base), froze (past simple), and frozen (past participle).",
      category: "Verbs"
    },
    {
      id: 70,
      question: "Select the sentence where the adjective is placed correctly.",
      choices: [
        "She bought a beautiful red car.",
        "She bought a red beautiful car.",
        "She bought a car red beautiful.",
        "She bought a beautiful car red."
      ],
      answer: "She bought a beautiful red car.",
      reason: "Adjectives usually follow a specific order. In this case, opinion ('beautiful') comes before color ('red').",
      category: "Adjectives"
    },
    {
      id: 71,
      question: "Which sentence uses a non-restrictive clause correctly?",
      choices: [
        "My brother who lives in London is a doctor.",
        "My brother, who lives in London, is a doctor.",
        "My brother that lives in London, is a doctor.",
        "My brother, that lives in London is a doctor."
      ],
      answer: "My brother, who lives in London, is a doctor.",
      reason: "A non-restrictive clause adds extra information and is set off by commas. It implies you only have one brother.",
      category: "Punctuation"
    },
    {
      id: 72,
      question: "Choose the correct sentence: 'The team played ___ despite the rain.'",
      choices: [
        "good",
        "well",
        "goodly",
        "best"
      ],
      answer: "well",
      reason: "'Well' is the adverb that modifies the verb 'played'. 'Good' is an adjective.",
      category: "Adverbs"
    },
    {
      id: 73,
      question: "Which conjunction completes the sentence: '___ it was raining, we still had the picnic.'?",
      choices: [
        "Because",
        "So",
        "Although",
        "Therefore"
      ],
      answer: "Although",
      reason: "'Although' is a subordinating conjunction used to show a contrast between two clauses.",
      category: "Conjunctions"
    },
    {
      id: 74,
      question: "Identify the correct possessive form for a plural noun ending in 's'.",
      choices: [
        "The students's projects were impressive.",
        "The student's projects were impressive.",
        "The studentses projects were impressive.",
        "The students' projects were impressive."
      ],
      answer: "The students' projects were impressive.",
      reason: "To make a plural noun ending in 's' possessive, just add an apostrophe after the 's'.",
      category: "Punctuation"
    },
    {
      id: 75,
      question: "Which sentence uses the past perfect continuous tense correctly?",
      choices: [
        "He had been working there for ten years when he quit.",
        "He was working there for ten years when he quit.",
        "He has been working there for ten years when he quit.",
        "He had worked there for ten years when he quit."
      ],
      answer: "He had been working there for ten years when he quit.",
      reason: "Past perfect continuous (had been + verb-ing) describes a continuous action that was in progress before another past action.",
      category: "Tenses"
    },
    {
      id: 76,
      question: "Choose the correct sentence.",
      choices: [
        "She is one of the employees who always works late.",
        "She is one of the employees who always work late.",
        "She is one of the employee who always works late.",
        "She is one of the employee who always work late."
      ],
      answer: "She is one of the employees who always work late.",
      reason: "The pronoun 'who' refers to 'employees' (plural), so the verb must be plural ('work').",
      category: "Subject-Verb Agreement"
    },
    {
      id: 77,
      question: "Which of the following demonstrates the correct use of 'between' and 'among'?",
      choices: [
        "The secret was shared between the four friends.",
        "The secret was shared among the four friends.",
        "He had to choose among two job offers.",
        "He divided the cake among him and his brother."
      ],
      answer: "The secret was shared among the four friends.",
      reason: "Use 'between' for two items and 'among' for three or more items.",
      category: "Prepositions"
    },
    {
      id: 78,
      question: "Choose the correct passive form: 'They are building a new bridge.'",
      choices: [
        "A new bridge is built by them.",
        "A new bridge is being built by them.",
        "A new bridge has been built by them.",
        "A new bridge was being built by them."
      ],
      answer: "A new bridge is being built by them.",
      reason: "The present continuous passive is formed with 'is/are being' + past participle.",
      category: "Passive Voice"
    },
    {
      id: 79,
      question: "Which sentence correctly uses 'that' or 'which'?",
      choices: [
        "The car, that is parked outside, is mine.",
        "The car which is parked outside is mine.",
        "The car that is parked outside is mine.",
        "The car, which is parked outside is mine."
      ],
      answer: "The car that is parked outside is mine.",
      reason: "Use 'that' for restrictive clauses (essential information). Use 'which' (often with commas) for non-restrictive clauses (extra information).",
      category: "Pronouns"
    },
    {
      id: 80,
      question: "Select the sentence with the correct word order for an indirect question.",
      choices: [
        "Could you tell me where is the bank?",
        "Could you tell me where the bank is?",
        "Could you tell me where does the bank is?",
        "Could you tell me is where the bank?"
      ],
      answer: "Could you tell me where the bank is?",
      reason: "In an indirect question, the word order is like a statement (subject + verb), not a direct question.",
      category: "Sentence Structure"
    }
  ];

  export default grammarQuestions;
