import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state,action) => {
    switch(action.type){
        case 'Fetch_succes':
            return{
                loading:false,
                post:action.payload,
                error:''
            }
        case 'Fetch_error' :
            return{
                loading:false,
                post:{},
                error:'there is an error'
            }  
        default:
            return state        
        
    }
}

const DFReducerTwo = () => {
    const[state,dispatch] =  useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'Fetch_succes', payload:res.data})    
        })
        .catch(error=>{
            dispatch({type:'Fetch_error'})
        })
    },[])

    return (
        <div>
             {state.loading ? 'loading'  : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DFReducerTwo