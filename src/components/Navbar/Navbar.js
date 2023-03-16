import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {
    const navigate = useNavigate();

    function logout(){
        setIsLoggedIn(false);
        localStorage.setItem("isUserLoggedIn", false);
    }

    return (
        <div className="navbar_container">
            <div className="navbar">
                <div className="navbar_left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU" />
                    <input placeholder="Search User" />
                </div>

                <div className="navbar_right">
                    <p>HI, USER</p>
                    <p onClick={() => navigate("/")}>HOME</p>
                    <p onClick={() => navigate("/about-us")}>ABOUT US</p>
                    <p onClick={() => navigate("/profile")}>PROFILE</p>
                    <p>DARK MODE</p>
                    <button onClick={logout}>LOGOUT</button>
                </div>
            </div>
            <hr className="navbar_line" />
        </div>
    );
}

export default Navbar;