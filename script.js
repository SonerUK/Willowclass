// Kategoriye göre kelime listeleri - TAMAMEN DOLDURULMUŞ (Önceki yanıttaki gibi)
const wordLists = {
    year34_1: [ /* ... tüm kelimeler ... */ { word: "accident", audioPath: "audio_year34_1/accident.mp3" }, { word: "accidentally", audioPath: "audio_year34_1/accidentally.mp3" }, { word: "actual", audioPath: "audio_year34_1/actual.mp3" }, { word: "actually", audioPath: "audio_year34_1/actually.mp3" }, { word: "address", audioPath: "audio_year34_1/address.mp3" }, { word: "although", audioPath: "audio_year34_1/although.mp3" }, { word: "answer", audioPath: "audio_year34_1/answer.mp3" }, { word: "appear", audioPath: "audio_year34_1/appear.mp3" }, { word: "arrive", audioPath: "audio_year34_1/arrive.mp3" }, { word: "believe", audioPath: "audio_year34_1/believe.mp3" }, { word: "bicycle", audioPath: "audio_year34_1/bicycle.mp3" }, { word: "breath", audioPath: "audio_year34_1/breath.mp3" }, { word: "breathe", audioPath: "audio_year34_1/breathe.mp3" }, { word: "build", audioPath: "audio_year34_1/build.mp3" }, { word: "business", audioPath: "audio_year34_1/business.mp3" }, { word: "busy", audioPath: "audio_year34_1/busy.mp3" }, { word: "calendar", audioPath: "audio_year34_1/calendar.mp3" }, { word: "caught", audioPath: "audio_year34_1/caught.mp3" }, { word: "centre", audioPath: "audio_year34_1/centre.mp3" }, { word: "century", audioPath: "audio_year34_1/century.mp3" }, { word: "certain", audioPath: "audio_year34_1/certain.mp3" }, { word: "circle", audioPath: "audio_year34_1/circle.mp3" }, { word: "complete", audioPath: "audio_year34_1/complete.mp3" }, { word: "consider", audioPath: "audio_year34_1/consider.mp3" }, { word: "continue", audioPath: "audio_year34_1/continue.mp3" }, { word: "decide", audioPath: "audio_year34_1/decide.mp3" }, { word: "describe", audioPath: "audio_year34_1/describe.mp3" }, { word: "different", audioPath: "audio_year34_1/different.mp3" }, { word: "difficult", audioPath: "audio_year34_1/difficult.mp3" }, { word: "disappear", audioPath: "audio_year34_1/disappear.mp3" }, { word: "early", audioPath: "audio_year34_1/early.mp3" }, { word: "earth", audioPath: "audio_year34_1/earth.mp3" }, { word: "eight", audioPath: "audio_year34_1/eight.mp3" }, { word: "eighth", audioPath: "audio_year34_1/eighth.mp3" }, { word: "enough", audioPath: "audio_year34_1/enough.mp3" }, { word: "exercise", audioPath: "audio_year34_1/exercise.mp3" }, { word: "experience", audioPath: "audio_year34_1/experience.mp3" }, { word: "experiment", audioPath: "audio_year34_1/experiment.mp3" }, { word: "extreme", audioPath: "audio_year34_1/extreme.mp3" }, { word: "famous", audioPath: "audio_year34_1/famous.mp3" }, { word: "favourite", audioPath: "audio_year34_1/favourite.mp3" }, { word: "February", audioPath: "audio_year34_1/February.mp3" }, { word: "forward", audioPath: "audio_year34_1/forward.mp3" }, { word: "forwards", audioPath: "audio_year34_1/forwards.mp3" }, { word: "fruit", audioPath: "audio_year34_1/fruit.mp3" }, { word: "grammar", audioPath: "audio_year34_1/grammar.mp3" }, { word: "group", audioPath: "audio_year34_1/group.mp3" }, { word: "guard", audioPath: "audio_year34_1/guard.mp3" }, { word: "guide", audioPath: "audio_year34_1/guide.mp3" }, { word: "heard", audioPath: "audio_year34_1/heard.mp3" } ],
    year34_2: [ /* ... tüm kelimeler ... */ { word: "heart", audioPath: "audio_year34_2/heart.mp3" }, { word: "height", audioPath: "audio_year34_2/height.mp3" }, { word: "history", audioPath: "audio_year34_2/history.mp3" }, { word: "imagine", audioPath: "audio_year34_2/imagine.mp3" }, { word: "important", audioPath: "audio_year34_2/important.mp3" }, { word: "increase", audioPath: "audio_year34_2/increase.mp3" }, { word: "interest", audioPath: "audio_year34_2/interest.mp3" }, { word: "island", audioPath: "audio_year34_2/island.mp3" }, { word: "knowledge", audioPath: "audio_year34_2/knowledge.mp3" }, { word: "learn", audioPath: "audio_year34_2/learn.mp3" }, { word: "length", audioPath: "audio_year34_2/length.mp3" }, { word: "library", audioPath: "audio_year34_2/library.mp3" }, { word: "material", audioPath: "audio_year34_2/material.mp3" }, { word: "medicine", audioPath: "audio_year34_2/medicine.mp3" }, { word: "mention", audioPath: "audio_year34_2/mention.mp3" }, { word: "minute", audioPath: "audio_year34_2/minute.mp3" }, { word: "natural", audioPath: "audio_year34_2/natural.mp3" }, { word: "naughty", audioPath: "audio_year34_2/naughty.mp3" }, { word: "notice", audioPath: "audio_year34_2/notice.mp3" }, { word: "occasion", audioPath: "audio_year34_2/occasion.mp3" }, { word: "occasionally", audioPath: "audio_year34_2/occasionally.mp3" }, { word: "often", audioPath: "audio_year34_2/often.mp3" }, { word: "opposite", audioPath: "audio_year34_2/opposite.mp3" }, { word: "ordinary", audioPath: "audio_year34_2/ordinary.mp3" }, { word: "particular", audioPath: "audio_year34_2/particular.mp3" }, { word: "peculiar", audioPath: "audio_year34_2/peculiar.mp3" }, { word: "perhaps", audioPath: "audio_year34_2/perhaps.mp3" }, { word: "popular", audioPath: "audio_year34_2/popular.mp3" }, { word: "position", audioPath: "audio_year34_2/position.mp3" }, { word: "possess", audioPath: "audio_year34_2/possess.mp3" }, { word: "possession", audioPath: "audio_year34_2/possession.mp3" }, { word: "possible", audioPath: "audio_year34_2/possible.mp3" }, { word: "potatoes", audioPath: "audio_year34_2/potatoes.mp3" }, { word: "pressure", audioPath: "audio_year34_2/pressure.mp3" }, { word: "probably", audioPath: "audio_year34_2/probably.mp3" }, { word: "promise", audioPath: "audio_year34_2/promise.mp3" }, { word: "purpose", audioPath: "audio_year34_2/purpose.mp3" }, { word: "quarter", audioPath: "audio_year34_2/quarter.mp3" }, { word: "question", audioPath: "audio_year34_2/question.mp3" }, { word: "recent", audioPath: "audio_year34_2/recent.mp3" }, { word: "regular", audioPath: "audio_year34_2/regular.mp3" }, { word: "reign", audioPath: "audio_year34_2/reign.mp3" }, { word: "remember", audioPath: "audio_year34_2/remember.mp3" }, { word: "sentence", audioPath: "audio_year34_2/sentence.mp3" }, { word: "separate", audioPath: "audio_year34_2/separate.mp3" }, { word: "special", audioPath: "audio_year34_2/special.mp3" }, { word: "straight", audioPath: "audio_year34_2/straight.mp3" }, { word: "strange", audioPath: "audio_year34_2/strange.mp3" }, { word: "strength", audioPath: "audio_year34_2/strength.mp3" }, { word: "suppose", audioPath: "audio_year34_2/suppose.mp3" }, { word: "surprise", audioPath: "audio_year34_2/surprise.mp3" }, { word: "therefore", audioPath: "audio_year34_2/therefore.mp3" }, { word: "though", audioPath: "audio_year34_2/though.mp3" }, { word: "thought", audioPath: "audio_year34_2/thought.mp3" }, { word: "through", audioPath: "audio_year34_2/through.mp3" }, { word: "various", audioPath: "audio_year34_2/various.mp3" }, { word: "weight", audioPath: "audio_year34_2/weight.mp3" }, { word: "woman", audioPath: "audio_year34_2/woman.mp3" }, { word: "women", audioPath: "audio_year34_2/women.mp3" } ],
    year56_1: [ /* ... tüm kelimeler ... */ { word: "accommodate", audioPath: "audio_year56_1/accommodate.mp3" }, { word: "accompany", audioPath: "audio_year56_1/accompany.mp3" }, { word: "according", audioPath: "audio_year56_1/according.mp3" }, { word: "achieve", audioPath: "audio_year56_1/achieve.mp3" }, { word: "aggressive", audioPath: "audio_year56_1/aggressive.mp3" }, { word: "amateur", audioPath: "audio_year56_1/amateur.mp3" }, { word: "ancient", audioPath: "audio_year56_1/ancient.mp3" }, { word: "apparent", audioPath: "audio_year56_1/apparent.mp3" }, { word: "appreciate", audioPath: "audio_year56_1/appreciate.mp3" }, { word: "attached", audioPath: "audio_year56_1/attached.mp3" }, { word: "available", audioPath: "audio_year56_1/available.mp3" }, { word: "average", audioPath: "audio_year56_1/average.mp3" }, { word: "awkward", audioPath: "audio_year56_1/awkward.mp3" }, { word: "bargain", audioPath: "audio_year56_1/bargain.mp3" }, { word: "bruise", audioPath: "audio_year56_1/bruise.mp3" }, { word: "category", audioPath: "audio_year56_1/category.mp3" }, { word: "cemetery", audioPath: "audio_year56_1/cemetery.mp3" }, { word: "committee", audioPath: "audio_year56_1/committee.mp3" }, { word: "communicate", audioPath: "audio_year56_1/communicate.mp3" }, { word: "community", audioPath: "audio_year56_1/community.mp3" }, { word: "competition", audioPath: "audio_year56_1/competition.mp3" }, { word: "conscience", audioPath: "audio_year56_1/conscience.mp3" }, { word: "conscious", audioPath: "audio_year56_1/conscious.mp3" }, { word: "controversy", audioPath: "audio_year56_1/controversy.mp3" }, { word: "convenience", audioPath: "audio_year56_1/convenience.mp3" }, { word: "correspond", audioPath: "audio_year56_1/correspond.mp3" }, { word: "curiosity", audioPath: "audio_year56_1/curiosity.mp3" }, { word: "criticise", audioPath: "audio_year56_1/criticise.mp3" }, { word: "definite", audioPath: "audio_year56_1/definite.mp3" }, { word: "desperate", audioPath: "audio_year56_1/desperate.mp3" }, { word: "determined", audioPath: "audio_year56_1/determined.mp3" }, { word: "develop", audioPath: "audio_year56_1/develop.mp3" }, { word: "dictionary", audioPath: "audio_year56_1/dictionary.mp3" }, { word: "disastrous", audioPath: "audio_year56_1/disastrous.mp3" }, { word: "embarrass", audioPath: "audio_year56_1/embarrass.mp3" }, { word: "environment", audioPath: "audio_year56_1/environment.mp3" }, { word: "equip", audioPath: "audio_year56_1/equip.mp3" }, { word: "equipped", audioPath: "audio_year56_1/equipped.mp3" }, { word: "equipment", audioPath: "audio_year56_1/equipment.mp3" }, { word: "especially", audioPath: "audio_year56_1/especially.mp3" }, { word: "exaggerate", audioPath: "audio_year56_1/exaggerate.mp3" }, { word: "excellent", audioPath: "audio_year56_1/excellent.mp3" }, { word: "existence", audioPath: "audio_year56_1/existence.mp3" }, { word: "explanation", audioPath: "audio_year56_1/explanation.mp3" }, { word: "familiar", audioPath: "audio_year56_1/familiar.mp3" }, { word: "foreign", audioPath: "audio_year56_1/foreign.mp3" }, { word: "forty", audioPath: "audio_year56_1/forty.mp3" }, { word: "frequently", audioPath: "audio_year56_1/frequently.mp3" } ],
    year56_2: [ /* ... tüm kelimeler ... */ { word: "government", audioPath: "audio_year56_2/government.mp3" }, { word: "guarantee", audioPath: "audio_year56_2/guarantee.mp3" }, { word: "harass", audioPath: "audio_year56_2/harass.mp3" }, { word: "hindrance", audioPath: "audio_year56_2/hindrance.mp3" }, { word: "identity", audioPath: "audio_year56_2/identity.mp3" }, { word: "immediate", audioPath: "audio_year56_2/immediate.mp3" }, { word: "immediately", audioPath: "audio_year56_2/immediately.mp3" }, { word: "individual", audioPath: "audio_year56_2/individual.mp3" }, { word: "interfere", audioPath: "audio_year56_2/interfere.mp3" }, { word: "interrupt", audioPath: "audio_year56_2/interrupt.mp3" }, { word: "language", audioPath: "audio_year56_2/language.mp3" }, { word: "leisure", audioPath: "audio_year56_2/leisure.mp3" }, { word: "lightning", audioPath: "audio_year56_2/lightning.mp3" }, { word: "marvellous", audioPath: "audio_year56_2/marvellous.mp3" }, { word: "mischievous", audioPath: "audio_year56_2/mischievous.mp3" }, { word: "muscle", audioPath: "audio_year56_2/muscle.mp3" }, { word: "necessary", audioPath: "audio_year56_2/necessary.mp3" }, { word: "neighbour", audioPath: "audio_year56_2/neighbour.mp3" }, { word: "nuisance", audioPath: "audio_year56_2/nuisance.mp3" }, { word: "occupy", audioPath: "audio_year56_2/occupy.mp3" }, { word: "occur", audioPath: "audio_year56_2/occur.mp3" }, { word: "opportunity", audioPath: "audio_year56_2/opportunity.mp3" }, { word: "parliament", audioPath: "audio_year56_2/parliament.mp3" }, { word: "persuade", audioPath: "audio_year56_2/persuade.mp3" }, { word: "physical", audioPath: "audio_year56_2/physical.mp3" }, { word: "prejudice", audioPath: "audio_year56_2/prejudice.mp3" }, { word: "privilege", audioPath: "audio_year56_2/privilege.mp3" }, { word: "profession", audioPath: "audio_year56_2/profession.mp3" }, { word: "programme", audioPath: "audio_year56_2/programme.mp3" }, { word: "pronunciation", audioPath: "audio_year56_2/pronunciation.mp3" }, { word: "queue", audioPath: "audio_year56_2/queue.mp3" }, { word: "recognise", audioPath: "audio_year56_2/recognise.mp3" }, { word: "recommend", audioPath: "audio_year56_2/recommend.mp3" }, { word: "relevant", audioPath: "audio_year56_2/relevant.mp3" }, { word: "restaurant", audioPath: "audio_year56_2/restaurant.mp3" }, { word: "rhyme", audioPath: "audio_year56_2/rhyme.mp3" }, { word: "rhythm", audioPath: "audio_year56_2/rhythm.mp3" }, { word: "sacrifice", audioPath: "audio_year56_2/sacrifice.mp3" }, { word: "secretary", audioPath: "audio_year56_2/secretary.mp3" }, { word: "shoulder", audioPath: "audio_year56_2/shoulder.mp3" }, { word: "signature", audioPath: "audio_year56_2/signature.mp3" }, { word: "sincere", audioPath: "audio_year56_2/sincere.mp3" }, { word: "sincerely", audioPath: "audio_year56_2/sincerely.mp3" }, { word: "soldier", audioPath: "audio_year56_2/soldier.mp3" }, { word: "stomach", audioPath: "audio_year56_2/stomach.mp3" }, { word: "sufficient", audioPath: "audio_year56_2/sufficient.mp3" }, { word: "suggest", audioPath: "audio_year56_2/suggest.mp3" }, { word: "symbol", audioPath: "audio_year56_2/symbol.mp3" }, { word: "system", audioPath: "audio_year56_2/system.mp3" }, { word: "temperature", audioPath: "audio_year56_2/temperature.mp3" }, { word: "thorough", audioPath: "audio_year56_2/thorough.mp3" }, { word: "twelfth", audioPath: "audio_year56_2/twelfth.mp3" }, { word: "variety", audioPath: "audio_year56_2/variety.mp3" }, { word: "vegetable", audioPath: "audio_year56_2/vegetable.mp3" }, { word: "vehicle", audioPath: "audio_year56_2/vehicle.mp3" }, { word: "yacht", audioPath: "audio_year56_2/yacht.mp3" } ]
};

