import React, { useMemo, useState } from 'react'

const UseMemoCounter = () => {

    const[counterOne,setCounterOne] = useState(0)
    const[counterTwo,setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(counterOne+1)
    }

    const incrementTwo = () =>{
        setCounterTwo(counterTwo+1)
    }
    
    const isEven = useMemo(() => {
        let i =0
        while(i<2000000000)i++
        return counterOne%2 === 0
    },[counterOne])

    return(
        <div>
            <button onClick={incrementOne} >counter1  {counterOne}</button>
            <span>{isEven ? 'even' : 'odd'}</span>
            <button onClick={incrementTwo} >counter2  {counterTwo}</button>

        </div>
    )
}

export default UseMemoCounter