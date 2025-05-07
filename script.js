const wordsData = [
    { word: "accommodate", sentence: "The small car can accommodate four people." },
    { word: "accompany", sentence: "My dog will accompany me on my walk." },
    { word: "according", sentence: "According to the map, we are here." },
    { word: "achieve", sentence: "You can achieve your goals if you work hard." },
    { word: "aggressive", sentence: "The aggressive dog barked loudly." },
    { word: "amateur", sentence: "He is an amateur photographer, but his pictures are great." },
    { word: "ancient", sentence: "We visited the ancient ruins in Rome." },
    { word: "apparent", sentence: "It was apparent that she was happy." },
    { word: "appreciate", sentence: "I appreciate your help very much." },
    { word: "attached", sentence: "The price tag is attached to the shirt." },
    { word: "available", sentence: "Are there any seats available on the train?" },
    { word: "average", sentence: "The average height of the students is 150 cm." },
    { word: "awkward", sentence: "He felt awkward at the party because he knew no one." },
    { word: "bargain", sentence: "This new coat was a real bargain!" },
    { word: "bruise", sentence: "She got a bruise on her arm when she fell." },
    { word: "category", sentence: "Fruits and vegetables are in different category sections." },
    { word: "cemetery", sentence: "They visited the old cemetery to see the historic graves." },
    { word: "committee", sentence: "The school committee will meet next week." },
    { word: "communicate", sentence: "We communicate with friends by phone." },
    { word: "community", sentence: "Our community has a lovely park." },
    { word: "competition", sentence: "She won the spelling competition." },
    { word: "conscience", sentence: "My conscience told me to tell the truth." },
    { word: "conscious", sentence: "He was conscious of the noise around him." },
    { word: "controversy", sentence: "There was a controversy about the new rule." },
    { word: "convenience", sentence: "For convenience, the shop is open late." },
    { word: "correspond", sentence: "Please correspond with us by email." },
    { word: "criticise", sentence: "It is not kind to criticise others unfairly." },
    { word: "curiosity", sentence: "Curiosity made the cat open the box." },
    { word: "definite", sentence: "We have a definite plan for Saturday." },
    { word: "desperate", sentence: "He was desperate to find his lost keys." },
    { word: "determined", sentence: "She was determined to finish the race." },
    { word: "develop", sentence: "Reading helps to develop your mind." },
    { word: "dictionary", sentence: "Look up the word in a dictionary." },
    { word: "disastrous", sentence: "The picnic was disastrous because of the rain." },
    { word: "embarrass", sentence: "He didn't want to embarrass his friend." },
    { word: "environment", sentence: "We must protect the environment." },
    { word: "equip", sentence: "The new gym will equip students with modern machines." },
    { word: "especially", sentence: "I like ice cream, especially chocolate flavour." },
    { word: "exaggerate", sentence: "Don't exaggerate, it wasn't that bad!" },
    { word: "excellent", sentence: "She did an excellent job on her project." },
    { word: "existence", sentence: "No one knows if aliens are in existence." },
    { word: "explanation", sentence: "The teacher gave a clear explanation." },
    { word: "familiar", sentence: "Her face looked familiar to me." },
    { word: "foreign", sentence: "She speaks two foreign languages." },
    { word: "forty", sentence: "There are forty students in the class." },
    { word: "frequently", sentence: "We frequently visit the library." },
    { word: "government", sentence: "The government makes laws for the country." },
    { word: "guarantee", sentence: "The new TV has a one-year guarantee." },
    { word: "harass", sentence: "It is not okay to harass anyone." },
    { word: "hindrance", sentence: "The bad weather was a hindrance to our plans." },
    { word: "identity", sentence: "Show your identity card at the entrance." },
    { word: "immediate", sentence: "We need an immediate answer." },
    { word: "individual", sentence: "Each individual person is unique." },
    { word: "interfere", sentence: "Please don't interfere with my work." },
    { word: "interrupt", sentence: "It's rude to interrupt when someone is speaking." },
    { word: "language", sentence: "English is a global language." },
    { word: "leisure", sentence: "What do you do in your leisure time?" },
    { word: "lightning", sentence: "The lightning lit up the night sky." },
    { word: "marvellous", sentence: "We had a marvellous time at the party." },
    { word: "mischievous", sentence: "The mischievous kitten played with the yarn." },
    { word: "muscle", sentence: "He pulled a muscle while running." },
    { word: "necessary", sentence: "Is it necessary to bring a coat?" },
    { word: "neighbour", sentence: "My neighbour is very friendly." },
    { word: "nuisance", sentence: "The loud music was a nuisance." },
    { word: "occupy", sentence: "Please do not occupy this seat, it is reserved." },
    { word: "occur", sentence: "When did the accident occur?" },
    { word: "opportunity", sentence: "This is a great opportunity to learn." },
    { word: "parliament", sentence: "The new law was discussed in parliament." },
    { word: "persuade", sentence: "Can you persuade him to join us?" },
    { word: "physical", sentence: "Running is good physical exercise." },
    { word: "prejudice", sentence: "We should fight against prejudice." },
    { word: "privilege", sentence: "It's a privilege to meet you." },
    { word: "profession", sentence: "Teaching is a noble profession." },
    { word: "programme", sentence: "What's your favourite television programme?" },
    { word: "pronunciation", sentence: "Good pronunciation is important when learning a language." },
    { word: "queue", sentence: "We had to queue for the bus." },
    { word: "recognise", sentence: "I didn't recognise you with your new haircut." },
    { word: "recommend", sentence: "Can you recommend a good restaurant?" },
    { word: "relevant", sentence: "Please only provide relevant information." },
    { word: "restaurant", sentence: "Let's eat at that new restaurant." },
    { word: "rhyme", sentence: "Can you think of a rhyme for 'cat'?" },
    { word: "rhythm", sentence: "The song has a catchy rhythm." },
    { word: "sacrifice", sentence: "Parents often sacrifice a lot for their children." },
    { word: "secretary", sentence: "The secretary will answer your call." },
    { word: "shoulder", sentence: "He carried the bag on his shoulder." },
    { word: "signature", sentence: "Please put your signature here." },
    { word: "sincere", sentence: "She gave a sincere apology." },
    { word: "soldier", sentence: "The soldier stood bravely." },
    { word: "stomach", sentence: "My stomach hurts after eating too much." },
    { word: "sufficient", sentence: "Do we have sufficient food for everyone?" },
    { word: "suggest", sentence: "Can I suggest a different idea?" },
    { word: "symbol", sentence: "The dove is a symbol of peace." },
    { word: "system", sentence: "The computer system is down." },
    { word: "temperature", sentence: "The temperature is very high today." },
    { word: "thorough", sentence: "The police made a thorough search of the area." },
    { word: "twelfth", sentence: "My birthday is on the twelfth of June." },
    { word: "variety", sentence: "The shop sells a variety of sweets." },
    { word: "vegetable", sentence: "Eat at least one vegetable with your meal." },
    { word: "vehicle", sentence: "A car is a type of vehicle." },
    { word: "yacht", sentence: "They sailed the yacht across the sea." }
];