// --- Global Variables ---
let currentWordData = null;
let correctCount = 0;
let wordsToPlay = []; // Holds words from currently selected categories
let playedWordsFromActiveList = []; // Tracks played words in the current session/selection

// DOM Elements (will be assigned in DOMContentLoaded)
let wordInputContainer, correctWordFeedbackArea, correctWordDisplayContainer, correctWordLabelElement;
let mainActionButton, listenAgainButton, feedbackDiv, correctCountSpan, remainingCountSpan, scoreArea;
let categoryCheckboxes;

// HTML5 Audio Player
let audioPlayer = new Audio();
let isAudioPlaying = false;

// Game State Machine
const GAME_STATE = {
    IDLE: 'idle',           // Waiting for categories selection and Start click
    PLAYING_AUDIO: 'playing_audio', // Audio is playing after Start or Listen Again
    AWAITING_INPUT: 'awaiting_input',// Audio finished, waiting for user to type and click Check
    CHECKED: 'checked'        // Word checked, showing result, waiting for Next Word click
};
let currentGameState = GAME_STATE.IDLE;

// --- Functions ---

function handleMainActionButtonClick() {
    // console.log(`Main button clicked. Current state: ${currentGameState}`);
    switch (currentGameState) {
        case GAME_STATE.IDLE:
            startGame();
            break;
        case GAME_STATE.AWAITING_INPUT:
            checkWord();
            break;
        case GAME_STATE.CHECKED:
            loadNextWordFromSelection();
            break;
        // Ignore clicks if audio is playing
        case GAME_STATE.PLAYING_AUDIO:
             console.log("Button clicked while audio playing - ignored.");
             break;
    }
}

