import Head from "next/head";
import Seo from "../components/Seo";
import Hero from "../components/Home/Hero";
import CryptoQueens from "../components/Home/CryptoQueens";
import Projects from "../components/Home/Projects";
import Mission from "../components/Home/Mission";
import Partners from "../components/Home/Partners";
// import Blogs from "../components/Blogs";
// import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <Hero />
      <CryptoQueens />
      <Projects />
      <Mission />
      <Partners />
    </>
  );
}
