import React from "react";
import Hero from "../components/Hero";
import StoreLink from "../components/StoreLink";
import Screenshot from "../components/Screenshot";
import Footer from "../components/Footer";
import Description from "../components/Description";
import Divider from "../components/Divider";
import Trailer from "../components/Trailer";
import response from "../../example-data";

const Index = () => {
  const data = response.gamePage;

  return (
    <main className="main">

      <Hero heroImg={data.screenshots[0].path_full}>
        <div className="hero__heading">
          <h1 >{data.gameName}</h1>
        </div>
        <Trailer trailer={data.movies[0]} />
      </Hero>
      <article className="content">
        <StoreLink appid={data.appid} packageid={data.packageid} gameName={data.gameName} />
        <Divider />
        <Description description={data.description} />
        <Divider />
        <Screenshot screenshots={data.screenshots} />

      </article>
      <Divider />
      <Footer legalNotice={data.legalNotice} supportInfo={data.supportInfo} />
    </main>
  );
};
export default Index;