function startGame() {
    // console.log("startGame called");
    const selectedCategories = getSelectedCategories();
    if (selectedCategories.length === 0) {
        feedbackDiv.textContent = "Please select at least one category first.";
        feedbackDiv.className = '';
        return;
    }
    feedbackDiv.textContent = "";

    buildActiveWordList(selectedCategories);
    if (activeWordList.length === 0) {
        feedbackDiv.textContent = "Selected categories have no words.";
        return;
    }

    scoreArea.classList.remove('hidden');
    correctCount = 0; // Reset score for new game session
    correctCountSpan.textContent = correctCount;
    loadNextWordFromSelection(); // Load the first word
}

function getSelectedCategories() {
    const selected = [];
    categoryCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selected.push(checkbox.value);
        }
    });
    return selected;
}

function buildActiveWordList(categories) {
    activeWordList = [];
    playedWordsFromActiveList = []; // Reset played words when building a new list
    categories.forEach(categoryKey => {
        if (wordLists[categoryKey]) {
            activeWordList = activeWordList.concat(wordLists[categoryKey]);
        }
    });
     // Optional: Shuffle the active list initially
     activeWordList.sort(() => Math.random() - 0.5);
    // console.log(`Built active list with ${activeWordList.length} words`);
    updateRemainingCount(); // Update count based on the newly built list
}

