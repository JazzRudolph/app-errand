import React from "react";

export default function Time() {
    const [time, setTime] = React.useState(
        new Date().toLocaleTimeString()
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newTime = new Date().toLocaleTimeString();
            setTime(newTime);
        }, 200);
        return () => clearInterval(interval);
      }, []);    



    return(
        <div>
            {time}
        </div>
    )
}