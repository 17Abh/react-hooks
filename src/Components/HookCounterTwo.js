import React, { useState } from 'react' 

const HookCounterTwo = () => {
    const initialCount = 0
    const [count , setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i < 5; i++ )  {
            setCount(prevcount => prevcount+1)
        }
    }

    return(
        <div>
            count: {count}
            <button onClick={()=>setCount(initialCount)}>reset</button>
            <button  onClick={()=>setCount(prevcount => prevcount+1)}>increment</button>
            <button  onClick={()=>setCount(prevcount => prevcount-1)}>decrement</button>
            <button  onClick={incrementFive}>increment 5</button>

        </div>
    )
}

export default HookCounterTwo