let currentWordData = null; // Will hold { word: "...", sentence: "..." }
let guessedLetters = [];
let focusIndex = 0;
let correctCount = 0;
let wordsToPlay = [...wordsData]; // Create a mutable copy

const wordDisplayContainer = document.getElementById('word-display-container');
const wordToSpellDiv = document.getElementById('word-to-spell');
const letterInput = document.getElementById('letter-input');
const submitLetterButton = document.getElementById('submit-letter-button');
const speakButton = document.getElementById('speak-button');
const nextWordButton = document.getElementById('next-word-button');
const feedbackDiv = document.getElementById('feedback');
const correctCountSpan = document.getElementById('correct-count');
const remainingCountSpan = document.getElementById('remaining-count');

// --- Speech Synthesis Queue ---
let speechQueue = [];
let isSpeaking = false;

function addToSpeechQueue(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB'; // British English
    // utterance.rate = 0.9; // Slightly slower if needed
    // utterance.pitch = 1.0;

    // Optional: Try to find a specific British voice
    const voices = speechSynthesis.getVoices();
    // First, try to find a preferred Google UK English female voice if available
    let britishVoice = voices.find(voice => voice.lang === 'en-GB' && voice.name.toLowerCase().includes('google') && voice.name.toLowerCase().includes('female'));
    if (!britishVoice) { // If not found, try any Google UK English voice
        britishVoice = voices.find(voice => voice.lang === 'en-GB' && voice.name.toLowerCase().includes('google'));
    }
    if (!britishVoice) { // If still not found, try any UK English female voice
        britishVoice = voices.find(voice => voice.lang === 'en-GB' && voice.gender === 'female');
    }
    if (!britishVoice) { // Fallback to the first available en-GB voice
        britishVoice = voices.find(voice => voice.lang === 'en-GB');
    }
    if (britishVoice) {
        utterance.voice = britishVoice;
    }

    speechQueue.push(utterance);
    processSpeechQueue();
}

