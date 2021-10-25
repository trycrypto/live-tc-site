import Link from "next/link";
const CryptoQueens = () => {
  return (
    <div className="relative bg-cq-bkg bg-cover px-4 md:px-0">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-screen-xl mx-auto py-20 md:py-40 ">
        <div className="w-full max-w-md mx-auto md:max-w-xl md:mx-8">
          <div className="lg:py-8 font-black flex-col justify-center items-center text-center md:text-left">
            <h2 className="mt-2 mx-auto md:mx-0  text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight bg-clip-text text-transparent bg-yellow-bkg ">
              {" "}
              CryptoQueens
            </h2>

            <p className="mt-4 text-sm md:text-base md:max-w-md lg:text-lg leading-relaxed tracking-wider text-grey-extralight font-thin">
              Celebrating the greatest women in Cryptography. Join our{" "}
              <Link href="https://discord.gg/trycrypto" passHref>
                <a
                  target="_blank"
                  rel="norefferer"
                  className="hover:text-yellow underline "
                >
                  discord
                </a>
              </Link>{" "}
              to learn more about whitelisting for our upcoming NFT collectible
              drop.
            </p>
            {/* <a className="px-8 py-3  tracking-wide cursor-pointer  font-bold rounded-lg text-grey bg-yellow-bkg bg-cover   focus:shadow-outline focus:outline-none  mt-8 md:mt-8 text-sm inline-block  md:mx-0">
              Learn More
            </a> */}
          </div>
        </div>
        <div className="w-full max-w-md mx-auto md:max-w-3xl md:mx-0">
          <img
            className="mx-auto w-10/12 object-cover md:w-8/12 flex-shrink-0 relative "
            src="/images/home/queens.png"
            alt="CryptoQueens"
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoQueens;
