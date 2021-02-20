/* Выбрать случайное слово
 ПОКА слово не угадано 
 ПОКАЗАТЬ игроку текущее состояние игры
 ЗАПРОСИТЬ у игрока вариант ответа
 ЕСЛИ игрок хочет выйти из игры 
 ВЫЙТИ из игры с СООБЩЕНИЕМ о выходе
 ИНАЧЕ ЕСЛИ вариант ответа — не одиночная буква 
 СООБЩИТЬ игроку, что он должен ввести 1 букву
 ИНАЧЕ 
 ЕСЛИ такая буква есть в слове 
 ОБНОВИТЬ количество попыток
 ПРИВЕСТИ букву в нижний регистр
 ПРОВЕРИТЬ на повторяющуюся ранее введённую букву
 ОБНОВИТЬ состояние игры, подставив новую букву 
 ПОЗДРАВИТЬ игрока с победой — слово угадано */


var pickWord = function() {
    // Возвращает случайно выбранное слово
    var words = ['fish', 'cow', 'tiger', 'dog', 'cat'];
    return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function(word) {
    // Возвращает итоговый массив для заданного слова word
    var answerArray = [];
    for (i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};

var showPlayerProgress = function(answerArray) {
    // С помощью alert отображает текущее состояние игры
    alert(answerArray.join(" ") + ". You can try " + tryNumbers + " times");
};

var getGuess = function() {
    // Запрашивает ответ игрока с помощью prompt
    return prompt("Enter the letter or Cancel the game");
};

var updateGameState = function(guess, word, answerArray) {
    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква guess
    // встречается в слове, чтобы можно было обновить значение
    // remainingLetters
    tryNumbers--;
    var howManyTimeAppear = 0;
    guess = guess.toLowerCase();
    for (j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            remainingLetters--;
            howManyTimeAppear++;
        }
    }
    return howManyTimeAppear
};

var showAnswerAndCongratulatePlayer = function(answerArray) {
    // С помощью alert показывает игроку отгаданное слово
    // и поздравляет его с победой
    if (tryNumbers === 0) {
        alert("You can't try anymore");
    }
    if (guess !== null) {
        alert("The word is " + answerArray.join(" "));
    } else {
        alert("you stopped the game");
    }
};

//выбор слова из массива
var word = pickWord();

// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);

// remainingLetters: сколько букв осталось угадать
var tryNumbers = 10;
var remainingLetters = word.length;
while (remainingLetters > 0 && tryNumbers > 0) {
    showPlayerProgress(answerArray);

    // guess: ответ игрока
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word,
            answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);