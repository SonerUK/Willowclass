const wordsData = [
    // ... (Kelimeler ve cümleler bir önceki yanıttaki gibi aynı kalacak)
    // Örnek:
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
let wordsToPlay = [...wordsData];
let speechEngine; // To hold the SpeechSynthesis object

const wordInputContainer = document.getElementById('word-input-container');
const speakButton = document.getElementById('speak-button');
const checkWordButton = document.getElementById('check-word-button');
const nextWordButton = document.getElementById('next-word-button');
const feedbackDiv = document.getElementById('feedback');
const correctCountSpan = document.getElementById('correct-count');
const remainingCountSpan = document.getElementById('remaining-count');

// --- Speech Synthesis Queue ---
let speechQueue = [];
let isSpeaking = false;
let availableVoices = [];

function initializeSpeechSynthesis() {
    speechEngine = window.speechSynthesis;
    if (speechEngine.onvoiceschanged !== undefined) {
        speechEngine.onvoiceschanged = loadVoices;
    }
    loadVoices(); // Load voices initially
}

function loadVoices() {
    availableVoices = speechEngine.getVoices().filter(voice => voice.lang.startsWith('en'));
    // console.log("Available English voices:", availableVoices);
    if (availableVoices.length > 0 && !currentWordData) {
         // If voices loaded and game hasn't started, start it.
         // This ensures that if onvoiceschanged is the first trigger, the game starts.
        setTimeout(() => { if(!currentWordData) loadNextWord();}, 100);
    }
}


function createUtterance(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.volume = 1; // Max volume
    utterance.rate = 0.95; // Slightly slower for clarity, adjust as needed
    utterance.pitch = 1.0; // Default pitch

    // Voice selection priority:
    // 1. Google UK English Female
    // 2. Microsoft UK English Female (e.g., Susan, Hazel for Edge)
    // 3. Any other UK English Female
    // 4. Any Google UK English
    // 5. Any UK English
    let selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB' && voice.name.toLowerCase().includes('google') && voice.name.toLowerCase().includes('female'));
    if (!selectedVoice) {
        selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB' && voice.name.toLowerCase().includes('microsoft') && voice.name.toLowerCase().includes('female'));
    }
    if (!selectedVoice) {
        selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB' && voice.gender === 'female');
    }
    if (!selectedVoice) {
        selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB' && voice.name.toLowerCase().includes('google'));
    }
    if (!selectedVoice) {
        selectedVoice = availableVoices.find(voice => voice.lang === 'en-GB');
    }

    if (selectedVoice) {
        utterance.voice = selectedVoice;
        // console.log("Using voice:", selectedVoice.name);
    } else {
        // console.warn("No specific en-GB voice found, using browser default for en-GB if available.");
    }
    return utterance;
}

function addToSpeechQueue(text) {
    if (!text || text.trim() === "") return; // Don't queue empty strings
    const utterance = createUtterance(text);
    speechQueue.push(utterance);
    // console.log("Added to queue:", text, "Queue length:", speechQueue.length);
    processSpeechQueue();
}

function processSpeechQueue() {
    if (isSpeaking || speechQueue.length === 0 || !speechEngine) {
        return;
    }
    isSpeaking = true;
    speakButton.disabled = true; // Disable while speaking
    const utterance = speechQueue.shift();

    utterance.onend = () => {
        // console.log("Finished speaking:", utterance.text);
        isSpeaking = false;
        if (speechQueue.length === 0) { // Re-enable button only when queue is empty
           speakButton.disabled = false;
        }
        processSpeechQueue();
    };
    utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error, "for text:", utterance.text);
        isSpeaking = false;
        speakButton.disabled = false; // Re-enable on error
        feedbackDiv.textContent = `Error speaking. Try again. (${event.error})`;
        feedbackDiv.className = 'incorrect';
        // Don't clear the queue, just try the next one if any or stop.
        // For robustness, we might want to clear the queue if an error is critical.
        // speechQueue = []; // Option: clear queue on any error
        processSpeechQueue(); // Attempt to process next if any, or just stop.
    };
    // console.log("Now speaking:", utterance.text);
    speechEngine.speak(utterance);
}
// --- End Speech Synthesis ---

