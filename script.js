const wordsData = [
    // ... (Kelimeler ve cümleler bir önceki yanıttaki gibi aynı kalacak)
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

let currentWordData = null;
let correctCount = 0;
let wordsToPlayGlobal = [...wordsData]; // Renamed to avoid conflict with local wordsToPlay
let speechEngine;

const wordInputContainer = document.getElementById('word-input-container');
const speakButton = document.getElementById('speak-button');
const checkWordButton = document.getElementById('check-word-button');
const nextWordButton = document.getElementById('next-word-button');
const feedbackDiv = document.getElementById('feedback');
const correctCountSpan = document.getElementById('correct-count');
const remainingCountSpan = document.getElementById('remaining-count');

let speechQueue = [];
let isSpeaking = false;
let availableVoices = [];

function initializeSpeechSynthesis() {
    speechEngine = window.speechSynthesis;
    if (!speechEngine) {
        console.warn("Speech Synthesis not supported by this browser.");
        speakButton.disabled = true;
        return;
    }
    if (speechEngine.onvoiceschanged !== undefined) {
        speechEngine.onvoiceschanged = loadVoices;
    }
    loadVoices();
}

function loadVoices() {
    if (!speechEngine) return;
    availableVoices = speechEngine.getVoices().filter(voice => voice.lang.startsWith('en'));
    if (availableVoices.length > 0 && !currentWordData && wordsToPlayGlobal.length > 0) {
        setTimeout(() => { if (!currentWordData) loadNextWord(); }, 100);
    }
}

function createUtterance(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.volume = 1;
    utterance.rate = 0.9; // Slightly slower
    utterance.pitch = 1.0;

    let selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB' && voice.name.toLowerCase().includes('google') && voice.name.toLowerCase().includes('female'));
    if (!selectedVoice) selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB' && voice.name.toLowerCase().includes('microsoft') && voice.name.toLowerCase().includes('female'));
    if (!selectedVoice) selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB' && voice.gender === 'female');
    if (!selectedVoice) selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB' && voice.name.toLowerCase().includes('google'));
    if (!selectedVoice) selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB');
    if (selectedVoice) utterance.voice = selectedVoice;

    return utterance;
}

function addToSpeechQueue(text) {
    if (!text || text.trim() === "" || !speechEngine) return;
    const utterance = createUtterance(text);
    speechQueue.push(utterance);
    processSpeechQueue();
}

function processSpeechQueue() {
    if (isSpeaking || speechQueue.length === 0 || !speechEngine) {
        if (speechQueue.length === 0 && !isSpeaking) speakButton.disabled = false; // Re-enable if queue empty and not speaking
        return;
    }
    isSpeaking = true;
    speakButton.disabled = true;
    const utterance = speechQueue.shift();

    utterance.onend = () => {
        isSpeaking = false;
        processSpeechQueue(); // Process next
    };
    utterance.onerror = (event) => {
        console.error('Speech error:', event.error, "for text:", utterance.text);
        isSpeaking = false;
        feedbackDiv.textContent = `Speech error. Try again.`;
        feedbackDiv.className = 'incorrect';
        speechQueue = []; // Clear queue on error to prevent further issues
        speakButton.disabled = false;
    };
    speechEngine.speak(utterance);
}

function pickNewWord() {
    if (wordsToPlayGlobal.length === 0) {
        feedbackDiv.textContent = "Congratulations! You have completed all the words.";
        feedbackDiv.className = 'correct';
        setGameControlsState(true, false, true); // Disable all except next (which is already effectively disabled)
        return null;
    }
    const randomIndex = Math.floor(Math.random() * wordsToPlayGlobal.length);
    const wordDataItem = wordsToPlayGlobal[randomIndex];
    wordsToPlayGlobal.splice(randomIndex, 1);
    return wordDataItem;
}

function createLetterInputs() {
    wordInputContainer.innerHTML = '';
    const word = currentWordData.word;

    for (let i = 0; i < word.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('letter-input');
        input.maxLength = 1;
        input.dataset.index = i;
        input.setAttribute('aria-label', `Letter ${i + 1}`);
        input.autocomplete = "off"; // Disable autocomplete

        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length > 0) { // If a character is entered
                e.target.value = value.toUpperCase()[0]; // Ensure uppercase and only one char
                const nextInput = wordInputContainer.children[i + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
            // Remove any feedback color when user types
            e.target.classList.remove('correct', 'incorrect');
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                if (!e.target.value && i > 0) { // If box is empty and not the first box
                    e.preventDefault(); // Prevent default backspace action (like navigating back)
                    wordInputContainer.children[i - 1].focus();
                    wordInputContainer.children[i - 1].value = ''; // Clear previous box as well (optional)
                    wordInputContainer.children[i-1].classList.remove('correct','incorrect');
                } else { // If box has content, backspace will clear it. Then it will be empty.
                     e.target.classList.remove('correct','incorrect'); // Allow re-typing
                }
            } else if (e.key === 'ArrowRight' && i < word.length - 1) {
                e.preventDefault();
                wordInputContainer.children[i + 1].focus();
            } else if (e.key === 'ArrowLeft' && i > 0) {
                e.preventDefault();
                wordInputContainer.children[i - 1].focus();
            } else if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
                // If user types a letter and the input is already full (maxlength=1),
                // overwrite the current letter.
                // The 'input' event will handle uppercasing and moving to next.
                e.target.classList.remove('correct', 'incorrect');
            }
        });
        wordInputContainer.appendChild(input);
    }
}

