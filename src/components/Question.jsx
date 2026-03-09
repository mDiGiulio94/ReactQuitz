import QuestionTimer from "./QuestionTimer";
import Answer from "./Answers";
import { useState } from "react";
import QUESTIONS from "../question";
export default function Question({ index, onSkipAnswer, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if( answer.selectedAnswer){
    timer = 3000;
  } else if (answer.isCorrect !== null) {
    timer = 2000;
  } 

    let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }



  return (
    <div id="question">
      <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} mode={answerState}/>
      <h2>{QUESTIONS[index].text}</h2>
      <Answer
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        handleSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
