import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FeedDescription() {
    const params = useParams();
    console.log("params", params);

    const [feedData, setFeedData] = useState(null);

    async function callApi(id) {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();
        setFeedData(data);
    }

    useEffect(() => {
        callApi(params.id);
    }, []);
    
    return (
        <div>
            <div>{feedData?.title}</div>
            <div>{feedData?.body}</div>
            <div>{feedData?.reactions}</div>
        </div>
    );
}

export default FeedDescription;