function processSpeechQueue() {
    if (isSpeaking || speechQueue.length === 0) {
        return;
    }
    isSpeaking = true;
    const utterance = speechQueue.shift();
    utterance.onend = () => {
        isSpeaking = false;
        processSpeechQueue(); // Process next item in queue
    };
    utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
        isSpeaking = false;
        feedbackDiv.textContent = "Sorry, there was an error with speech.";
        feedbackDiv.className = 'incorrect';
        processSpeechQueue(); // Try to process next item even if one fails
    };
    speechSynthesis.speak(utterance);
}
// --- End Speech Synthesis Queue ---


function pickNewWord() {
    if (wordsToPlay.length === 0) {
        feedbackDiv.textContent = "Congratulations! You have completed all the words.";
        feedbackDiv.className = 'correct';
        disableGameControls(true);
        nextWordButton.disabled = true;
        return null;
    }
    const randomIndex = Math.floor(Math.random() * wordsToPlay.length);
    const wordDataItem = wordsToPlay[randomIndex];
    // Temporarily remove to avoid quick repeat, could be added back for true random shuffle
    wordsToPlay.splice(randomIndex, 1);
    return wordDataItem;
}

function displayWord() {
    wordDisplayContainer.innerHTML = '';
    guessedLetters = Array(currentWordData.word.length).fill('');
    focusIndex = 0;

    for (let i = 0; i < currentWordData.word.length; i++) {
        const letterBox = document.createElement('div');
        letterBox.classList.add('letter-box');
        letterBox.dataset.index = i;
        letterBox.textContent = '';
        wordDisplayContainer.appendChild(letterBox);
    }

    wordToSpellDiv.textContent = currentWordData.word; // Store just the word for checking
    feedbackDiv.textContent = '';
    feedbackDiv.className = '';
    letterInput.value = '';
    letterInput.disabled = false;
    submitLetterButton.disabled = false;
    speakButton.disabled = false;
    nextWordButton.disabled = true;
    letterInput.focus();
    updateRemainingCount();
    updateBoxFocus();
}

function updateBoxFocus() {
    const boxes = wordDisplayContainer.querySelectorAll('.letter-box');
    boxes.forEach((box, index) => {
        if (index === focusIndex && focusIndex < currentWordData.word.length) {
            box.style.borderColor = 'blue';
            box.style.boxShadow = '0 0 8px rgba(0, 0, 255, 0.4)';
        } else {
            box.style.borderColor = '#b0c4de'; // Default border color
            box.style.boxShadow = 'none';
        }
    });
}

function playWordSequence() {
    if (!currentWordData) return;
    speechSynthesis.cancel(); // Cancel any ongoing speech
    speechQueue = []; // Clear previous queue
    isSpeaking = false;

    addToSpeechQueue(currentWordData.word);
    addToSpeechQueue(currentWordData.sentence);
    addToSpeechQueue(currentWordData.word);
}

function handleLetterInput() {
    const letter = letterInput.value.trim().toLowerCase();
    letterInput.value = '';

    if (!letter.match(/^[a-z]$/)) {
        letterInput.focus();
        return;
    }

    const boxes = wordDisplayContainer.querySelectorAll('.letter-box');
    if (focusIndex < currentWordData.word.length) {
        boxes[focusIndex].textContent = letter;
        guessedLetters[focusIndex] = letter;

        if (letter === currentWordData.word[focusIndex]) {
            boxes[focusIndex].style.color = '#28a745';
        } else {
            boxes[focusIndex].style.color = '#dc3545';
        }

        focusIndex++;
        if (focusIndex < currentWordData.word.length) {
            updateBoxFocus();
            letterInput.focus();
        } else {
            checkWord();
            letterInput.disabled = true;
            submitLetterButton.disabled = true;
        }
    }
}

