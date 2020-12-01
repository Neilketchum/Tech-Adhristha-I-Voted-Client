
import React,{useState} from 'react';
import { useDispatch } from "react-redux"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    Link,
} from "react-router-dom";
import "./Home.css"
import axios from "axios"
import { Input,Button } from '@material-ui/core';
import Dashboard from './Dashboard';
import {setAdminAuth} from "../Actions/index"
export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [verify,setverify] = useState(false)
    const dispatch = useDispatch();

    const loginUser = async (e) => {

        e.preventDefault();
        const user = {
            email: email,
            password: password
        }

        axios.post('http://localhost:8080/api/user/login', user)
            .then(function (response) {
                if(response.status === 200){
                    console.log(response)
                    dispatch(setAdminAuth(response.data))
                    setverify(true)
                }
            })
    }
    return (
        <div>
            {verify?<Dashboard/>:
            <div>
            <AppBar position="static">
                <Toolbar className="home__appbar">
                    <Typography variant="h6" >
                        Cloud Elections
                    </Typography>
                    <Button color="inherit">Make Your Vote Count</Button>
                </Toolbar>
            </AppBar>
            <div className="home_body">
                <form className="home__body__form" onSubmit={loginUser}>
                    <div className="home__body__form__img">
                        <img className="home__body_img" src='https://cohhio.org/wp-content/uploads/2020/08/YVM_SM.png'></img>
                    </div>
                    <div className="home__body__form__form">
                        <Typography variant="h2" className="home__body__form_head">
                            Login
                        </Typography>
                        <div className="home__body__form__main">
                            
                        <Input placeholder="Email" className="home__body__form__inp" value={email} onChange={e => setemail(e.target.value)} />
                            <Input placeholder="Password" className="home__body__form__inp" type="password" value={password} onChange={e => setpassword(e.target.value)} />
                        </div>
                        <div className="home__body__form__btn">
                            <Button variant="contained" type = "submit" color="primary">
                                Login
                            </Button>
                            <Button variant="contained" color="secondary">
                                <Link to = "/" style = {{textDecoration:"none",color:"inherit"}} >New User -> Register</Link>
                                
                            </Button>
                        </div>


                    </div>

                </form>

            </div>


            </div>
        }
        </div >
    )
}
