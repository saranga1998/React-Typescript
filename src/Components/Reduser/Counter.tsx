import { useReducer } from "react"


type CounterState = {
    count : number
}

type UpdateAction = {
    type : 'increment' | 'decrement'
    payload:number
}

type ResetAction ={
    type : 'reset'
}
type CounterAction = UpdateAction | ResetAction

const initialState = {count : 0}


const counterReducer = (state : CounterState,action : CounterAction) =>{
    switch(action.type){
        case 'increment':
            return {count : state.count + action.payload}
        case 'decrement':
            return {count : state.count - action.payload}
        case 'reset' :
            return initialState
        default:
            return state
    }
}

export const Counter = () =>{

    const [state,dispatch] = useReducer(counterReducer,initialState)

    return(
        <div>
            Count : {state.count}
            <button onClick={() => dispatch({type:'increment',payload:10})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement',payload:10})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>


        </div>
    )
    }