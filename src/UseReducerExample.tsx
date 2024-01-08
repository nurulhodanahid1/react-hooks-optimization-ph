import { useReducer } from 'react';

type TAction = {
    type: string;
    payload: number;
}

const initialState = {count: 0}

const reducer = (currentState: typeof initialState, action: TAction) => {
    switch (action.type) {
        case "increment":
            return {count: currentState.count + 1}
            case "incrementBySetAmount":
            return {count: currentState.count + action.payload}
        case "decrement":
            return {count: currentState.count - 1}
    
        default:
            return currentState;
    }
}
const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=> dispatch({type: "increment", payload: 0})}>increment</button>
            <button onClick={()=> dispatch({type: "incrementBySetAmount", payload: 3})}>increment by 3</button>
            <button onClick={()=> dispatch({type: "decrement", payload: 0})}>decrement</button>
        </div>
    );
};

export default UseReducerExample;