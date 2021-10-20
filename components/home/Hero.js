const Home = () => {
  return (
    <main className="h-full">
      <div className="lg:max-w-screen-2xl md:max-w-screen-md mx-auto flex items-center text-white ">
        <div className="relative w-full my-auto py-32 flex flex-col-reverse justify-center items-center lg:flex-row ">
          <div className="relative ml-4 sm:px-8 text-center md:ml-0 lg:text-left w-11/12 lg:w-4/12">
            <h1 className="text-5xl tracking-tight font-bold   md:text-5xl lg:text-5xl xl:text-7xl">
              <span className="block bg-clip-text text-transparent bg-yellow-bkg uppercase inline">
                Actions,
              </span>{" "}
              <br />
              <span className="block text-grey inline">More than words</span>
            </h1>
            <p className="my-3 text-lg text-grey-extralight sm:text-xl md:mx-auto md:my-5 md:max-w-lg">
              TryCrypto is a community of women builders that uses decentralized
              technology to create a fairer, more just society.
            </p>
            <div className="mt-5">
              <div className="mt-2 rounded-md shadow  ">
                <a
                  href="#"
                  className="mx-auto w-9/12 lg:mx-0 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-grey bg-yellow-bkg bg-cover md:py-2 md:text-lg md:px-10"
                >
                  Join Our Community
                </a>
              </div>
            </div>
          </div>
          <div className=" lg:-inset-y-24 lg:right-8 lg:w-1/2 ">
            <img
              className=" mx-auto w-11/12  object-cover md:w-7/12 lg:w-11/12"
              src="/images/equity.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="relative mx-auto max-w-screen-2xl w-full pt-32 pb-20 md:text-center  lg:py-48 lg:text-left">
          <div className="px-2 lg:w-5/12 sm:px-8 ">
            <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
              <span className="block bg-clip-text text-transparent bg-yellow-bkg uppercase inline">
                Actions,
              </span>{" "}
              <br />
              <span className="block text-grey inline">More than words</span>
            </h1>
            <p className="mt-3 md:mx-auto text-lg text-grey-extralight sm:text-xl md:mt-5 md:max-w-3xl">
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
          <div className="mx-auto relative mt-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full lg:mt-20 ">
            <img
              className=" inset-0 w-11/12 mx-auto object-cover md:w-7/12 lg:w-11/12"
              src="/images/equity.png"
              alt=""
            />
          </div>
        </div> */}
    </main>
  );
};

export default Home;
