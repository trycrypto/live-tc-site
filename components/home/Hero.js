const Home = () => {
  return (
    <main className="relative">
      <div className="flex flex-col-reverse md:flex-row justify-between max-w-screen-xl mx-auto pt-32 pb-10 md:pb-0 ">
        <div className="w-full max-w-md mx-auto md:max-w-lg md:mx-8">
          <div className="lg:py-8  font-black  text-center md:text-left text-4xl md:text-5xl lg:text-7xl">
            <h2 className="mt-2 md:text-left leading-tight bg-clip-text text-transparent bg-yellow-bkg uppercase">
              {" "}
              Actions,
            </h2>
            <h2
              className="mt-1 md:text-left leading-tight text-grey
            "
            >
              More than words
            </h2>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-normal leading-relaxed text-grey-extralight">
              TryCrypto is a community of women builders that uses decentralized
              technology to create a fairer, more just society.
            </p>
            <a className="px-8 text-base tracking-wide cursor-pointer py-3 font-bold rounded-lg text-grey bg-yellow-bkg bg-cover   focus:shadow-outline focus:outline-none  mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0">
              Join Our Community
            </a>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto md:max-w-3xl md:mx-0">
          <img
            className=" mx-auto w-10/12  object-cover md:w-11/12 flex-shrink-0 relative"
            src="/images/equity.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
