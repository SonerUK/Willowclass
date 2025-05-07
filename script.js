const words = [
    "accommodate", "accompany", "according", "achieve", "aggressive", "amateur", "ancient", "apparent", "appreciate", "attached",
    "available", "average", "awkward", "bargain", "bruise", "category", "committee", "communicate", "community", "competition",
    "conscience", "conscious", "controversy", "convenience", "correspond", "criticise", "curiosity", "definite", "desperate",
    "determined", "develop", "dictionary", "disastrous", "embarrass", "environment", "equip", "especially", "exaggerate",
    "excellent", "existence", "explanation", "familiar", "foreign", "forty", "frequently", "government", "guarantee", "harass",
    "hindrance", "identity", "immediate", "individual", "interfere", "interrupt", "language", "leisure", "lightning", "marvellous",
    "mischievous", "muscle", "necessary", "neighbour", "nuisance", "occupy", "occur", "opportunity", "parliament", "persuade",
    "physical", "prejudice", "privilege", "profession", "programme", "pronunciation", "queue", "recognise", "recommend",
    "relevant", "restaurant", "rhyme", "rhythm", "sacrifice", "secretary", "shoulder", "signature", "sincere", "soldier",
    "stomach", "sufficient", "suggest", "symbol", "system", "temperature", "twelfth", "variety", "vegetable", "vehicle", "yacht"
    // Buraya daha fazla kelime ekleyebilirsiniz
];

let currentWord = "";
let guessedLetters = [];
let currentWordIndex = -1; // Mevcut kelimenin dizideki indeksi
let correctCount = 0;
let focusIndex = 0; // Hangi kutuya odaklanılacağını takip eder

const wordDisplayContainer = document.getElementById('word-display-container');
const wordToSpellDiv = document.getElementById('word-to-spell');
const letterInput = document.getElementById('letter-input');
const submitLetterButton = document.getElementById('submit-letter-button');
const speakButton = document.getElementById('speak-button');
const nextWordButton = document.getElementById('next-word-button');
const feedbackDiv = document.getElementById('feedback');
const correctCountSpan = document.getElementById('correct-count');
const remainingCountSpan = document.getElementById('remaining-count');

function getRandomWord() {
    if (words.length === 0) {
        feedbackDiv.textContent = "Tebrikler! Tüm kelimeleri tamamladınız.";
        feedbackDiv.className = 'correct';
        disableGameControls();
        return null;
    }
    // Rastgele bir kelime seç, ama daha önce seçilmemiş olsun (isteğe bağlı iyileştirme)
    // Şimdilik basitçe sırayla gidelim veya rastgele seçelim
    currentWordIndex = Math.floor(Math.random() * words.length);
    const word = words[currentWordIndex];
    // Seçilen kelimeyi listeden kaldırabiliriz ki tekrar gelmesin
    // words.splice(currentWordIndex, 1); // Bu satırı eklerseniz kelimeler tekrar etmez
    return word.toLowerCase();
}

function displayWord() {
    wordDisplayContainer.innerHTML = ''; // Önceki kutuları temizle
    guessedLetters = []; // Tahmin edilen harfleri sıfırla
    focusIndex = 0; // Odak indeksini sıfırla

    for (let i = 0; i < currentWord.length; i++) {
        const letterBox = document.createElement('div');
        letterBox.classList.add('letter-box');
        letterBox.dataset.index = i; // Kutunun indeksini sakla
        letterBox.textContent = ''; // Başlangıçta boş
        wordDisplayContainer.appendChild(letterBox);
        guessedLetters.push(''); // Her harf için boş bir tahmin ekle
    }
    wordToSpellDiv.textContent = currentWord; // Kelimeyi (gizli) sakla
    feedbackDiv.textContent = '';
    feedbackDiv.className = '';
    letterInput.value = '';
    letterInput.disabled = false;
    submitLetterButton.disabled = false;
    letterInput.focus(); // İlk kutuya odaklanma yerine genel inputa odaklan
    updateRemainingCount();
    updateFocus(); // İlk kutuyu vurgula
}

function updateFocus() {
    const boxes = wordDisplayContainer.querySelectorAll('.letter-box');
    boxes.forEach((box, index) => {
        if (index === focusIndex) {
            box.style.borderColor = 'blue'; // Aktif kutuyu vurgula
            box.style.boxShadow = '0 0 5px blue';
        } else {
            box.style.borderColor = '#ccc';
            box.style.boxShadow = 'none';
        }
    });
}