function pickNewWordFromActiveList() {
    // console.log(`pickNewWordFromActiveList called. Total active: ${activeWordList.length}, Played: ${playedWordsFromActiveList.length}`);
    if (activeWordList.length === 0) return null; // No categories selected or categories empty

    let availableWords = activeWordList.filter(wordObj => !playedWordsFromActiveList.includes(wordObj.word));

    if (availableWords.length === 0) {
        // All words from the current selection have been played
        if (activeWordList.length > 0) {
            // console.log("All words played in selection.");
            // We don't automatically restart here, signal game over for this selection
             currentWordData = null; // Signal end
             return null; // Return null to indicate no more new words
        } else {
            return null; // Should not happen if check in buildActiveWordList works
        }
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const pickedWordData = availableWords[randomIndex];
    playedWordsFromActiveList.push(pickedWordData.word); // Add word string to played list
    // console.log("Picked word:", pickedWordData.word);
    return pickedWordData;
}


function loadNextWordFromSelection() {
    // console.log("loadNextWordFromSelection called");
    if (isAudioPlaying) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        isAudioPlaying = false;
    }
    hideCorrectSpelling();
    if (wordInputContainer) wordInputContainer.innerHTML = '';
    if (feedbackDiv) feedbackDiv.textContent = '';

    currentWordData = pickNewWordFromActiveList(); // Assigns the picked word object globally

    if (currentWordData) {
        // console.log("Loading next word:", currentWordData.word);
        mainActionButton.textContent = "Playing...";
        mainActionButton.disabled = true;
        listenAgainButton.classList.add('hidden');
        if(wordInputContainer) wordInputContainer.classList.add('hidden');

        currentGameState = GAME_STATE.PLAYING_AUDIO;
        playAudioSequence(() => {
             if (!currentWordData) { // Safety check if word data changed unexpectedly
                 console.error("Callback after audio, but currentWordData is null!");
                 currentGameState = GAME_STATE.IDLE; mainActionButton.textContent = "Start"; mainActionButton.disabled = false;
                 return;
             }
            currentGameState = GAME_STATE.AWAITING_INPUT;
            mainActionButton.textContent = "Check Spelling";
            mainActionButton.disabled = false;
            listenAgainButton.classList.remove('hidden');
            listenAgainButton.disabled = false;
            displayNewWordUI();
        });
    } else {
        // console.log("No more words to load.");
         if (feedbackDiv) {
             if (activeWordList.length > 0 && playedWordsFromActiveList.length >= activeWordList.length) {
                feedbackDiv.textContent = "Congratulations! You finished all words in the selection. Select categories and press Start to play again.";
                feedbackDiv.className = 'correct';
             } else if(activeWordList.length === 0) {
                 // This case should have been caught earlier, but just in case
                 feedbackDiv.textContent = "No words found for the selected categories.";
             }
         }
        currentGameState = GAME_STATE.IDLE;
        mainActionButton.textContent = "Start";
        mainActionButton.disabled = false;
        listenAgainButton.classList.add('hidden');
        if(wordInputContainer) wordInputContainer.classList.add('hidden');
        // scoreArea remains visible showing the final score
    }
    updateRemainingCount(); // Update count after picking/failing to pick
}


