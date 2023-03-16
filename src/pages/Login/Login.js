import React, { useState } from "react";
import "./Login.css";

function Login({ setLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        if (
            email &&
            password &&
            localStorage.getItem("email") &&
            localStorage.getItem("password")
        ) {
            if (
                email == localStorage.getItem("email") &&
                password == localStorage.getItem("password")
            ) {
                localStorage.setItem("isUserLoggedIn", true);
                setLoggedIn(true);
            } else {
                alert("Email or password is incorrect");
            }
        }
    }

    function signUp() {
        if (email && password) {
            // setting the values in local storage
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("isUserLoggedIn", true);
            setLoggedIn(true);
        }
    }

    return (
        <div className="login_container">
            <div className="login_fields_container">
                <p>Email</p>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="login_fields_container">
                <p>Password</p>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button onClick={login}>Login</button>

            <div className="sign_up_button">
                <p>Visiting for the first time?</p>
                <button onClick={signUp}>Sign Up</button>
            </div>
        </div>
    );
}

export default Login;