function displayNewWord() {
    createLetterInputs();
    feedbackDiv.textContent = '';
    feedbackDiv.className = '';
    setGameControlsState(false, false, true); // Enable speak, check; disable next
    updateRemainingCount();
    if (wordInputContainer.children[0]) {
        wordInputContainer.children[0].focus();
    }
}

function playWordSequence() {
    if (!currentWordData || !speechEngine) return;
    if (isSpeaking) speechEngine.cancel(); // Cancel if already speaking
    speechQueue = [];
    isSpeaking = false;

    addToSpeechQueue(currentWordData.word);
    addToSpeechQueue(currentWordData.sentence);
    addToSpeechQueue(currentWordData.word);
}

function checkWord() {
    if (!currentWordData) return;

    const letterInputs = Array.from(wordInputContainer.children);
    let guessedWord = "";
    letterInputs.forEach(input => {
        guessedWord += input.value.toUpperCase(); // Ensure comparison is case-insensitive with target
    });

    const targetWord = currentWordData.word.toUpperCase();
    let allCorrect = true;

    // Check if all boxes are filled
    let allBoxesFilled = true;
    for (let i = 0; i < targetWord.length; i++) {
        const input = letterInputs[i];
        if (!input.value) {
            allBoxesFilled = false;
            // Optionally mark empty inputs as incorrect or neutral
            input.classList.remove('correct');
            // input.classList.add('incorrect'); // Or just leave it neutral
        }
    }

    if (!allBoxesFilled && guessedWord.length < targetWord.length) {
        feedbackDiv.textContent = "Please fill all the letter boxes.";
        feedbackDiv.className = ''; // Neutral feedback
        setGameControlsState(false, false, false); // Keep all controls active for correction
        return; // Don't proceed to full check if not all filled
    }


    for (let i = 0; i < targetWord.length; i++) {
        const input = letterInputs[i];
        input.classList.remove('correct', 'incorrect');
        if (input.value.toUpperCase() === targetWord[i]) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
            allCorrect = false;
        }
    }

    if (allCorrect) {
        feedbackDiv.textContent = `Well done! You spelled "${currentWordData.word}" correctly.`;
        feedbackDiv.className = 'correct';
        correctCount++;
        correctCountSpan.textContent = correctCount;
        setGameControlsState(true, true, false); // Disable inputs, check; enable next
        letterInputs.forEach(input => input.disabled = true); // Disable inputs on correct
    } else {
        feedbackDiv.textContent = "Not quite right. Correct the red letters.";
        feedbackDiv.className = 'incorrect';
        setGameControlsState(false, false, false); // Keep all controls active for correction

        // Focus the first incorrect input for easy correction
        const firstIncorrectInput = letterInputs.find(input => input.classList.contains('incorrect'));
        if (firstIncorrectInput) {
            firstIncorrectInput.focus();
            firstIncorrectInput.select(); // Select the text for easy overwrite
        }
    }
}

/**
 * Sets the disabled state of game control buttons and inputs.
 * @param {boolean} inputsDisabled - Whether letter inputs should be disabled.
 * @param {boolean} checkButtonDisabled - Whether check button should be disabled.
 * @param {boolean} nextButtonDisabled - Whether next button should be disabled.
 */
function setGameControlsState(inputsDisabled, checkButtonDisabled, nextButtonDisabled) {
    Array.from(wordInputContainer.children).forEach(input => {
        // Only disable if explicitly told, or re-enable if not.
        // Correctly spelled words will have inputs stay disabled from checkWord().
        if (inputsDisabled && !input.classList.contains('correct')) { // Don't re-enable inputs of a correctly guessed word
             input.disabled = true;
        } else if (!input.classList.contains('correct') || !checkWordButtonDisabled) { // Re-enable if not part of a correct word OR if check button is active (meaning we are in correction phase)
            input.disabled = inputsDisabled;
        }
    });
    checkWordButton.disabled = checkButtonDisabled;
    nextWordButton.disabled = nextButtonDisabled;
    // Speak button is handled by isSpeaking flag mostly
    if (!isSpeaking) speakButton.disabled = false;
}


function loadNextWord() {
    if (isSpeaking && speechEngine) {
        speechEngine.cancel();
        speechQueue = [];
        isSpeaking = false;
    }
    currentWordData = pickNewWord();
    if (currentWordData) {
        displayNewWord(); // This calls createLetterInputs and setGameControlsState
        playWordSequence();
    } else {
        updateRemainingCount();
    }
}

function updateRemainingCount() {
    let count = wordsToPlayGlobal.length + (currentWordData ? 1 : 0);
    if (!currentWordData && wordsToPlayGlobal.length === 0) {
        count = 0;
    }
    remainingCountSpan.textContent = count;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeSpeechSynthesis();
    // Initial load logic
    if (availableVoices.length === 0 && speechEngine && (!speechEngine.speaking && !speechEngine.pending)) {
        setTimeout(() => {
            if (!currentWordData && wordsToPlayGlobal.length > 0) loadNextWord();
        }, 300);
    } else if (availableVoices.length > 0 && !currentWordData && wordsToPlayGlobal.length > 0) {
        loadNextWord();
    }

    speakButton.addEventListener('click', playWordSequence);
    checkWordButton.addEventListener('click', checkWord);
    nextWordButton.addEventListener('click', loadNextWord);
});
