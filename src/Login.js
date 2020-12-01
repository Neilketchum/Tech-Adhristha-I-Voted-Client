import React,{useEffect}  from 'react'
import axios from "axios"
function Login() {
    useEffect(() => {
        console.log("HI")
        axios.post('http://localhost:8080/api/user/login', JSON.stringify({

            "email": "daipayanh@gmail.com",
            
            "password": "password",
            
            }),{"headers" : {

            "content-type": "application/json"
            
            }}).then((response)=>{
          console.log(response.data)
        },(error)=>{
          console.log(error)
        })
        
      }, [])
    return (
        <div>
            
        </div>
    )
}

export default Login
