// Array of quiz questions
var questions = [
    "What planet is known as the Red Planet?",
    "What is the largest ocean on Earth?",
    "What metal is liquid at room temperature?"
  ];
  
  // Array of corresponding answers
  var answers = [
    "mars",
    "pacific",
    "mercury"
  ];
  
  // Quiz function
  function quiz() {
    var points = 0;
  
    // for loop to go through each question
    for (var i = 0; i < 3; i++) {
      var guesses = 3;
      var correct = false;
  
      // while loop for up to 3 tries
      while (guesses > 0 && !correct) {
        var userAnswer = prompt(
          questions[i] + "\nYou have " + guesses + " guess(es) left:"
        );
  
        if (userAnswer === null) {
          userAnswer = "";
        }
  
        userAnswer = userAnswer.toLowerCase().trim();
  
        // conditional to check answer
        if (userAnswer === answers[i]) {
          points += guesses;
          correct = true;
          alert("Correct! You earned " + guesses + " point(s).");
        } else {
          guesses--;
  
          if (guesses > 0) {
            alert("Wrong answer. Try again.");
          } else {
            alert("Out of guesses! The correct answer was: " + answers[i]);
          }
        }
      }
    }
  
    return points;
  }
  
  // Call the quiz function and collect the cumulative score
  var totalScore = quiz();
  
  // Display the score on the page
  document.getElementById("score-output").innerHTML =
    "Your total score is: <strong>" + totalScore + "</strong> out of 9 points.";