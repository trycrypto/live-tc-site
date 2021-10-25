import Head from "next/head";

const Seo = ({ title, description }) => (
  <Head>
    <title> {title ? `${title} | TryCrypto` : "TryCrypto"}</title>
    {["og:site_name", "og:title"].map((property) => (
      <meta key={property} property={property} content="TryCrypto" />
    ))}
    {["description", "og:description"].map((property) => (
      <meta
        key={property}
        name={property}
        content={
          description ||
          "TryCrypto is a community of women builders that uses decentralized technology to create a fairer, more just society."
        }
      />
    ))}
  </Head>
);

export default Seo;
