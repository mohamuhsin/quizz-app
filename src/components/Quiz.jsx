import { useState, useCallback } from "react";

import QUESTIONS from "../questions";
import quizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
    // use state to manage the answers from user, every answer is appended to an array manage by state
    const [userAnswers, setUserAnswers] = useState([]);
    // minimize use of state, next question index can be derived from userAnswers state
    const activeQuestionIndex = userAnswers.length;

    // check if quiz is complete
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    // callback function to update userAnswers
    // wrap with useCallback hook to avoid it being called as different instances or recreated
    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    },
        []);
    // skip a question after timeout before user's reaction by updating userAnswer with null for that question
    // call handleSelectAnswer pass null to update state
    // wrap with useCallback hook to avoid it being called as different instances or recreated
    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    // render quiz complete template
    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizComplete} alt="trophy" />
                <h2>Quiz Completed</h2>
            </div>
        );
    }

    // make a copy of answers of current question
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // shuffle array of answers to each question
    // original answers array has the right answer at index 0
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                     // add key prop to help react mount and unmount QuestionTimer component
                    key={activeQuestionIndex}
                    timeout={10000}
                    onTimeout={handleSkipAnswer}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
