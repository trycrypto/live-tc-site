/* This example requires Tailwind CSS v2.0+ */
const Partners = () => {
  return (
    <div className="bg-black py-20 ">
      <div className="flex flex-col md:flex-row justify-end  md:justify-between items-center max-w-screen-xl mx-auto">
        <div className="w-full max-w-md mx-auto md:max-w-0 md:mx-8 my-4">
          <h2 className="max-w-md mx-auto text-4xl font-light text-grey text-center lg:max-w-xl lg:text-left">
            Our
          </h2>
          <h2 className="max-w-md mx-auto text-4xl font-black text-grey text-center lg:max-w-xl lg:text-left">
            Partners
          </h2>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center space-y-14 md:space-y-0 md:flex-row  md:space-x-22 lg:space-x-36">
            <div className="mt-4  flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
              <img
                className="h-16"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
            <div className="mt-4 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
              <img
                className="h-16"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="mt-4 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
              <img
                className="h-16"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="Level"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
