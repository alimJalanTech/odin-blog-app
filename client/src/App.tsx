import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  content: string;
}

function App(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>("http://localhost:3001/post").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
