import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("SET TIMEOUT");
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("SET INTERVAL");
        setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    }, []);

    return <progress value={remainingTime} id="question-time" max={timeout} />;
}
