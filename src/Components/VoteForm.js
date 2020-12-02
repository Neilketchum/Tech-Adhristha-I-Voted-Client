import React, { useState } from 'react'
import {
    
    useParams
  } from "react-router-dom";
  import Axios from  "axios"
  import { useSelector } from "react-redux"
import { Button } from '@material-ui/core';
function VoteForm() {
    let { id } = useParams();
    const auth = useSelector(state => state.auth)
    const [voteform, setform] = useState([])
    const polls = ()=>{
        const body = {id:id.toString()}
        Axios.get("http://localhost:8080/api/voter/form",{
         
              id: id.toString()
       
          },{headers: { 'Content-Type': 'application/json' }}).then(response=>{
            console.log(response)
            setform(response.data)
        })
      }
    console.log(id)
    return (
        <div>
            <Button variant = "contained" onClick = {polls}>Click To View Poll</Button>
            {voteform.map(vote=>(
                vote.title
            ))}
        </div>
    )
}

export default VoteForm
