import MainBanner from "../visuals/Main-banner";

const Home = () => {
  return (
    <div className="relative">
      <main className="h-screen">
        <div className="mx-auto  max-w-screen-xl w-full pt-32 pb-20 md:text-center  lg:py-48 lg:text-left">
          <div className="px-2 lg:w-5/12 sm:px-8 ">
            <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
              <span className="block bg-clip-text text-transparent bg-yellow-bkg uppercase inline">
                Actions,
              </span>{" "}
              <br />
              <span className="block text-grey inline">More than words</span>
            </h1>
            <p className="mt-3 md:mx-auto text-lg text-grey-extralight sm:text-xl md:mt-5 md:max-w-2xl">
              TryCrypto is a community of women builders that uses decentralized
              technology to create a fairer, more just society.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 rounded-md shadow sm:mt-0 ">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-grey bg-yellow-bkg bg-cover md:py-4 md:text-lg md:px-10"
                >
                  Join Our Community
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto relative w-10/12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full lg:mt-20">
          <img
            className="absolute inset-0 w-10/12 object-cover"
            src="/images/equity.png"
            alt=""
          />
        </div>
      </main>
    </div>
    // <div className="flex relative h-screen max-w-screen-2xl mx-auto">
    /* <div className="flex justify-between items-center ">
        <div className="flex flex-col items-left mx-4 max-w-screen-2xl ">
          <h1 className="mt-1 block text-4xl tracking-tight font-bold sm:text-5xl xl:text-7xl">
            <span className="block bg-clip-text bg-yellow-bkg text-transparent uppercase ">
              Action,
            </span>
            <span className="block text-grey">More than Words</span>
          </h1>
          <p className=" block mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            TryCrypto is a community of women builders that uses decentralized
            technology to create a fairer, more just society.
          </p>
          <button
            type="submit"
            className="bg-yellow-bkg bg-cover px-10 py-4 rounded-md text-grey font-semibold text-large tracking-wide shadow-md"
          >
            Join our community
          </button>
        </div>
        <div className="relative">
          <img className=" w-8/12" src="/images/equity.png" />
        </div>
    //   </div> */
    // </div>
    // <div className="flex relative h-screen ">
    //   <main className="flex justify-center items-center max-w-screen m-auto">
    //     <div className="mt-32 lg:mt-0 lg:grid lg:grid-cols-12 lg:gap-5 items-center">
    //       <div className="pb-0 max-w-2xl sm:text-center md:max-w-lg md:mx-auto lg:col-span-6 lg:text-left lg:pb-32">
    //         <h1>
    //           <span className="mt-1 block text-4xl tracking-tight font-bold sm:text-5xl xl:text-7xl">
    //             <span className="block bg-clip-text bg-yellow-bkg text-transparent uppercase ">
    //               Action,
    //             </span>
    //             <span className="block text-grey">More than Words</span>
    //           </span>
    //         </h1>
    //         <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
    //           TryCrypto is a community of women builders that uses decentralized
    //           technology to create a fairer, more just society.
    //         </p>
    //         <div className="flex justify-center mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
    //           <button
    //             type="submit"
    //             className="uppercase mt-3 w-11/12 px-10 py-4 border border-transparent text-base font-medium rounded-md text-white bg-yellow-bkg bg-cover shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto md:m-0"
    //           >
    //             Join our community
    //           </button>
    //         </div>
    //       </div>
    //       <div className="relative sm:max-w-lg sm:mx-auto  lg:max-w-screen-xl lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
    //         <img className="w-full" src="/images/equity.png" />
    //       </div>
    //     </div>
    //   </main>
    // </div>
  );
};

export default Home;