function pickNewWord() {
    if (wordsToPlay.length === 0) {
        feedbackDiv.textContent = "Congratulations! You have completed all the words.";
        feedbackDiv.className = 'correct';
        disableGameControls(true);
        return null;
    }
    const randomIndex = Math.floor(Math.random() * wordsToPlay.length);
    const wordDataItem = wordsToPlay[randomIndex];
    wordsToPlay.splice(randomIndex, 1); // Remove to avoid immediate repetition
    return wordDataItem;
}

function createLetterInputs() {
    wordInputContainer.innerHTML = ''; // Clear previous inputs
    const word = currentWordData.word;

    for (let i = 0; i < word.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('letter-input');
        input.maxLength = 1;
        input.dataset.index = i;
        // input.setAttribute('aria-label', `Letter ${i + 1} of ${word.length}`);

        input.addEventListener('input', (e) => {
            // Auto-focus next input
            const nextInput = wordInputContainer.children[i + 1];
            if (e.target.value && nextInput) {
                nextInput.focus();
            }
            // Optionally, trigger checkWord if it's the last input and filled
            // if (e.target.value && i === word.length - 1) {
            //     checkWord();
            // }
        });

        input.addEventListener('keydown', (e) => {
            // Auto-focus previous on backspace if current is empty
            if (e.key === 'Backspace' && !e.target.value) {
                const prevInput = wordInputContainer.children[i - 1];
                if (prevInput) {
                    prevInput.focus();
                }
            } else if (e.key === 'ArrowRight') {
                const nextInput = wordInputContainer.children[i + 1];
                if (nextInput) nextInput.focus();
                e.preventDefault();
            } else if (e.key === 'ArrowLeft') {
                const prevInput = wordInputContainer.children[i - 1];
                if (prevInput) prevInput.focus();
                e.preventDefault();
            }
        });
        wordInputContainer.appendChild(input);
    }
}

function displayNewWord() {
    createLetterInputs();
    feedbackDiv.textContent = '';
    feedbackDiv.className = '';
    checkWordButton.disabled = false;
    speakButton.disabled = false;
    nextWordButton.disabled = true; // Disabled until current word is attempted/passed
    updateRemainingCount();
    if (wordInputContainer.children[0]) {
        wordInputContainer.children[0].focus(); // Focus the first letter input
    }
}

function playWordSequence() {
    if (!currentWordData || !speechEngine) {
        // console.log("Cannot play sequence: no current word or speech engine not ready.");
        if (!speechEngine) feedbackDiv.textContent = "Speech engine not ready.";
        return;
    }
    speechEngine.cancel(); // Cancel any ongoing speech immediately
    speechQueue = []; // Clear previous queue before adding new items
    isSpeaking = false; // Reset speaking state

    // console.log("Queueing word:", currentWordData.word);
    addToSpeechQueue(currentWordData.word);
    // console.log("Queueing sentence:", currentWordData.sentence);
    addToSpeechQueue(currentWordData.sentence);
    // console.log("Queueing word again:", currentWordData.word);
    addToSpeechQueue(currentWordData.word);
}

