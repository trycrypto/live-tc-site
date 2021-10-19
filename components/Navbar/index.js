import React, { useState } from "react";
export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="h-full w-full">
        {/* Code block starts */}
        <nav className=" xl:block hidden">
          <div className="mx-auto container px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <img
                  className="h-6 w-auto md:h-8"
                  src="/images/Logo.svg"
                  alt=""
                />
              </div>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-16 text-grey tracking-wide text-base space-x-4">
                  <a
                    href="javascript: void(0)"
                    className="flex px-5 items-center py-6 leading-5 hover:text-yellow focus:text-yellow border-b-4 border-transparent focus:border-yellow  transition duration-150 ease-in-out"
                  >
                    Home
                  </a>
                  <a
                    href="javascript: void(0)"
                    className="flex px-5 items-center py-6 leading-5 hover:text-yellow focus:text-yellow border-b-4 border-transparent focus:border-yellow  transition duration-150 ease-in-out"
                  >
                    CryptoQueens
                  </a>
                  <a
                    href="javascript: void(0)"
                    className="flex px-5 items-center py-6  leading-5  hover:text-yellow focus:text-yellow border-b-4 border-transparent focus:border-yellow transition duration-150 ease-in-out"
                  >
                    About
                  </a>
                  <a
                    href="javascript: void(0)"
                    className="flex px-5 items-center py-6 leading-5 hover:text-yellow focus:text-yellow border-b-4 border-transparent focus:border-yellow  transition duration-150 ease-in-out"
                  >
                    Blog
                  </a>
                  <a
                    href="javascript: void(0)"
                    className="flex px-5 items-center py-6 leading-5 hover:text-yellow focus:text-yellow border-b-4 border-transparent focus:border-yellow  transition duration-150 ease-in-out"
                  >
                    FAQ
                  </a>
                </div>
              </div>
              {/* Projects and Join Us  */}
              <div className="hidden xl:flex items-center">
                <div className="ml-6 relative">
                  <div
                    className="flex items-center relative"
                    onClick={() => setProfile(!profile)}
                  >
                    {profile && (
                      <ul className="p-2 z-10 w-44 bg-home-bkg bg-cover absolute rounded right-0 shadow top-0 mt-16 text-grey shadow-md tracking-wide space-y-5">
                        <li className="cursor-pointer  leading-3 tracking-normal py-2 hover:text-yellow focus:text-yellow focus:outline-none ml-2 pb-4 border-b-2 border-opacity-10">
                          NftyFile
                        </li>
                        <li className="cursor-pointer  leading-3 tracking-normal mt-2 py-2 hover:text-yellow focus:text-yellow focus:outline-none ml-2 pb-4 border-b-2 border-opacity-10">
                          PhotoKey
                        </li>
                        <li className="cursor-pointer  leading-3 tracking-normal mt-2 py-2 hover:text-yellow focus:text-yellow focus:outline-none ml-2 pb-4 ">
                          Decent Page
                        </li>
                      </ul>
                    )}
                    <div className="text-grey cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                      Projects
                    </div>
                    {/* Can be Chevron Icon */}
                    <div className="ml-2 text-grey">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative md:ml-6 my-2">
                  <button className="focus:outline-none bg-yellow-bkg  transition duration-150 ease-in-out bg-cover  hover:bg-grey rounded text-grey font-semibold tracking-wide px-5 py-2 text-sm">
                    Join Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-6 px-6 w-full flex xl:hidden justify-between items-center  fixed top-0 z-40">
            <div className="w-full">
              <img
                className="h-8 w-auto sm:h-8"
                src="./images/Logo.svg"
                alt=""
              />
            </div>
            <div className="flex items-center">
              <div className="relative mr-4 ">
                <button className="w-24 focus:outline-none bg-yellow-bkg transition duration-150 ease-in-out rounded-xl text-grey  px-5 py-2 text-sm font-semibold">
                  Join Us
                </button>
              </div>
              <div
                id="menu"
                className="text-grey"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-full z-40 fixed overflow-y-auto z-40 top-0 bg-home-bkg shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <img
                            className="h-8 w-auto sm:h-10"
                            src="./images/Logo.svg"
                            alt=""
                          />
                        </div>
                        <div
                          id="cross"
                          className="text-grey ml-6"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m text-grey ">
                      <a className="cursor-pointer">
                        <li className=" pt-10">
                          <p className="xl:text-base text-base ml-3">Home</p>
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="pt-8">
                          <p className=" xl:text-base  text-base ml-3">About</p>
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="pt-8">
                          <p className=" xl:text-base  text-base ml-3">
                            CryptoQueens
                          </p>
                        </li>
                      </a>
                      <li className="pt-8 cursor-pointer">
                        <p className=" xl:text-base text-base ml-3">Blog</p>
                      </li>
                      <div className=" relative pt-8">
                        <div
                          className="flex items-center  relative text-grey"
                          onClick={() => setProfile(!profile)}
                        >
                          {profile && (
                            <ul className="p-2 w-full bg-home-bkg bg-cover absolute rounded  shadow top-0 ml-2 mt-8 shadow-md space-y-4">
                              <li className="cursor-pointer  leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none ml-2">
                                NftyFile
                              </li>
                              <li className="cursor-pointer  leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center ml-2">
                                PhotoKey
                              </li>
                              <li className="cursor-pointer leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none ml-2">
                                Decent Page
                              </li>
                            </ul>
                          )}
                          <a className="cursor-pointer">
                            <li>
                              <p className=" xl:text-base  text-base ml-3">
                                Projects
                              </p>
                            </li>
                          </a>
                          {/* Can be Chevron Icon */}
                          <div className="ml-2  text-grey">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}
