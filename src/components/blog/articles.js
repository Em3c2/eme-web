import React, { useState } from "react";
import Layout from "../layout";
import Card from "./card";
import { css } from "@emotion/react";

const Articles = ({ articles }) => {
  const [isClient, setIsClient] = useState(false);

  useState(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Layout blog>
      <div
        css={css`
          background-color: #e4e0e0;
          padding-bottom: 50px;
        `}
      >
        <header
          css={css`
            margin-left: 30px;
          `}
        >
          <h1
            css={css`
              padding-top: 140px;
              margin-left: -2px;
              font-size: calc(3vw + 30px);
              font-family: "Truculenta", sans-serif;
              font-weight: 400;
            `}
          >
            Cyborg Thougths
          </h1>
          <h4
            css={css`
              margin-top: -10px;
              font-weight: 300;
              font-family: "Laila", sans-serif;
            `}
          >
            Blog about my learnings
          </h4>
        </header>
        <div
          css={css`
            display: grid;
            width: 100%;
            grid-template-columns: 1fr;
            gap: calc(4vw + 15px);
            padding-top: 30px;

            @media (min-width: 800px) {
              grid-template-columns: 1fr 1fr;
              padding-top: 60px;
            }
          `}
          className="container"
        >
          {articles.length ? (
            articles.map((article) => {
              return (
                <Card article={article} key={`article__${article.slug}`} />
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
