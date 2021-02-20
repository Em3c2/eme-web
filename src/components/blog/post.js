import React, { useState, useEffect } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import Layout from "../layout";
import { css } from "@emotion/react";

const apiUrl = process.env.API_URL;

const Post = ({ location }) => {
  const postSlug = location.pathname.split("/")[2];

  const [content, setContent] = useState({});
  const [to404, setTo404] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useState(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof Window === "undefined") return;
    axios
      .get(apiUrl + `/articles/${postSlug}`)
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {
        setTo404(true);
      });
  }, []);

  if (to404) return <h1>No encontramos el artículo</h1>;
  if (!isClient) return null;

  return (
    <Layout blog>
      <article
        css={css`
          background-color: #e4e0e0;
          padding-top: 100px;
          padding-left: 30px;
          width: calc(100% - 30px);
          height: calc(100vh - 100px);
        `}
      >
        <h1>{content.title}</h1>
        <div className="container">
          <Markdown source={content.content} escapeHtml={false} />
        </div>
      </article>
    </Layout>
  );
};

export default Post;
