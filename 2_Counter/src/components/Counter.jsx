import React, { useEffect, useState } from "react";

const Counter = ({ duration }) => {
    const [timer, setTime] = useState(duration);
    useEffect(() => {
        setTimeout(() => {
            setTime(timer - 1000);
        }, 1000)
    }, [timer]);

    const getFormateTime = (duration) => {
        if (duration < 0) {
            return '00d:00h:00m:00s';
        }
        let total_seconds = Math.floor((duration / 1000));
        let total_minutes = Math.floor((total_seconds / 60));
        let total_hours = Math.floor((total_minutes / 60));
        let days = Math.floor((total_hours / 24));

        let seconds = Math.floor(total_seconds % 60)
        let minutes = Math.floor(total_minutes % 60)
        let hours = Math.floor(total_hours % 24)

        return `${days}d:${hours}h:${minutes}m:${seconds}s`;

    }

    return (
        <div className="counter-container">
            <div className="counter-background"></div>
            <div className="counter-content">
                <div className="timer-icon">&#8986;</div>
                <h2>Countdown Timer</h2>
                <div className="timer">
                    <p>{getFormateTime(timer)}</p>
                </div>
            </div>
        </div>
    )
}
export default Counter;