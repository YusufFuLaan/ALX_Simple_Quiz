function checkAnswer() {
  const correctAnswer = "4";

  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  const feedbackElement = document.getElementById("feedback");

  if (userAnswer) {
    const answerValue = userAnswer.value;

    if (answerValue === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  } else {
    feedbackElement.textContent = "Please select an answer.";
  }
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
