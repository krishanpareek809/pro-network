import React, { useState } from "react";
import "./FeedCard.css";
import Avatar from "@mui/material/Avatar";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";

function FeedCard({ id, image, name, tags, message, likeCount, dislikeCount, views }) {
    const navigate = useNavigate();

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    function handleLikeClick() {
        if (isLiked === true) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }
    }

    function handleDislikeClick() {
        if (isDisliked === true) {
            setIsDisliked(false);
        } else {
            setIsDisliked(true);
        }
    }

    function handleSaveClick() {
        if (isSaved === true) {
            setIsSaved(false);
        } else {
            setIsSaved(true);
        }
    }

    function onClick() {
        if (id) {
            navigate(`/feed-description/${id}`);
        }
    }

    return (
        <div className="feed_card_container">
            <div>
                <div className="feed_card_title" onClick={onClick}>
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

                {image && (
                    <div className="feed_card_image_container">
                        <img src={image} alt={id} />
                    </div>
                )}
            </div>

            <div className="icons_container">
                <div className="icons" onClick={handleLikeClick}>
                    {isLiked ? <ThumbUpIcon /> : <ThumbUpOffAltOutlinedIcon />}
                    <p>{isLiked ? likeCount + 1 : likeCount}</p>
                </div>
                <div className="icons" onClick={handleDislikeClick}>
                    {isDisliked ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />}
                    <p>{isDisliked ? dislikeCount + 1 : dislikeCount}</p>
                </div>
                <div className="icons" onClick={handleSaveClick}>
                    {isSaved ? <BookmarkIcon /> : <TurnedInNotOutlinedIcon />}
                </div>
                <div className="icons views_icon">
                    {<VisibilityIcon/>}
                    <p>{views}</p>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;