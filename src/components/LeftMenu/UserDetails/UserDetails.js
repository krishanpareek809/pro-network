import React from "react";
import "./UserDetails.css";

function UserDetails() {
    return (
        <div className="user_details_container">
            <div className="user_details_background_image">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
            </div>
            <div className="user_details_div">
                <p className="user_details_div_title" data-testid="user-name">Username</p>
                <div className="user_details_div_mail">
                    <p data-testid="user-email">username@gmail.com</p>
                </div>
            </div>
            <hr />
            <div>
                <div className="user_details_stats">
                    <p>Who viewed you</p>
                    <div className="user_details_stats_highlight"><p>2300</p></div>
                </div>
                <div className="user_details_stats user_details_stats_2">
                    <p>Views on post</p>
                    <div className="user_details_stats_highlight"><p>2570</p></div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;