

//phrase array
var words = ["in west philadelphia born and raised", "there's no crying in baseball", "you're killin me smalls", "keep the change ya filthy animal", "and this one time at band camp",
    "to infinity and beyond", "stop looking at me swan", "i see dead people", "i totally paused", "you are a sad strange little man and you have my pity", "you do not talk about fight club",
    "what's in the box", "Sell crazy somewhere else we're all stocked up here"]
        
//alphabet array for buttons
// var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//current word in the array
var currentWordIndex;

//guessing word
var guessingWord = [];

// //guessed letters
// var guessedLetters = [];

// available gueses
var remainingGuesses = 10;
        
// total wins
var wins = 0;

// initiate game/restart game
var startGame = false;

//letters guessed
var answerArray = [];

var finalArray = [];
console.log("word:" + words)



//select phrase
randomWord = words[Math.floor(Math.random() * (words.length))];
    console.log("random word: " + randomWord)

//create variable that uses split to break word into indiviual letters
//create variable that counts the number of letters in the word
//loop the number of letters variable and push the ("_") to an array
//
var splitRandomWord = randomWord.split("");
var countRandomWord = splitRandomWord.length;
    for (i = 0; i < countRandomWord; i++) {
    guessingWord.push("_")
    }
    console.log(countRandomWord + "countRandomWord")
    console.log(guessingWord + "guessingWord")


        // //check guessing word against current word
        // for (var i = 0; i < randomWord.length; i++) {
        //     guessingWord.push("_");
        // }

// //send to html page
// document.getElementById("guessingWord").innerHTML = guessingWord;
// document.getElementById("remainingGuesses").innerText = remainingGuesses;
// document.getElementById("answerArray").innerText = answerArray;


//  Updates the display on the HTML Page
function updateDisplay() {
    };

 document.onkeyup = function (event) {

// //check guessing word for letters
// function evaluateGuess(letter) {
//     // Array to store positions of letters in string
//     var positions = [];
//         console.log(evaluateGuess(letter))
//          // Loop through word finding all instances of guessed letter, store the indicies in an array.
//         for (var i = 0; i < guessingWord.length; i++) {
//         if (guessingWord[i] === letter) {
//         positions.push(i);
//         }
//         }}
                //game loop
                // if (positions.length <= 0) {
                //     remainingGuesses--;
                // } else {
                //     // Loop through all the indicies and replace the '_' with a letter.
                //     for (var i = 0; i < positions.length; i++) {
                //     //         guessingWord[positions[i]] = letter;
                //         }
                //     }
                // };
        //user imput
        var userImput = event.key.toLowerCase();
            console.log(userImput)
        // guessing
        // function makeGuess(letter) {
        // if (remainingGuesses > 0) {
        // console.log(makeGuess())
        // }
        // }
                // Make sure we didn't use this letter yet
                // if (answerArray.indexOf(letter) === -1) {
                //     answerArray.push(letter);
                //     evaluateGuess(letter);

            for (var i = 0; i < userImput.length; i++) {
            answerArray.push(userImput);
        }
            console.log(answerArray)
    // var i = 1;
    // while (i == userImput){
    //     answerArray.push(userImput)
    // }
            
        If (answerArray === guessingWord){ 
            guessingWord.push(userImput); 
        } else if (answerArray != guessingWord){
            remainingGuesses -1
        }
        console.log(remainingGuesses)
        //compare answerArray and guessingWord 
        // function compare(answerArray,guessingWord){
        //     const finalArray =[];
        //     answerArray.forEach((e1)=>guessingWord.forEach((e2)=> 
        //         {if(e1 === e2){
        //     // objMap[e1]=objMap[e1]+1||1 ;
        //     }
        //     }
        //     ));
        //     return finalArray;
        // }
        //     console.log(finalArray)
                // };

                // Display guessed word
                // var guessingWordText = " ";
                // for (var i = 0; i < guessingWord.length; i++) {
                //     guessingWordText += guessingWord[i];
                // }
                // console.log(guessingWordText)
                //
    document.getElementById("guessingWord").innerText = guessingWord;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
        // console.log(remainingGuesses)
    document.getElementById("answerArray").innerText = answerArray;
        // console.log(remainingLetter)
    // winning the game
    function checkWin() {
        if (guessingWord.indexOf("_") === -1) {
        wins++;
        hasFinished = true;
        }
        };

    // losing the game
    function checkLoss() {
        if (remainingGuesses <= 0) {
        hasFinished = true;
        }
        }

    // Event listener
    document.onkeydown = function (event) {
        // reset game.
        if (startGame) {
        resetGame();
        startGame = false;
        } else {
        // press any key
        if (event.keyCode >= 65 && event.keyCode <= 90) {
        // makeGuess(event.key.toLowerCase());
        updateDisplay();
        checkWin();
        checkLoss();
        }
        }
        }
 }


