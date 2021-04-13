import React, { useEffect, useState } from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle'

const DocTitleTwo = () => {
    const[count , setCount] = useState(0)
    useDocumentTitle(count)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>  {count}  </button>
        </div>
    )
}

export default DocTitleTwo