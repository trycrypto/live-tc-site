const CryptoQueens = () => {
  return (
    <div className="bg-cq-bkg bg-cover h-full">
      <div className="lg:max-w-screen-xl md:max-w-screen-md  mx-auto flex items-center text-white ">
        <div className="relative w-full my-auto py-32 flex flex-col-reverse justify-center items-center lg:flex-row ">
          <div className="relative lg:w-6/12 sm:px-8 text-center lg:text-left">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl ">
              <span className="block bg-clip-text text-transparent bg-yellow-bkg bg-cover mb-8">
                CryptoQueens
              </span>
            </h1>
            <p className="my-3 text-lg text-grey-extralight sm:text-xl md:text-lg md:my-5 md:max-w-2xl">
              Celebrating the greatest women in Cryptography.
            </p>
            <div className="mt-10">
              <div className="mt-3 rounded-md shadow  ">
                <a
                  href="#"
                  className="mx-auto lg:mx-0 w-9/12 lg:w-4/12 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-grey bg-yellow-bkg bg-cover md:py-2 md:text-lg md:px-10"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto  lg:-inset-y-24 lg:right-8 lg:w-1/2 ">
            <img
              className=" w-10/12 mx-auto object-cover md:w-7/12 lg:w-9/12"
              src="/images/queens.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoQueens;
