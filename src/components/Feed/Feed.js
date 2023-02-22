import React, { useState, useEffect } from "react";
import "./Feed.css"
import FeedCard from "./FeedCard";

function Feed() {
    const [posts, setPosts] = useState([]);     // useState allows us to track state in a function component, state generally refers to data or properties that need to be tracking in an application
    const [input, setInput] = useState("");

    async function getPosts() {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        console.log(data.posts);
        setPosts(data.posts);
    }

    useEffect(() => {   // useEffect allows to perform actions/side effects in components like fetching data, directly updating the dom and timers 
        getPosts();
    }, []);

    function addPosts() {
        const copyArray = posts;
        copyArray.unshift({     // .unshift = push element at start of the array
            userId: 10,         // .push = push element at last of the array
            name: "Krishan",
            tags: ["HTML", "CSS"],
            body: input,
        });
        setInput("");   // render again to get data 
    }

    console.log(posts);

    return (
        <div className="feed_container">
            <div className="feed_add">
                <div className="feed_add_input">
                    <input
                        type="text"
                        value={input}
                        placeholder="Write something..."
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <button onClick={addPosts}>Add</button>
                </div>
                <button className="feed_add_photo">Add Photo</button>
            </div>
            {posts?.map((value) => (   // ? is like if-else, shows that, make posts true and map the FeedCard functional component
                <FeedCard
                    image={value.userId}
                    name={value.name}
                    tags={value.tags}
                    message={value.body}
                    likeCount={value.reactions}
                />
            ))}
        </div>
    );
}

export default Feed;