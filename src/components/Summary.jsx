import quizComplete from "../assets/quiz-complete.png";

export default function Summary() {
    return (
        <div id="summary">
            <img src={quizComplete} alt="trophy" />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">10%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">10%</span>
                    <span className="text">Answered Correctly</span>
                </p>
                <p>
                    <span className="number">10%</span>
                    <span className="text">Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                <li>
                    <h3>2</h3>
                    <p className="question">question text</p>
                    <p className="user-answer">User's answer</p>
                </li>
            </ol>
        </div>
    );
}
