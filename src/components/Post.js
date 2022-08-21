import React from "react";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import "./Post.css"

const Post = ({ name, time, imgUrl, caption, like }) => {
  return (
    <div className="post">

      <div className="post__header">
        <h4>x</h4>
        <img src={imgUrl} alt="" />
        <div className="post__headerInfo">
          <h5>{name}</h5>
          <p>{time}</p>
        </div>
        </div>
        <div className="post__caption">
          <p>{caption}</p>
        </div>
        <div className="post__footer">
          <p>Liked: {like}</p>
          <div className="post__footerOptions">
            <div className="post__footerOption"><ThumbUpAltOutlinedIcon /> <span>Like</span></div>
            <div className="post__footerOption"><CommentOutlinedIcon /> <span>Comment</span></div>
          </div>
        </div>
      
    </div>
  );
};

export default Post;
