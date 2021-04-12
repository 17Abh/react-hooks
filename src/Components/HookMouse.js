import React, { useEffect, useState } from 'react'

const HookMouse = () => {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePos = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener('mousemove', logMousePos)

        return () => {
            console.log('removing the event')
            window.removeEventListener('mousemove',logMousePos)
        }
    }, [])

    return(
        <div>
           hooks x- {x} y- {y}
        </div>
    )
}

export default HookMouse