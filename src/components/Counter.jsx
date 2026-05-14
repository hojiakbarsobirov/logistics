// src/components/Counter.jsx
import { useEffect, useState } from 'react';

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrame;

        // requestAnimationFrame - setIntervalga qaraganda ancha silliq ishlaydi
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            // Vaqt bo'yicha progressni hisoblash (0 dan 1 gacha)
            const percentage = Math.min(progress / duration, 1);
            
            // Hozirgi raqamni hisoblash
            const currentCount = Math.floor(percentage * end);
            
            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(step);
            } else {
                setCount(end); // Oxirida aniq qiymatni o'rnatish
            }
        };

        animationFrame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <h2 className='text-red-500 font-bold text-3xl xl:text-4xl tabular-nums'>
            {count.toLocaleString()}+
        </h2>
    );
};

export default Counter;