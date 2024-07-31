import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    // skip a question after time out
    // clean up timer
    useEffect(() => {
        console.log("SET TIMEOUT");
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer); {/* clear the timer when instance of the QuestionTimer unmounts*/}
        };
    }, [timeout, onTimeout]);

    // update progressbar at intervals
    useEffect(() => {
        console.log("SET INTERVAL");
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval); {/* clear the interval when instance of the QuestionTimer unmounts to stop counting */}
        };
    }, []);

    return <progress value={remainingTime} id="question-time" max={timeout} />;
}
