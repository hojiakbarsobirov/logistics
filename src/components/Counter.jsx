// src/components/Counter.jsx
import { useEffect, useState } from 'react';

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 50); // 50ms interval

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 50);

        return () => clearInterval(counter);
    }, [end, duration]);

    return <h2 className='text-red-500 font-bold text-3xl xl:text-4xl'>{count}+</h2>;
};

export default Counter;
