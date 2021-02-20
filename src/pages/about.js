import React from "react";
import Markdown from "react-markdown";
import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import about from "../images/About.svg";

const AboutPage = () => {
  const data = useStaticQuery(query);
  const caption = data.strapiAbout;

  return (
    <Layout seo={data.strapiAbout.seo} about blog>
      <section
        className="container"
        css={css`
          padding-top: 100px;
          width: 100%;
          height: 100%;
          position: relative;
        `}
      >
        <img
          src={about}
          css={css`
            @media (min-width: 800px) {
              width: 35%;
              position: absolute;
              left: 65%;
            }
          `}
        />
        <div
          css={css`
            margin-top: 10vw;
          `}
        >
          <Markdown
            source={caption.Intro}
            escapeHtml={false}
            css={css`
              @media (min-width: 800px) {
                width: 55%;
                margin-top: 20vw;
              }
            `}
          />

          <h3>Work Experience</h3>
          <Markdown source={caption.WorkExperience} escapeHtml={false} />

          <h3>Education</h3>
          <Markdown source={caption.Education} escapeHtml={false} />
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

const query = graphql`
  query {
    strapiAbout {
      id
      Seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
      Intro
      WorkExperience
      Education
    }
  }
`;
