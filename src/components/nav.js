import React, { useEffect, useState } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { css, jsx } from "@emotion/react";
import BackgroundDesktop from "../images/HeaderDesktop.svg";
import BackgroundMobile from "../images/HeaderMobile.svg";

const Nav = ({ blog, about }) => {
  const query = graphql`
    query {
      strapiGlobal {
        siteName
      }
    }
  `;
  const [isClient, setIsClient] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof Window === "undefined") return;
    const handleScroll = () => setScrolled(window.pageYOffset > 1);
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) return null;

  return (
    <nav
      css={css`
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100px;
        top: auto;
        bottom: ${blog ? "" : "0.1vh"};

        @media (min-width: 800px) {
          top: ${blog ? "" : "57vh"};
        }

        a {
          border: none;
          color: ${about ? "#B13838" : "white"};
          position: relative;
          background-color: transparent;
          font-family: "Oxanium", consolas;
          text-decoration: none;
          padding: 0.5rem;
          font-size: 1.1rem;

          @media (min-width: 800px) {
            font-size: 1rem;
          }
        }

        a:visited {
          color: ${about ? "#B13838" : "white"};
        }

        @media (hover: hover) {
          a:focus {
            outline-style: dashed;
          }
        }
      `}
    >
      <img
        src={BackgroundDesktop}
        css={css`
          display: none;

          @media (min-width: 800px) {
            display: ${blog && !about ? "block" : "none"};
            position: absolute;
            min-width: 100vw;
            min-height: 100%;
            top: -3vw;
          }
        `}
      />
      <img
        src={BackgroundMobile}
        css={css`
          display: ${blog && !about ? "block" : "none"};
          position: absolute;
          min-width: 100vw;
          min-height: 100%;
          top: calc(-25vw + 55px);

          @media (min-width: 800px) {
            display: none;
          }
        `}
      />
      <div
        css={css`
          display: flex;
          opacity: ${scrolled && !blog ? "0" : "1"};
          transition: 0.2s;
          justify-content: space-evenly;
          align-items: center;
          vertical-align: middle;
          height: 80%;
          width: 100%;

          @media (min-width: 800px) {
            height: 100%;
            max-width: 250px;
            float: ${blog ? "right" : "left"};
          }
        `}
      >
        <Link to="/">Home</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
};

export default Nav;
