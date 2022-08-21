import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./AddPost.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Post = () => {
  const [caption, setCaption] = useState("");
  const createPost = async (e) => {
    e.preventDefault();
    const usersCollectionRef = collection(db, "posts");
    await addDoc(usersCollectionRef, {
      name: "sample name",
      caption: caption,
      like: 0,
      date_posted: new Date(),
    });
    setCaption("");
  };
  return (
    <div className="addPost">
      <div className="addPost__avatar">
        <AccountCircleIcon fontSize="large" />
      </div>
      <form>
        <input
          className="addPost__input"
          type="text"
          placeholder="What's in your mind, John?"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <button
          className="addPost__button"
          type="submit"
          onClick={createPost}
          disabled={!caption}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
