import { useState } from "react";
import { MenuAlt4Icon, ChevronDownIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const MAIN_LINKS = [
  { name: "Home", href: "/" },
  { name: "Community", href: "/join-us" },
  { name: "About", href: "/about" },
];

const PROJECTS_LINKS = [
  { name: "NftyFile", href: "/nifty-file" },
  { name: "PhotoKey", href: "/photo-key" },
  { name: "DecentPage", href: "/decent-page" },
];

const Navbar = () => {
  const [show, setShow] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <>
      <div className="h-full w-full shadow-md">
        <nav className=" xl:block hidden">
          <div className="mx-auto container px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <Link href="/">
                  <img
                    className="h-6 w-auto md:h-8 cursor-pointer"
                    src="/images/Logo.svg"
                    alt=""
                  />
                </Link>
              </div>

              {/* Main Links */}
              <div className="flex">
                <div className="hidden xl:flex text-grey-extralight tracking-wider text-base space-x-6">
                  {MAIN_LINKS.map(({ href, name }) => (
                    <Link key={name} href={href} passHref>
                      <a className="flex px-5 items-center py-6 leading-5 hover:text-yellow focus:text-yellow border-b-4 border-transparent focus:border-yellow  transition duration-150 ease-in-out">
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Projects Dropdown */}
              <div className="hidden xl:flex items-center">
                <div className="relative">
                  <div
                    className="flex items-center relative"
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    {openDropdown && (
                      <ul className="p-2 z-10 w-44 bg-home-bkg bg-cover absolute rounded right-0 shadow top-0 mt-16 text-grey-extralight shadow-md tracking-wide space-y-5">
                        {PROJECTS_LINKS.map(({ name, href }) => (
                          <Link href={href} passHref>
                            <li className="cursor-pointer leading-3 tracking-normal py-2 hover:text-yellow focus:text-yellow focus:outline-none ml-2 pb-4 border-b-2 border-opacity-10">
                              {name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-center border-2 border-white-dark px-3 py-2 rounded-2xl cursor-pointer">
                      <div className="text-grey-extralight flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        Projects
                      </div>
                      {/* Can be Chevron Icon */}
                      <div className="ml-2 text-grey-extralight">
                        <ChevronDownIcon height={18} witdh={18} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative md:ml-6 my-2">
                  <Link href="/join-us" passHref>
                    <a className="focus:outline-none bg-yellow-bkg  transition duration-150 ease-in-out bg-cover  hover:bg-grey rounded text-grey font-semibold tracking-wide px-5 py-3 text-sm">
                      Join Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav>
          <div className="py-6 px-6 w-full flex xl:hidden justify-between items-center bg-black-light fixed top-0 z-40 shadow-md">
            <div className="w-full">
              <Link href="/">
                <img
                  className="h-6 w-auto md:h-8 cursor-pointer"
                  src="/images/Logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="relative mr-4">
                <Link href="/join-us" passHref>
                  <button className="w-24 focus:outline-none bg-yellow-bkg transition duration-150 ease-in-out rounded-xl text-grey  px-5 py-2 text-sm font-semibold">
                    Join Us
                  </button>
                </Link>
              </div>
              <div
                id="menu"
                className="text-grey cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <Link href="#nav">
                    <MenuAlt4Icon
                      className="icon icon-tabler icon-tabler-menu-2"
                      width={24}
                      height={24}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/*Mobile responsive sidebar*/}
          <div
            id="nav"
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40 transform translate-x-0"
                : "w-full xl:hidden h-full absolute z-40 transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-full z-40 fixed overflow-y-auto top-0 bg-home-bkg shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-8 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <Link href="/">
                            <img
                              className="h-6 w-auto md:h-8 cursor-pointer"
                              src="/images/Logo.svg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div
                          id="cross"
                          className="text-grey ml-6 cursor-pointer"
                          onClick={() => setShow(!show)}
                        >
                          <XIcon
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m text-grey ">
                      {MAIN_LINKS.map(({ href, name }) => (
                        <Link key={name} href={href} passHref>
                          <a>
                            <li className="pt-10">
                              <span className="font-thin tracking-wider text-base ml-3">
                                {name}
                              </span>
                            </li>
                          </a>
                        </Link>
                      ))}

                      {/* Dropdown */}
                      <div className=" relative pt-8">
                        <div
                          className="flex items-center relative text-grey"
                          onClick={() => setOpenDropdown(!openDropdown)}
                        >
                          {openDropdown && (
                            <ul className="p-2 w-full bg-home-bkg bg-cover absolute rounded shadow top-0 ml-2 mt-8 shadow-md space-y-4">
                              {PROJECTS_LINKS.map(({ name, href }) => (
                                <Link href={href} passHref>
                                  <li className="cursor-pointer  leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none ml-2">
                                    {name}
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          )}
                          <div className="flex items-center cursor-pointer">
                            <li>
                              <span className="xl:text-base text-base ml-3">
                                Projects
                              </span>
                            </li>
                            {/* Can be Chevron Icon */}
                            <div className="ml-2  text-grey">
                              <ChevronDownIcon height={18} witdh={18} />
                            </div>
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
      </div>
    </>
  );
};

export default Navbar;