function speakWord() {
    if (currentWord && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(currentWord);
        // İsteğe bağlı: Dil ayarı (tarayıcıya ve yüklü seslere bağlı)
        // utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    } else {
        feedbackDiv.textContent = "Tarayıcınız sesli okuma özelliğini desteklemiyor.";
        feedbackDiv.className = 'incorrect';
    }
}

function handleLetterInput() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = ''; // Girişi temizle

    if (!letter.match(/^[a-z]$/)) { // Sadece tek bir harf girildiğinden emin ol
        feedbackDiv.textContent = "Lütfen geçerli bir harf girin.";
        feedbackDiv.className = 'incorrect';
        return;
    }

    const boxes = wordDisplayContainer.querySelectorAll('.letter-box');
    if (focusIndex < currentWord.length) {
        boxes[focusIndex].textContent = letter;
        boxes[focusIndex].classList.add('filled');
        guessedLetters[focusIndex] = letter;

        // Doğru harf mi kontrolü
        if (letter === currentWord[focusIndex]) {
            boxes[focusIndex].style.color = 'green';
            feedbackDiv.textContent = 'Doğru harf!';
            feedbackDiv.className = 'correct';
        } else {
            boxes[focusIndex].style.color = 'red';
            feedbackDiv.textContent = 'Yanlış harf.';
            feedbackDiv.className = 'incorrect';
            // Yanlış harfte bir süre sonra temizleme veya başka bir işlem eklenebilir.
            // Şimdilik böyle bırakalım, çocuk fark etsin.
        }

        focusIndex++; // Bir sonraki kutuya geç
        if (focusIndex < currentWord.length) {
            updateFocus();
        } else {
            // Kelime tamamlandı, kontrol et
            checkWord();
        }
    }
}


function checkWord() {
    const guessedWord = guessedLetters.join('');
    const boxes = wordDisplayContainer.querySelectorAll('.letter-box');

    if (guessedWord === currentWord) {
        feedbackDiv.textContent = `Tebrikler! "${currentWord}" kelimesini doğru yazdınız.`;
        feedbackDiv.className = 'correct';
        correctCount++;
        correctCountSpan.textContent = correctCount;
        // Doğru bilinen kelimeyi listeden çıkaralım (eğer tekrar etmesini istemiyorsak)
        const originalWordIndex = words.indexOf(currentWord);
        if (originalWordIndex > -1) {
            words.splice(originalWordIndex, 1);
        }
        nextWordButton.focus(); // Sonraki kelime butonuna odaklan
        disableGameControls(false); // Girişleri engelleme, sadece sonraki kelime aktif olsun
    } else {
        feedbackDiv.textContent = "Kelime yanlış. Lütfen tekrar deneyin veya harfleri düzeltin.";
        feedbackDiv.className = 'incorrect';
        // Yanlış harfleri kırmızı yapalım
        for(let i=0; i < currentWord.length; i++) {
            if (guessedLetters[i] !== currentWord[i]) {
                if(boxes[i]) boxes[i].style.color = 'red';
            } else {
                 if(boxes[i]) boxes[i].style.color = 'green';
            }
        }
        // Kullanıcının düzeltmesi için ilk yanlış harfe odaklanabiliriz.
        // Veya başa döndürebiliriz. Şimdilik bu şekilde bırakalım.
        // focusIndex = 0; // Başa dönmek için
        // updateFocus();
        letterInput.disabled = false; // Düzeltme için inputu aktif et
        submitLetterButton.disabled = false;
    }
    updateRemainingCount();
}


function disableGameControls(all = true) {
    letterInput.disabled = true;
    submitLetterButton.disabled = true;
    if(all) {
        speakButton.disabled = true; // Eğer tüm kelimeler bittiyse konuşma butonu da pasifleşebilir
    }
}

function loadNextWord() {
    const newWord = getRandomWord();
    if (newWord) {
        currentWord = newWord;
        displayWord();
        speakButton.disabled = false; // Yeni kelime geldiğinde konuşma butonu aktif olsun
        letterInput.focus();
    } else {
        // Kelimeler bittiğinde yapılacaklar getRandomWord içinde hallediliyor.
        disableGameControls();
    }
}

function updateRemainingCount() {
    remainingCountSpan.textContent = words.length;
}

// Olay dinleyicileri
speakButton.addEventListener('click', speakWord);
nextWordButton.addEventListener('click', loadNextWord);
submitLetterButton.addEventListener('click', handleLetterInput);

// Enter tuşu ile harf gönderme
letterInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Form gönderimini engelle (eğer bir form içindeyse)
        handleLetterInput();
    }
});

// Başlangıçta bir kelime yükle
loadNextWord();
