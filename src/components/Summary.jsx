import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";

export default function Summary({ userAnswers }) {

    const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;

    const skippedAnswersShare = Math.round((skippedAnswers / userAnswers.length) * 100);
    const correctAnswersShare = Math.round((correctAnswers / userAnswers.length) * 100);
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Thropy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            // aggiungi alla stringa con +=
            cssClass += ' skipped';
          }else if (answer === QUESTIONS[index].answers[0]){
            cssClass += ' correct';
          }else {
            cssClass += ' wrong';
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index]?.text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
