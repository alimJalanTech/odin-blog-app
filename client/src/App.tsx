import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Post {
  _id: string;
  title: string;
  content: string;
}

interface AppProps {}

const App: React.FC<AppProps> = (props: AppProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>("http://localhost:3001/post").then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div className="post-container">
      {posts.map((post) => (
        <div key={post._id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
