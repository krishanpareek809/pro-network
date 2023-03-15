import React from "react";
import "./Login.css";

function Login({ setLoggedIn }) {
    return (
        <div className="login_container">
            <div className="login_fields_container">
                <p>Email</p>
                <input type="email" placeholder="Enter Email" />
            </div>
            <div className="login_fields_container">
                <p>Password</p>
                <input type="password" placeholder="Enter Password" />
            </div>
            <button onClick={() => setLoggedIn(true)}>Login</button>
        </div>
    );
}

export default Login;