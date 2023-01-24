import React from "react";
import "./Homepage.css";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import RightMenu from "../../components/RightMenu/RightMenu";

function Homepage(){
    return(
        <div className="homepage_container">
            <LeftMenu />
            <div></div>
            <RightMenu />
        </div>
    );
}

export default Homepage