import React, { useReducer } from "react";

type Action = {
    type: string;
    payload: string;
}
const initialState = { name: "", email: "" };

const reducer = (currentState: typeof initialState, action: Action) => {
    switch (action.type) {
        case "addName":
            return { ...currentState, name: action.payload }
        case "addEmail":
            return { ...currentState, email: action.payload }
        default: currentState;
    }
}
const UseReducerFormExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state)
    }
    return (
        <>
            <h1>Reducer Form</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => { dispatch({ type: "addName", payload: e.target.value }) }}
                    type="text" name="name" id="name" />
                <input onChange={(e) => { dispatch({ type: "addEmail", payload: e.target.value }) }}
                    type="email" name="email" id="email" />
                <button type="submit">Submit</button>
            </form>
        </>

    );
};

export default UseReducerFormExample;