function checkWord() {
    const guessedWord = guessedLetters.join('');
    const targetWord = currentWordData.word;
    const boxes = wordDisplayContainer.querySelectorAll('.letter-box');
    let allCorrect = true;

    for (let i = 0; i < targetWord.length; i++) {
        if (guessedLetters[i] === targetWord[i]) {
            boxes[i].style.borderColor = '#28a745';
            boxes[i].style.color = '#28a745';
        } else {
            boxes[i].style.borderColor = '#dc3545';
            boxes[i].style.color = '#dc3545';
            allCorrect = false;
        }
    }

    if (allCorrect) {
        feedbackDiv.textContent = `Well done! You spelled "${targetWord}" correctly.`;
        feedbackDiv.className = 'correct';
        correctCount++;
        correctCountSpan.textContent = correctCount;
        nextWordButton.disabled = false;
        nextWordButton.focus();
        disableGameControls(false, true);
    } else {
        feedbackDiv.textContent = "Not quite right. Try correcting or listen again.";
        feedbackDiv.className = 'incorrect';
        // Reset focus to the first incorrect letter for correction (optional)
        let firstErrorIndex = guessedLetters.findIndex((gl, idx) => gl !== targetWord[idx]);
        focusIndex = (firstErrorIndex !== -1) ? firstErrorIndex : 0;

        // Re-enable input for corrections and clear wrong letters
        letterInput.disabled = false;
        submitLetterButton.disabled = false;
        updateBoxFocus();
        letterInput.focus();
        // Clear the incorrect letters from boxes and guessedLetters to allow re-typing from first error
        for (let i = focusIndex; i < targetWord.length; i++) {
            boxes[i].textContent = '';
            guessedLetters[i] = '';
            boxes[i].style.color = '#333'; // Reset color
            // boxes[i].style.borderColor = '#b0c4de'; // Reset border if needed for retry
        }
        nextWordButton.disabled = false; // Allow skipping
    }
    updateRemainingCount();
}

function disableGameControls(all = true, afterCorrect = false) {
    letterInput.disabled = true;
    submitLetterButton.disabled = true;
    if (all) {
        speakButton.disabled = true;
        nextWordButton.disabled = true;
    }
    if (afterCorrect) {
        speakButton.disabled = false; // Keep speak active
        nextWordButton.disabled = false;
    }
}

function loadNextWord() {
    currentWordData = pickNewWord();
    if (currentWordData) {
        displayWord();
        playWordSequence(); // Play new word sequence automatically
    }
}

function updateRemainingCount() {
    remainingCountSpan.textContent = wordsToPlay.length + (currentWordData ? 1 : 0);
    if(wordsToPlay.length === 0 && !currentWordData){ // Truly game over state
        remainingCountSpan.textContent = 0;
    }
}

// Event Listeners
speakButton.addEventListener('click', playWordSequence);
nextWordButton.addEventListener('click', loadNextWord);
submitLetterButton.addEventListener('click', handleLetterInput);

letterInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleLetterInput();
    }
});

// Ensure voices are loaded before first speech attempt (especially for Firefox)
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {
        // Voices loaded, can try to get specific voices now if needed earlier
        // console.log("Voices loaded:", speechSynthesis.getVoices());
        if(!currentWordData) loadNextWord(); // Load first word if voices change triggers before initial load
    };
}


// Initial load - Defer slightly to allow voices to load on some browsers
// or load after voiceschanged event
if (speechSynthesis.getVoices().length > 0) {
    loadNextWord();
} else {
    // Fallback if onvoiceschanged doesn't fire or voices are not immediately available
    // A small timeout can help, or rely on the onvoiceschanged event for browsers that support it well.
    // For simplicity, we can try loading. If voices are not ready for the first word, user might need to click "Listen" again.
    // Or, the first "playWordSequence" might use default voice if specific en-GB is not yet listed.
    setTimeout(() => {
         if(!currentWordData) loadNextWord(); // Load first word if not loaded by voiceschanged
    }, 200); // 200ms delay, adjust if needed
}
