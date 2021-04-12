import React, { useContext } from 'react' 
import {userContext,channelcontext} from '../App'

const Context = () => {

    const user = useContext(userContext)
    const channel = useContext(channelcontext)

    return(
        <div>
            {user}---{channel}
        </div>
    )
}

export default Context