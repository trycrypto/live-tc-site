const CryptoQueens = () => {
  return (
    <div className="relative bg-cq-bkg bg-cover">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-screen-xl mx-auto py-20 md:py-40 ">
        <div className="w-full max-w-md mx-auto md:max-w-lg md:mx-8">
          <div className="lg:py-8  font-black  text-center md:text-left text-3xl sm:text-4xl lg:text-6xl">
            <h2 className="mt-2 md:text-left leading-tight bg-clip-text text-transparent bg-yellow-bkg ">
              {" "}
              CryptoQueens
            </h2>

            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-normal leading-relaxed text-grey-extralight">
              Celebrating the greatest women in Cryptography.
            </p>
            <a className="px-8 text-base tracking-wide cursor-pointer py-3 font-bold rounded-lg text-grey bg-yellow-bkg bg-cover   focus:shadow-outline focus:outline-none  mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0">
              Explore
            </a>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto md:max-w-3xl md:mx-0">
          <img
            className=" mx-auto w-10/12  object-cover md:w-8/12 flex-shrink-0 relative"
            src="/images/queens.png"
            alt=""
          />
        </div>
      </div>
    </div>
    // <div className="bg-cq-bkg bg-cover h-full">
    //   <div className="lg:max-w-screen-xl md:max-w-screen-md  mx-auto flex items-center text-white ">
    //     <div className="relative w-full my-auto py-32 flex flex-col-reverse justify-center items-center lg:flex-row ">
    //       <div className="relative lg:w-6/12 sm:px-8 text-center lg:text-left">
    //         <h1 className="text-4xl font-bold sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl ">
    //           <span className="block bg-clip-text text-transparent bg-yellow-bkg bg-cover mb-8">
    //             CryptoQueens
    //           </span>
    //         </h1>
    //         <p className="my-3 text-lg text-grey-extralight sm:text-xl md:text-lg md:my-5 md:max-w-2xl">
    //           Celebrating the greatest women in Cryptography.
    //         </p>
    //         <div className="mt-10">
    //           <div className="mt-3 rounded-md shadow  ">
    //             <a
    //               href="#"
    //               className="mx-auto lg:mx-0 w-9/12 lg:w-4/12 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-grey bg-yellow-bkg bg-cover md:py-2 md:text-lg md:px-10"
    //             >
    //               Explore
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mx-auto  lg:-inset-y-24 lg:right-8 lg:w-1/2 ">
    //         <img
    //           className=" w-10/12 mx-auto object-cover md:w-7/12 lg:w-9/12"
    //           src="/images/queens.png"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CryptoQueens;
