import React from "react";
import "./Feed.css"
import FeedCard from "./FeedCard";

function Feed() {
    return (
        <div className="feed_container">
            <div className="feed_add">
                <input />
                <p>Add</p>   
            </div>
            <FeedCard />
        </div>
    );
}

export default Feed;