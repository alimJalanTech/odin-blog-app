import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Articles from "./Articles";

interface Post {
  _id: string;
  title: string;
  desc: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>("http://localhost:3001/post").then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      <div className="post-container">
        {posts.map((post) => (
          <Articles title={post.title} desc={post.desc} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
