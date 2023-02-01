import React, { useState } from "react";
import "./FeedCard.css";
import Avatar from "@mui/material/Avatar";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function FeedCard({ image, name, tags, message, likeCount }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    function handleLikeClick() {
        if (isLiked === true) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }
    }

    function handleSaveClick() {
        if (isSaved === true) {
            setIsSaved(false);
        } else {
            setIsSaved(true);
        }
    }

    return (
        <div className="feed_card_container">
            <div className="feed_card_title">
                <div>
                    <Avatar src={image} alt={name} />
                </div>
                <div className="feed_card_title_text">
                    <p className="feed_card_title_text_name">{name}</p>
                    <div className="tags">
                        {tags.map((value) => (
                            <p className="feed_card_title_text_username">{value}</p>
                        ))}
                    </div>
                </div>
            </div>

            <p>{message}</p>

            <div className="icons_container">
                <div className="icons" onClick={handleLikeClick}>
                    {isLiked ? <ThumbUpIcon /> : <ThumbUpOffAltOutlinedIcon />}
                    <p>{isLiked ? likeCount + 1 : likeCount}</p>
                </div>
                <div className="icons bookmark_icon" onClick={handleSaveClick}>
                    {isSaved ? <BookmarkIcon /> : <TurnedInNotOutlinedIcon />}
                </div>
            </div>
        </div >
    );
}

export default FeedCard;