function playAudioSequence(callbackOnEnd) {
    // console.log("playAudioSequence called for:", currentWordData?.word);
    if (!currentWordData || !currentWordData.audioPath) {
        if (feedbackDiv && currentWordData) {
             feedbackDiv.textContent = `Audio file missing for "${currentWordData.word}". Path: ${currentWordData?.audioPath || 'Not specified'}`;
             feedbackDiv.className = 'incorrect';
        } else if (feedbackDiv) {
              feedbackDiv.textContent = "Cannot play audio: No word selected.";
              feedbackDiv.className = 'incorrect';
        }
         if(mainActionButton) {
             // Allow user to proceed even if audio failed
             mainActionButton.textContent = "Check Spelling";
             mainActionButton.disabled = false;
         }
         if(listenAgainButton) listenAgainButton.classList.remove('hidden');
         displayNewWordUI(); // Show inputs so user isn't stuck
        if (callbackOnEnd) setTimeout(callbackOnEnd, 0); // Ensure callback runs async after potential UI updates
        return;
    }
    if (isAudioPlaying) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    isAudioPlaying = true;
    mainActionButton.disabled = true;
    listenAgainButton.disabled = true;

    audioPlayer.src = currentWordData.audioPath;
    audioPlayer.onended = () => {
        // console.log("Audio finished:", currentWordData.audioPath);
        isAudioPlaying = false;
        listenAgainButton.disabled = false;
        if (callbackOnEnd) callbackOnEnd();
    };
    audioPlayer.onerror = (e) => {
        console.error("Error playing audio:", currentWordData.audioPath, e);
        isAudioPlaying = false;
        listenAgainButton.disabled = false;
        if (feedbackDiv) {
            feedbackDiv.textContent = `Error playing sound: ${currentWordData.audioPath}. Check path/file in console (F12).`;
            feedbackDiv.className = 'incorrect';
        }
         if(mainActionButton) {
             mainActionButton.textContent = "Check Spelling";
             mainActionButton.disabled = false;
         }
         displayNewWordUI();
        if (callbackOnEnd) callbackOnEnd();
    };

    // console.log("Attempting to play:", audioPlayer.src);
    audioPlayer.play().then(() => {
        // console.log("Audio playback started successfully.");
    }).catch(e => {
        console.error("Audio play() promise rejected:", currentWordData.audioPath, e);
        isAudioPlaying = false;
        listenAgainButton.disabled = false;
        if (mainActionButton) mainActionButton.disabled = false;
        if (feedbackDiv) {
             feedbackDiv.textContent = "Audio playback failed. Check console (F12) for details.";
             feedbackDiv.className = 'incorrect';
        }
         displayNewWordUI();
        if (callbackOnEnd) callbackOnEnd();
    });
}

