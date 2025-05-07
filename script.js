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

let currentWordData = null;
let correctCount = 0;
let wordsToPlay = [];
let speechEngine;

const wordInputContainer = document.getElementById('word-input-container');
const correctWordFeedbackArea = document.getElementById('correct-word-feedback-area');
const correctWordDisplayContainer = document.getElementById('correct-word-display-container');
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
        console.warn("Speech Synthesis not supported.");
        if(speakButton) speakButton.disabled = true;
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
}

function createUtterance(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.volume = 1;
    utterance.rate = 0.9;
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
        if (speechQueue.length === 0 && !isSpeaking && speakButton) speakButton.disabled = false;
        return;
    }
    isSpeaking = true;
    if(speakButton) speakButton.disabled = true;
    const utterance = speechQueue.shift();

    utterance.onend = () => {
        isSpeaking = false;
        processSpeechQueue();
    };
    utterance.onerror = (event) => {
        console.error('Speech error:', event.error, "for text:", utterance.text);
        isSpeaking = false;
        if(feedbackDiv) {
            feedbackDiv.textContent = `Speech error.`;
            feedbackDiv.className = 'incorrect';
        }
        speechQueue = [];
        if(speakButton) speakButton.disabled = false;
    };
    speechEngine.speak(utterance);
}

function pickNewWord() {
    if (wordsToPlay.length === 0) {
        currentWordData = null;
        if(feedbackDiv){
            feedbackDiv.textContent = "Congratulations! You have completed all the words.";
            feedbackDiv.className = 'correct';
        }
        setGameControlsState({ inputs: true, check: true, next: true, speak: true });
        updateRemainingCount();
        return null;
    }
    const randomIndex = Math.floor(Math.random() * wordsToPlay.length);
    currentWordData = wordsToPlay[randomIndex];
    wordsToPlay.splice(randomIndex, 1);
    return currentWordData;
}

function createLetterInputs() {
    if (!wordInputContainer) {
        console.error("wordInputContainer not found!");
        return;
    }
    wordInputContainer.innerHTML = '';
    if (!currentWordData || !currentWordData.word) {
        console.error("Cannot create letter inputs: currentWordData or word is missing.");
        if(feedbackDiv) feedbackDiv.textContent = "Error loading word. Please try 'Next Word'.";
        if(nextWordButton) nextWordButton.disabled = false;
        return;
    }
    const word = currentWordData.word;

    for (let i = 0; i < word.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('letter-input');
        input.maxLength = 1;
        input.dataset.index = i;
        input.setAttribute('aria-label', `Letter ${i + 1}`);
        input.autocomplete = "off";

        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length > 0) {
                e.target.value = value.toUpperCase()[0];
                const nextInput = wordInputContainer.children[i + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
            e.target.classList.remove('correct', 'incorrect');
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                e.target.classList.remove('correct', 'incorrect');
                if (!e.target.value && i > 0) {
                    e.preventDefault();
                    const prevInput = wordInputContainer.children[i - 1];
                    prevInput.focus();
                    prevInput.value = '';
                    prevInput.classList.remove('correct','incorrect');
                }
            } else if (e.key === 'ArrowRight' && i < word.length - 1) {
                e.preventDefault();
                wordInputContainer.children[i + 1].focus();
            } else if (e.key === 'ArrowLeft' && i > 0) {
                e.preventDefault();
                wordInputContainer.children[i - 1].focus();
            } else if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
                e.target.classList.remove('correct', 'incorrect');
            }
        });
        wordInputContainer.appendChild(input);
    }
}

function displayCorrectSpelling(word) {
    if (!correctWordDisplayContainer || !correctWordFeedbackArea) return;
    correctWordDisplayContainer.innerHTML = '';
    for (let i = 0; i < word.length; i++) {
        const letterBox = document.createElement('div');
        letterBox.classList.add('correct-letter-box');
        letterBox.textContent = word[i].toUpperCase();
        correctWordDisplayContainer.appendChild(letterBox);
    }
    correctWordFeedbackArea.style.display = 'block';
}

function hideCorrectSpelling() {
    if (correctWordFeedbackArea) {
        correctWordFeedbackArea.style.display = 'none';
    }
    if (correctWordDisplayContainer) {
        correctWordDisplayContainer.innerHTML = '';
    }
}

function displayNewWord() {
    hideCorrectSpelling();
    createLetterInputs();
    if(feedbackDiv){
        feedbackDiv.textContent = '';
        feedbackDiv.className = '';
    }
    setGameControlsState({ inputs: false, check: false, next: true, speak: false });
    updateRemainingCount();
    if (wordInputContainer && wordInputContainer.children[0]) {
        wordInputContainer.children[0].focus();
    }
}

