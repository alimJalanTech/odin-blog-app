import React from "react";

type ArticlesProps = {
  title: string;
  desc: string;
};

const Articles: React.FC<ArticlesProps> = ({ title, desc }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Articles;
