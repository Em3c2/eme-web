import React, { useState, useEffect } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import Articles from "../components/blog/articles";
import Post from "../components/blog/post";

const apiUrl = process.env.GATSBY_API_URL;

const Blog = () => {
  if (typeof Window === "undefined") return false;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl + "/articles")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <Articles path="/blog" articles={articles} />
      <Post path="/blog/:slug" location={location} />
    </Router>
  );
};

export default Blog;
