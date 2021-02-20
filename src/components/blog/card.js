import React from "react";
import { Link } from "@reach/router";
import { css, jsx } from "@emotion/react";

const Card = ({ article }) => {
  console.log(article);
  return (
    <Link to={`/blog/${article.slug}`}>
      <div
        css={css`
          box-shadow: 0 0 8px 2px rgba(2, 2, 2, 0.1);
          border: 2px dotted #ccc;
          border-radius: 40px;
          overflow: hidden;
          height: 300px;

          &:hover {
            filter: brightness(0.7);
            box-shadow: none;
            transition: 0.5s;
          }
          @media (min-width: 400px) {
            box-shadow: 0 0 10px 10px rgba(2, 2, 2, 0.1);
          }
        `}
      >
        <div
          style={{
            maxHeight: "50%",
            overflow: "hidden",
            display: "grid",
            alignContent: "center",
          }}
        >
          <img
            src={article.image.url}
            style={{ position: "static" }}
            css={css`
              width: 100%;
            `}
          />
        </div>
        <div
          css={css`
            padding: 10px 15px;
          `}
        >
          <h5
            css={css`
              color: #222;
              font-size: 1.1rem;
              margin: 5px 0;
              font-family: "Oxanium", consolas;
              font-weight: 400;
            `}
          >
            {article.title}
          </h5>
        </div>
        <div
          css={css`
            padding: 0 15px;
          `}
        >
          <p
            css={css`
              font-weight: 300;
              color: #555;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              font-weight: 300;
              font-family: "Laila", sans-serif;
            `}
          >
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
