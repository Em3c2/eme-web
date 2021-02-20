import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import * as helpers from "../utils/helpers";
import { css } from "@emotion/react";
import "../assets/css/main.css";
import Mesa from "../images/Mesa.svg";
import Blog from "../images/Blog.svg";
import Door from "../images/Door.svg";
import DoorOpen from "../images/DoorOpen.svg";
import Lamp from "../images/Lamp.svg";
import Title from "../images/Title.svg";

const IndexPage = () => {
  const data = useStaticQuery(query);
  const [offset, setOffset] = useState(0);
  const [scale, setScale] = useState(0);
  const [darkness, setDarkness] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [door, setDoor] = useState(false);

  useState(() => {
    setIsClient(true);
  }, []);

  const handleLamp = () => {
    setDarkness(darkness ? false : true);
  };
  const handleDoor = () => {
    return;
    setDoor(door ? false : true);
  };

  useEffect(() => {
    if (typeof Window === "undefined") return;
    const handleScroll = () => setOffset(window.pageYOffset);
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScale(helpers.parStartEnd(1, 5, 0.003, offset, ""));
  }, [offset]);

  if (!isClient) return null;

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          position: "fixed",
          background: darkness ? "#222" : "transparent",
        }}
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            display: "grid",
            overflow: "hidden",
            transition: "transform 0.1s",
            opacity: darkness ? "0.2" : "1",
            background: darkness
              ? "transparent"
              : "linear-gradient(118.99deg, rgba(255, 255, 255, 0.4) 37.73%, rgba(255, 255, 255, 0) 83.01%), #88C9B9",
            transformOrigin: "center",
            transform: `scale(${scale}) translateY(${
              scale > 1 ? scale * 12 : 0
            }px)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              background:
                "linear-gradient(100.67deg, rgba(255, 255, 255, 0.12) 38.62%, rgba(255, 255, 255, 0) 57.93%), #562B2B",
              height: "calc(40vh + 1px)",
              width: "100%",
              bottom: "0",
            }}
          />
          <img
            src={door ? DoorOpen : Door}
            onClick={handleDoor}
            style={{
              position: "absolute",
              height: door ? "54vh" : "50vh",
              minHeight: "300px",
              minWidth: "162px",
              maxHeight: "400px",
              bottom: door ? "36vh" : "40vh",
              right: door ? "67.7vw" : "70vw",
              marginLeft: `calc(-60% - ${scale * 50}px`,
            }}
          />
          <Link
            to={"/about"}
            focusable="false"
            tabIndex="-1"
            style={{
              position: "absolute",
              right: "calc(30vw - 100px)",
              bottom: "70vh",
            }}
          >
            <img
              src={Title}
              style={{ height: "100px" }}
              className={isClient && "interact"}
            />
          </Link>
          <img
            src={Mesa}
            style={{
              placeSelf: "center",
              position: "absolute",
              width: "30%",
              marginTop: "5vh",
              marginLeft: "53px",
              minWidth: "380px",
            }}
          />
          <div
            style={{
              placeSelf: "center",
              position: "absolute",
              marginBottom: "125px",
              width: "80px",
              height: "125px",
              paddingLeft: "10px",
              fontFamily: "consolas",
              fontSize: "4px",
              color: "#EFF268",
              maxHeight: "60px",
            }}
            css={css`
              br {
                margin-bottom: 10px;
              }
            `}
          >
            Hi Neo! <br /> Im Emilia <br />
            You´re welcome to my web
            <button
              css={css`
                position: relative;
                top: 50%;
                left: 5%;
                color: white;
                background-color: rgba(51, 42, 42, 0.3);
                width: 60px;
                border: none;
                font-size: 3px;
                text-align: center;
                font-family: consolas;
                padding: 1px;

                &:hover,
                &:active,
                &:focus {
                  outline: none;
                  border: none;
                }
              `}
            >
              Click to use PC
            </button>
          </div>
          <Link
            to={"/blog"}
            focusable="false"
            tabIndex="-1"
            style={{
              placeSelf: "center",
              position: "absolute",
              marginLeft: "230px",
              width: "8%",
              minWidth: "110px",
            }}
          >
            <img src={Blog} className={isClient && "interact"} />
          </Link>
          <img
            onClick={handleLamp}
            src={Lamp}
            className={isClient && "interact"}
            style={{
              position: "absolute",
              right: "62vw",
              maxHeight: "300px",
              height: "80vw",
              bottom: "calc(80vh + 3vw)",
            }}
          />
        </div>
      </div>
      <div style={{ height: "2000px" }} />
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
  }
`;

export default IndexPage;
