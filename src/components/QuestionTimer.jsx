import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("SET TIMEOUT");
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("SET INTERVAL");
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress value={remainingTime} id="question-time" max={timeout} />;
}
