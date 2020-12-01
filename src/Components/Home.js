
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { register } from "../Actions/index"
import "./Home.css"
import {
    Link,
} from "react-router-dom";
import { Input, Button } from '@material-ui/core';
import axios from "axios"
export default function Home() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const registerUser = async (e) => {

        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password
        }

        axios.post('http://localhost:8080/api/user/register', user)
            .then(function (response) {
                console.log(response);
            })
    }
    return (
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
                <form className="home__body__form" onSubmit={registerUser}>
                    <div className="home__body__form__img">
                        <img className="home__body_img" src='https://cohhio.org/wp-content/uploads/2020/08/YVM_SM.png'></img>
                    </div>
                    <div className="home__body__form__form">
                        <Typography variant="h2" className="home__body__form_head">
                            Register
                        </Typography>
                        <div className="home__body__form__main">
                            <Input placeholder="Username" className="home__body__form__inp" value={name} onChange={e => setname(e.target.value)} />
                            <Input placeholder="Email" className="home__body__form__inp" value={email} onChange={e => setemail(e.target.value)} />
                            <Input placeholder="Password" className="home__body__form__inp" type="password" value={password} onChange={e => setpassword(e.target.value)} />
                        </div>
                        <div className="home__body__form__btn">
                            <Button variant="contained" color="primary" type="submit">
                                Register
                            </Button>
                            <Button variant="contained" color="secondary">
                                <Link to='/login' style={{ textDecoration: "none", color: "inherit" }}>Old User -> Login</Link>
                            </Button>
                        </div>
                    </div>

                </form>

            </div>



        </div >
    )
}
