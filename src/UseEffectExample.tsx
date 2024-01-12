import { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [hidden, setHidden] = useState(false);
    // useEffect(()=> {
    //     console.log("render");
    //     return () => {
    //         console.log("clean up")
    //     }
    // }, [hidden])
    return (
        <div>
            <button onClick={() => setHidden((prev) => !prev)}>{hidden ? "Show" : "Hide"}</button>
            {/* {!hidden && <Counter />} */}
            {!hidden && <Todo />}
        </div>
    );
};
export default UseEffectExample;
// const Counter = () => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             console.log("rendering")
//             setCount((prev) => prev + 1)
//         }, 1000)
//         return () => {
//             clearInterval(intervalId)
//         }
//     }, [])
//     return (
//         <div>
//             <h1>{count}</h1>
//         </div>
//     )
// }
const Todo = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
            .then(response => response.json())
            .then(data => alert(data.title));
        return () => {
            controller.abort();
        }
    }, []);
    return (
        <div>
            Todo
        </div>
    )
}