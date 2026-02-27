import { useState, useCallback } from "react";
import QUESTIONS from "../question";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  // value to show when the quiz is over
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
 
 
  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  }, []);

  //   useCallback ha bisogno di array di dipendenze anche
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );
 
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Thropy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <>

    
      <div id="quiz">    
        <Question   
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer = {handleSelectAnswer}
        onSkipAnswer={ handleSkipAnswer}
        />
      </div>
    </>
  );
}
