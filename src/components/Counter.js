import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;