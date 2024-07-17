import React from "react";
import { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/rajawataditya")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return <div>Github Followers: {data.followers}</div>;
  <img src={data.avatar_url} alt="Github Profile" width={300} />;
}

export default Github;
