import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Join from "../components/Join";
import Newsletter from "../components/Newsletter";
const JoinUs = () => {
  return (
    <>
      <div className=" bg-home-bkg bg-cover">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Join />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default JoinUs;