function displayNewWordUI() {
    // console.log("displayNewWordUI called");
    // hideCorrectSpelling(); // Called by loadNextWordFromSelection
    createLetterInputs(); // Creates inputs inside wordInputContainer
    if(wordInputContainer) wordInputContainer.classList.remove('hidden'); // Show input area
    if (feedbackDiv) {
        feedbackDiv.textContent = '';
        feedbackDiv.className = '';
    }
    // Focus first input only if it exists
    if (wordInputContainer && wordInputContainer.children.length > 0) {
         // Use setTimeout to ensure focus happens after any other UI updates
         setTimeout(() => {
              if(wordInputContainer.children[0]) wordInputContainer.children[0].focus();
         }, 0);
    }
}


function createLetterInputs() {
    // console.log("createLetterInputs called for word:", currentWordData?.word);
    if (!wordInputContainer) return;
    wordInputContainer.innerHTML = '';
    if (!currentWordData || !currentWordData.word) {
        if (feedbackDiv) feedbackDiv.textContent = "Error: No current word data.";
        return; // Stop if no word data
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
        input.setAttribute('size', '1'); // Helps mobile keyboard sizing
        input.disabled = false; // Ensure inputs are enabled when created

        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length > 0) {
                e.target.value = value.toUpperCase()[0];
                const nextInput = wordInputContainer.children[i + 1];
                if (nextInput) nextInput.focus();
            }
            e.target.classList.remove('correct', 'incorrect'); // Clear validation on input
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
                 // If input has value, default backspace will clear it
            } else if (e.key === 'ArrowRight' && i < word.length - 1) {
                e.preventDefault();
                wordInputContainer.children[i + 1].focus();
            } else if (e.key === 'ArrowLeft' && i > 0) {
                e.preventDefault();
                wordInputContainer.children[i - 1].focus();
            } else if (e.key.length === 1 && e.key.match(/[a-z0-9]/i)) {
                 // Allow typing over existing character
                e.target.classList.remove('correct', 'incorrect');
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (currentGameState === GAME_STATE.AWAITING_INPUT) {
                    checkWord();
                }
            }
        });
        wordInputContainer.appendChild(input);
    }
}

