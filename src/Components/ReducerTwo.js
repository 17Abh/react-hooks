import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return  {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return  {...state, secondCounter: state.secondCounter - action.value}    
        case 'reset':
            return initialState
        default:
            return state            
    }
}

const ReducerTwo = () => {

    const [count,dispatch] = useReducer (reducer,initialState)

    return (
        <div>
            <div>count---{count.firstCounter}</div>
            <div>count 2---{count.secondCounter}</div>
                        
            <button onClick={()=> dispatch({type: 'increment', value:1 })}>increment</button><br></br>
            <button onClick={()=> dispatch({type: 'decrement',value:1  })}>decrement</button><br></br>
            <button onClick={()=> dispatch({type: 'increment', value:5 })}>increment 5</button><br></br>
            <button onClick={()=> dispatch({type: 'decrement',value:5  })}>decrement 5</button><br></br>
            <button onClick={()=> dispatch({type: 'reset'})}>reset</button><br></br>
            <button onClick={()=> dispatch({type: 'increment2', value:1 })}>increment c2</button><br></br>
            <button onClick={()=> dispatch({type: 'decrement2',value:1  })}>decrement c2</button><br></br>
        </div>
    )
}

export default ReducerTwo

