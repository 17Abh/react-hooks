import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DFReducerOne = () => {

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicod.com/posts/1')
        .then(res=>{
            setLoading(false)
            setPost(res.data)
            setError('')    
        })
        .catch(error=>{
            setLoading(false)
            setPost('')
            setError('there is an error')
        })
    },[])

    return (
        <div>
            {loading ? 'loading'  : post.title}
            {error ? error : null}
        </div>
    )
}

export default DFReducerOne 