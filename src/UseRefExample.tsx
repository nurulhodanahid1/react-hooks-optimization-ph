import { useRef, useState } from "react";

const UseRefExample = () => {
    const myRef = useRef(0);
    const [count, setCount] = useState(0);

    const increment = () => {
        myRef.current += 1;
        setCount(count + 1);
        console.log("ref=>", myRef.current);
        console.log("state=>", count);
    }
    return (
        <div>
            <h1>useRef: {myRef.current}, state: {count}</h1>
            <button onClick={() => increment()}>increment</button>
        </div>
    );
};

export default UseRefExample;