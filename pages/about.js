import Seo from "../components/Seo";
import Header from "../components/About/Header";
import WhatHero from "../components/About/WhatHero";
import MissionHero from "../components/About/MissionHero";
import Team from "../components/About/Team";
import CTA from "../components/About/CTA";

const About = () => (
  <>
    <Seo title="About" />
    <Header />
    <Team />
    {/* <WhatHero />
    <MissionHero />
    <Team />
    <CTA /> */}
  </>
);

export default About;
