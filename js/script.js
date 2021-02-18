/* Выбрать случайное слово
ПОКА слово не угадано {
 ПОКАЗАТЬ игроку текущее состояние игры
 ЗАПРОСИТЬ у игрока вариант ответа
 ЕСЛИ игрок хочет выйти из игры {
 ВЫЙТИ из игры
 }
 ИНАЧЕ ЕСЛИ вариант ответа — не одиночная буква {
 СООБЩИТЬ игроку, что он должен ввести 1 букву
 }
 ИНАЧЕ {
 ЕСЛИ такая буква есть в слове {
 ОБНОВИТЬ состояние игры, подставив новую букву
 }
 }
}
ПОЗДРАВИТЬ игрока с победой — слово угадано */

//массив слов
var words = ['fish', 'cow', 'tiger', 'dog', 'cat'];

//выбор случайного слова
var word = words[Math.floor(Math.random() * words.length)];

//создание массива с ответом
var answerArray = [];
for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//оставшиеся буквы
var remainingLetters = word.length;

//цикл игры
while (remainingLetters > 0) {

    //текущее состояние игры
    alert(answerArray.join(" "));

    //запрашиваем ответ
    var answer = prompt("Enter the letter or Cancel the game");

    //в случае отмены
    if (answer === null) {
        break;

        //проверка на количество символов
    } else if (answer.length !== 1) {
        alert("Enter just 1 letter")
    }
    //обновление игры
    else {
        for (j = 0; j < word.length; j++) {
            if (word[j] === answer) {
                answerArray[j] = answer;
                remainingLetters--;
            }
        }
    }
    //конец цикла игры

}
//отображение слова
alert("the word is " + answerArray.join);