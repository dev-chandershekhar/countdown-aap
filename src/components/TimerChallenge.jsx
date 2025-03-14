import { useState , useRef} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerCahallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimingRemaining] = useState(targetTime * 1000);
   
    const timerIsActive = timeRemaining > 0 && timeRemaining - targetTime * 1000;

    if (timeRemaining <= 0) {
        console.log(timeRemaining)
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimingRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimingRemaining(prevTimeRemaing => prevTimeRemaing - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} /> 
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} Second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop' : 'Start'} Timmer
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Timer is running' : 'Timer is inactive'}
        </p>
    </section> </>);
}