function checkWord() {
    if (!currentWordData) return;

    const letterInputs = wordInputContainer.querySelectorAll('.letter-input');
    let guessedWord = "";
    letterInputs.forEach(input => {
        guessedWord += input.value.toLowerCase();
    });

    const targetWord = currentWordData.word;
    let allCorrect = true;

    for (let i = 0; i < targetWord.length; i++) {
        const input = letterInputs[i];
        input.classList.remove('correct', 'incorrect'); // Reset classes
        if (input.value.toLowerCase() === targetWord[i]) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
            allCorrect = false;
        }
    }

    if (allCorrect && guessedWord.length === targetWord.length) {
        feedbackDiv.textContent = `Well done! You spelled "${targetWord}" correctly.`;
        feedbackDiv.className = 'correct';
        correctCount++;
        correctCountSpan.textContent = correctCount;
        disableGameControls(false, true); // Keep speak/next active
    } else if (guessedWord.length < targetWord.length && guessedWord.length > 0) {
        feedbackDiv.textContent = "Keep going, fill all the letters!";
        feedbackDiv.className = ''; // Neutral feedback
    }
    else {
        feedbackDiv.textContent = "Not quite right. Check the red letters and try again.";
        feedbackDiv.className = 'incorrect';
        // Allow user to correct. Focus on first incorrect or first empty.
        let firstErrorOrEmpty = -1;
        for(let i=0; i<letterInputs.length; i++){
            if(!letterInputs[i].value || letterInputs[i].classList.contains('incorrect')){
                firstErrorOrEmpty = i;
                break;
            }
        }
        if(firstErrorOrEmpty !== -1) letterInputs[firstErrorOrEmpty].focus();
        else if(letterInputs[0]) letterInputs[0].focus(); // Fallback to first input
    }
    nextWordButton.disabled = false; // Always enable next word after a check
}


function disableGameControls(all = true, afterCorrect = false) {
    checkWordButton.disabled = true;
    const inputs = wordInputContainer.querySelectorAll('.letter-input');
    inputs.forEach(input => input.disabled = true);

    if (all) { // Game over
        speakButton.disabled = true;
        nextWordButton.disabled = true;
    } else if (afterCorrect) {
        speakButton.disabled = false;
        nextWordButton.disabled = false;
        // Inputs remain disabled as word is correct
    } else { // General disable (e.g. while loading)
        speakButton.disabled = true;
        nextWordButton.disabled = true;
    }
}

function enableGameControlsForNewWord() {
    checkWordButton.disabled = false;
    speakButton.disabled = false;
    nextWordButton.disabled = true; // Next word is enabled after check or if skipped
    const inputs = wordInputContainer.querySelectorAll('.letter-input');
    inputs.forEach(input => input.disabled = false);
}


function loadNextWord() {
    if (isSpeaking && speechEngine) { // If it's speaking, stop it before loading next word
        speechEngine.cancel();
        speechQueue = [];
        isSpeaking = false;
    }
    currentWordData = pickNewWord();
    if (currentWordData) {
        enableGameControlsForNewWord();
        displayNewWord();
        playWordSequence();
    } else {
        // No more words, handled in pickNewWord
        updateRemainingCount(); // Ensure remaining count is 0
    }
}

function updateRemainingCount() {
    // If currentWordData exists, it's the one being played, so add 1 to wordsToPlay.length
    let count = wordsToPlay.length + (currentWordData ? 1 : 0);
    if (!currentWordData && wordsToPlay.length === 0) { // Truly game over
        count = 0;
    }
    remainingCountSpan.textContent = count;
}


// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    initializeSpeechSynthesis(); // Setup speech synthesis capabilities
    // Initial load can be triggered by voices loaded, or with a small delay
    // We'll rely on loadVoices to call loadNextWord if appropriate
    // If voices load very fast, loadNextWord might be called before DOMContentLoaded fully.
    // So, ensure critical DOM elements are ready.
    if (availableVoices.length === 0 && speechEngine && !speechEngine.speaking && !speechEngine.pending) {
        // If voices haven't loaded yet and speech is not active, try a delayed start
        // This is a fallback for browsers where onvoiceschanged might be unreliable or slow.
        setTimeout(() => {
            if(!currentWordData && wordsToPlay.length > 0) loadNextWord();
        }, 500); // Delay to allow voices to potentially load
    } else if (availableVoices.length > 0 && !currentWordData && wordsToPlay.length > 0){
        loadNextWord(); // If voices are already available, load immediately.
    }


    speakButton.addEventListener('click', playWordSequence);
    checkWordButton.addEventListener('click', checkWord);
    nextWordButton.addEventListener('click', loadNextWord);
});
