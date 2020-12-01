
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    Link,
} from "react-router-dom";
import "./Home.css"
import { Input,Button } from '@material-ui/core';
export default function Login() {

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
                <div className="home__body__form">
                    <div className="home__body__form__img">
                        <img className="home__body_img" src='https://cohhio.org/wp-content/uploads/2020/08/YVM_SM.png'></img>
                    </div>
                    <div className="home__body__form__form">
                        <Typography variant="h2" className="home__body__form_head">
                            Register
                        </Typography>
                        <div className="home__body__form__main">
                            <Input placeholder="Username" className="home__body__form__inp" />
                            <Input placeholder="Email" className="home__body__form__inp" />
                            <Input placeholder="Password" className="home__body__form__inp" type="password" />
                        </div>
                        <div className="home__body__form__btn">
                            <Button variant="contained" color="primary">
                                Login
                            </Button>
                            <Button variant="contained" color="secondary">
                                <Link to = "/" style = {{textDecoration:"none",color:"inherit"}} >New User -> Register</Link>
                                
                            </Button>
                        </div>


                    </div>

                </div>

            </div>



        </div >
    )
}