function displayCorrectSpelling(word) {
    if (!correctWordDisplayContainer || !correctWordFeedbackArea || !correctWordLabelElement) return;
    correctWordDisplayContainer.innerHTML = '';
    for (let i = 0; i < word.length; i++) {
        const letterBox = document.createElement('div');
        letterBox.classList.add('correct-letter-box');
        letterBox.textContent = word[i].toUpperCase();
        correctWordDisplayContainer.appendChild(letterBox);
    }
    correctWordLabelElement.classList.remove('hidden');
    correctWordFeedbackArea.classList.remove('hidden');
}

function hideCorrectSpelling() {
    if (correctWordFeedbackArea) correctWordFeedbackArea.classList.add('hidden');
    if (correctWordLabelElement) correctWordLabelElement.classList.add('hidden');
    if (correctWordDisplayContainer) correctWordDisplayContainer.innerHTML = '';
}

function checkWord() {
    // console.log("checkWord called");
    if (!currentWordData || !wordInputContainer) return;
    // No need to hideCorrectSpelling here, it stays until next word

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
        if (!input || !input.value) {
             allBoxesFilled = false;
             if(input) input.classList.remove('correct', 'incorrect');
        } else {
            input.classList.remove('correct', 'incorrect');
            if (input.value.toUpperCase() === targetWord[i]) {
                input.classList.add('correct');
            } else {
                input.classList.add('incorrect');
                allCorrect = false;
            }
        }
    }

    if (!allBoxesFilled) {
        if (feedbackDiv) {
            feedbackDiv.textContent = "Please fill all the letter boxes.";
            feedbackDiv.className = '';
        }
        return; // Keep current state, let user fill boxes
    }

    currentGameState = GAME_STATE.CHECKED;
    mainActionButton.textContent = "Next Word";
    mainActionButton.disabled = false; // Enable Next Word button
    listenAgainButton.disabled = true; // Disable listen again after checking

    if (allCorrect) {
        if (feedbackDiv) {
            feedbackDiv.textContent = `Well done! You spelled "${currentWordData.word}" correctly.`;
            feedbackDiv.className = 'correct';
        }
        correctCount++;
        if (correctCountSpan) correctCountSpan.textContent = correctCount;
        letterInputs.forEach(input => input.disabled = true); // Disable inputs on correct
         hideCorrectSpelling(); // Hide correct spelling area if they got it right
    } else {
        if (feedbackDiv) {
            feedbackDiv.textContent = "Not quite right. The correct spelling is shown below.";
            feedbackDiv.className = 'incorrect';
        }
        displayCorrectSpelling(currentWordData.word); // Show correct spelling
        const firstIncorrectInput = letterInputs.find(input => input.classList.contains('incorrect'));
        if (firstIncorrectInput) {
           // Optional: focus first incorrect input
           // firstIncorrectInput.focus();
           // firstIncorrectInput.select();
        }
        // Keep inputs enabled for potential correction (although workflow pushes to Next Word)
        letterInputs.forEach(input => input.disabled = false);

    }
    updateRemainingCount(); // Update count after check
}

function updateRemainingCount() {
    let totalInActiveList = activeWordList.length;
    let playedCount = playedWordsFromActiveList.length;
    let remaining = 0;

    if (totalInActiveList > 0) {
         // Remaining = total words originally in selection MINUS words already played
         remaining = totalInActiveList - playedCount;
         // Exception: if current word exists, it's IN played list but hasn't fully "counted" as done yet.
         // But the definition is "Words Remaining IN SELECTION (to be played next)"
         // So, total - played seems correct.
    }

     // If game is over (no current word means pickNewWord failed)
    if (!currentWordData && totalInActiveList > 0 && playedCount >= totalInActiveList) {
        remaining = 0;
    }

    if (remaining < 0) remaining = 0; // Safety

    if (remainingCountSpan) remainingCountSpan.textContent = remaining;
     // console.log(`updateRemainingCount: Total=${totalInActiveList}, Played=${playedCount}, Remaining=${remaining}`);
}


