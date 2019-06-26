import React, { useReducer } from 'react';


const useCounterReducerHook = () => {
    const initialState = { count : 0}

    const reducer = (state, action) => {
        switch(action.type){
            case 'increase':
                return { count : state.count + 1}
            case 'decrease':
                return { count : state.count - 1}
            default:
                return state
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
        <h1> Counter Example with useReducer</h1>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increase'})}>+ Increase</button>
        <button onClick={() => dispatch({ type: 'decrease'})}>- decrease</button>
        </>
    )
}

export  default useCounterReducerHook ;