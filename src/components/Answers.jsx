import { useRef } from "react";

export default function Answer ({answers, answerState, selectedAnswer, handleSelectAnswer}) {

    const shuffledAnswers = useRef(null);

     //   shugffle method
      //   since it gives a value between 0 and 1 the sort method will randomly mix the orders of the answers
     if(!shuffledAnswers.current){
      shuffledAnswers.current = [...answers];
      shuffledAnswers.current.sort(() => Math.random() - 0.5);
     }


    return (
        <>
         <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
              const isSelected = selectedAnswer === answer;
              let cssClass = "";
              if (answerState === "answered" && isSelected) {
                cssClass = "selected";
              }
              if (
                (answerState === "correct" ||
                answerState === "wrong") && isSelected
              ) {
                cssClass = answerState;
              }

              return (
                <li key={answer} className="answer">
                  <button
                    onClick={() => handleSelectAnswer(answer)}
                    className={cssClass}
                    disabled= {answerState !== ""}
                  >
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
    )
}