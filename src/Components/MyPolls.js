import React, { useEffect, useState } from 'react'
import Axios from "axios"
 export default function MyPolls({ id }) {
   const [data, setdata] = useState([])
   const polls = ()=>{
      Axios.get("http://localhost:8080/api/add_poll/polls",{headers:{'auth-token':id}}).then(response=>{
          console.log(response)
          setdata(response.data)
      })
    }
    console.log(data)
    return (
        <div>
            <button onClick = {polls}>Click to see my Polls</button>
            {data.map((poll,index)=>(
                <div key = {index}>
                    <h1>{poll.title}</h1>
                    <h2>Positions</h2>
                    {poll.positions.map((pos,i)=>(
                        <div>{pos.name}</div>
                        
                    ))}
                </div>
            ))}
        </div>
    )
}
