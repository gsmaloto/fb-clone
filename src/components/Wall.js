import React, { useState } from "react";
import Post from "./Post";
import AddPost from "./AddPost";
import "./Wall.css";
import { useEffect } from "react";
import { db } from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";

const Wall = () => {
  const [posts, setPosts] = useState([]);
  const usersCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(usersCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [posts]);

  return (
    <div className="wall">
      <AddPost />
      {posts.map((post) => (
        <Post name={post.name} caption={post.caption} like={post.like} />
      ))}
    </div>
  );
};

export default Wall;
