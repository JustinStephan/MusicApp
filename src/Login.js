import {Button} from "@mui/material";
import { auth, provider } from "./firebase";
import React from 'react';
import "./Login.css"

function Login() {
    const signIn  = () => {
            auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://www.clipartmax.com/png/small/106-1066595_hearing-icon-transparent-background.png"
                    alt=""
                    />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;