function playWordSequence() {
    if (!currentWordData || !speechEngine) return;
    if (isSpeaking) speechEngine.cancel();
    speechQueue = [];
    isSpeaking = false;
    addToSpeechQueue(currentWordData.word);
    addToSpeechQueue(currentWordData.sentence);
    addToSpeechQueue(currentWordData.word);
}

function checkWord() {
    if (!currentWordData || !wordInputContainer) return;
    hideCorrectSpelling();

    const letterInputs = Array.from(wordInputContainer.children);
    let guessedWord = "";
    letterInputs.forEach(input => {
        guessedWord += input.value.toUpperCase();
    });

    const targetWord = currentWordData.word.toUpperCase();
    let allCorrect = true;
    let allBoxesFilled = true;

    for (let i = 0; i < targetWord.length; i++) {
        const input = letterInputs[i];
        if (!input.value) {
            allBoxesFilled = false;
        }
        input.classList.remove('correct', 'incorrect');
        if (input.value.toUpperCase() === targetWord[i]) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
            allCorrect = false;
        }
    }

    if (!allBoxesFilled) {
        if(feedbackDiv){
            feedbackDiv.textContent = "Please fill all the letter boxes.";
            feedbackDiv.className = '';
        }
        setGameControlsState({ inputs: false, check: false, next: false, speak: false });
        return;
    }

    if (allCorrect) {
        if(feedbackDiv){
            feedbackDiv.textContent = `Well done! You spelled "${currentWordData.word}" correctly.`;
            feedbackDiv.className = 'correct';
        }
        correctCount++;
        if(correctCountSpan) correctCountSpan.textContent = correctCount;
        setGameControlsState({ inputs: true, check: true, next: false, speak: false });
        letterInputs.forEach(input => input.disabled = true);
    } else {
        if(feedbackDiv){
            feedbackDiv.textContent = "Not quite right. Check the red letters. The correct spelling is shown below.";
            feedbackDiv.className = 'incorrect';
        }
        displayCorrectSpelling(currentWordData.word);
        setGameControlsState({ inputs: false, check: false, next: false, speak: false });
        const firstIncorrectInput = letterInputs.find(input => input.classList.contains('incorrect'));
        if (firstIncorrectInput) {
            firstIncorrectInput.focus();
            firstIncorrectInput.select();
        }
    }
}

function setGameControlsState({ inputs: inputsDisabled, check: checkButtonDisabled, next: nextButtonDisabled, speak: speakButtonDisabled }) {
    if (wordInputContainer) {
        Array.from(wordInputContainer.children).forEach(input => {
            if (input.classList.contains('correct') && checkButtonDisabled && nextButtonDisabled === false) {
                input.disabled = true;
            } else {
                input.disabled = inputsDisabled;
            }
        });
    }
    if(checkWordButton) checkWordButton.disabled = checkButtonDisabled;
    if(nextWordButton) nextWordButton.disabled = nextButtonDisabled;
    if(speakButton && !isSpeaking) speakButton.disabled = speakButtonDisabled;
}

function loadNextWord() {
    if (isSpeaking && speechEngine) {
        speechEngine.cancel();
        speechQueue = [];
        isSpeaking = false;
    }
    pickNewWord();
    if (currentWordData) {
        displayNewWord();
        playWordSequence();
    }
}

function updateRemainingCount() {
    let count = 0;
    if (currentWordData) {
        count = wordsToPlay.length + 1;
    } else {
        count = wordsToPlay.length;
    }
     if (wordsToPlay.length === 0 && !currentWordData) {
        count = 0;
    }
    if(remainingCountSpan) remainingCountSpan.textContent = count;
}

document.addEventListener('DOMContentLoaded', () => {
    if (!wordInputContainer || !speakButton || !checkWordButton || !nextWordButton || !feedbackDiv || !correctCountSpan || !remainingCountSpan || !correctWordFeedbackArea || !correctWordDisplayContainer) {
        console.error("One or more critical DOM elements are missing. Aborting script.");
        const container = document.querySelector('.container') || document.body;
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "Error: Essential page elements are missing. The game cannot start. Please check the HTML structure.";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = "bold";
        container.insertBefore(errorMsg, container.firstChild);
        return;
    }

    initializeSpeechSynthesis();

    if (wordsData && wordsData.length > 0) {
        wordsToPlay = [...wordsData];
        if (!currentWordData) {
            setTimeout(() => {
                loadNextWord();
            }, 200); // Brief delay for voices to potentially load
        }
    } else {
        console.error("Word data is missing or empty!");
        feedbackDiv.textContent = "Error: Word list is empty. Cannot start game.";
        setGameControlsState({ inputs: true, check: true, next: true, speak: true }); // Disable all controls
        if(remainingCountSpan) remainingCountSpan.textContent = 0;
    }

    speakButton.addEventListener('click', playWordSequence);
    checkWordButton.addEventListener('click', checkWord);
    nextWordButton.addEventListener('click', loadNextWord);
});