document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOM Content Loaded - Initializing...");
    // Assign DOM elements to global variables
    wordInputContainer = document.getElementById('word-input-container');
    correctWordFeedbackArea = document.getElementById('correct-word-feedback-area');
    correctWordDisplayContainer = document.getElementById('correct-word-display-container');
    correctWordLabelElement = document.getElementById('correct-word-label');
    mainActionButton = document.getElementById('main-action-button');
    listenAgainButton = document.getElementById('listen-again-button');
    feedbackDiv = document.getElementById('feedback');
    correctCountSpan = document.getElementById('correct-count');
    remainingCountSpan = document.getElementById('remaining-count');
    scoreArea = document.getElementById('score-area');
    categoryCheckboxes = document.querySelectorAll('input[name="category"]');

    // Enhanced check for critical elements
    const criticalElements = {
        wordInputContainer, correctWordFeedbackArea, correctWordDisplayContainer,
        correctWordLabelElement, mainActionButton, listenAgainButton, feedbackDiv,
        correctCountSpan, remainingCountSpan, scoreArea
    };
    let missingId = null;
    for (const id in criticalElements) {
        if (!criticalElements[id]) {
            missingId = id;
            break;
        }
    }
    const categoryCheckboxesOk = categoryCheckboxes && categoryCheckboxes.length === 4;

    if (missingId || !categoryCheckboxesOk) {
        const missingDetail = missingId ? `'${missingId}'` : (!categoryCheckboxesOk ? 'category checkboxes (expected 4)' : 'unknown element');
        console.error(`Initialization Error: Essential page element missing or incorrect count: ${missingDetail}. Aborting script.`);
        const container = document.querySelector('.container') || document.body;
        if (container) {
            const errorMsgElement = document.createElement('p');
            errorMsgElement.className = 'startup-error-message';
            errorMsgElement.textContent = `Error: Essential page element '${missingDetail}' missing or incorrect setup. Please check the HTML structure and IDs carefully.`;
            errorMsgElement.style.color = "red"; errorMsgElement.style.fontWeight = "bold";
            const existingError = container.querySelector('.startup-error-message');
            if (existingError) existingError.remove();
            container.insertBefore(errorMsgElement, container.firstChild);
        }
        return; // Stop script execution
    }

    // Remove any previous error message if checks pass
    const existingError = document.querySelector('.startup-error-message');
    if (existingError) existingError.remove();

    // Check wordLists data (basic check)
    if (!wordLists || Object.keys(wordLists).every(key => !wordLists[key] || wordLists[key].length === 0)) {
        console.error("Word data is missing or empty in script.js!");
        feedbackDiv.textContent = "Error: Word list is empty in script. Cannot start game.";
        mainActionButton.disabled = true;
        if (remainingCountSpan) remainingCountSpan.textContent = 0;
         return; // Stop if no words
    } else {
         // console.log("Word data appears loaded.");
         updateRemainingCount(); // Set initial remaining count (should be 0)
    }

    // Attach Event Listeners
    mainActionButton.addEventListener('click', handleMainActionButtonClick);
    listenAgainButton.addEventListener('click', () => {
        // console.log("Listen Again clicked.");
        if (currentWordData && !isAudioPlaying) { // Only if a word is loaded and audio not playing
             playAudioSequence(() => { /* No action after re-listening */ });
        }
    });

    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
             // console.log("Category changed.");
            currentGameState = GAME_STATE.IDLE; // Reset game state
            mainActionButton.textContent = "Start";
            mainActionButton.disabled = false; // Enable start button
            listenAgainButton.classList.add('hidden'); // Hide listen again
            if(wordInputContainer) {
                 wordInputContainer.classList.add('hidden'); // Hide input area
                 wordInputContainer.innerHTML = ''; // Clear inputs
            }
            hideCorrectSpelling(); // Hide correct spelling area
            if(feedbackDiv) feedbackDiv.textContent = ""; // Clear feedback
            currentWordData = null; // Clear current word
            if(scoreArea) scoreArea.classList.add('hidden'); // Hide score
            activeWordList = []; // Clear active list
            playedWordsFromActiveList = []; // Clear played list
            updateRemainingCount(); // Update count (will be 0)
        });
    });
    // console.log("Initialization complete. Waiting for user action.");
});
