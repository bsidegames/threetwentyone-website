import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import StoreLink from "../components/StoreLink";
import Screenshot from "../components/Screenshot";
import Footer from "../components/Footer";
import Description from "../components/Description";
import Divider from "../components/Divider";
import Trailer from "../components/Trailer";


const Index = (props) => {
  const { data: { websiteData } } = props;

  return (
    <>
      <header className="header"></header>
      <main className="main">

        <Hero heroImg={websiteData.screenshots[0].path_full}>
          <div className="hero__heading">
            <h1>{websiteData.gameName}</h1>
          </div>
          {websiteData.movies && <Trailer trailer={websiteData.movies[0]} />}
        </Hero>
        <article className="content">
          <StoreLink appid={websiteData.appid}
                     packageid={websiteData.packageid}
                     gameName={websiteData.gameName} />
          <Divider />
          <Description description={websiteData.description} />
          <Divider />
          <Screenshot screenshots={websiteData.screenshots} />

        </article>
        <Divider />
        <Footer legalNotice={websiteData.legalNotice} supportInfo={websiteData.supportInfo} />
      </main>
    </>
  );
};
export const query = graphql`
{
  websiteData {
    appid
    gameName
    description
    packageid
    movies {
      highlight
      name
      thumbnail
      alternative_id
      webm {
        max
        alternative_480
      }
    }
    screenshots {
      alternative_id
      path_full
      path_thumbnail
    }
    supportInfo {
      email
      url
    }
    legalNotice
  }
}
`;
export default Index;