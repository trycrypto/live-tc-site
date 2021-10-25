import { useState } from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Section1 = () => (
  <div className="py-4 lg:py-2 font-black text-center md:text-left text-4xl md:text-5xl lg:text-6xl">
    <h2 className="mt-4 leading-tight text-grey">A Community</h2>
    <span className="mt-1 flex justify-center md:justify-start leading-tight text-grey">
      of&nbsp;
      <h2 className="bg-clip-text text-transparent bg-yellow-bkg">builders.</h2>
    </span>
    <p className="mt-6 px-9 sm:px-0 text-center font-thin tracking-wider md:text-left text-sm sm:text-base md:text-base  font-normal leading-relaxed text-grey-extralight">
      We are a community of builders who believes that decentralized technology
      has the potential to fundamentally transform people's lives for the better
      and create a fairer, more just society.
    </p>
  </div>
);

const Section2 = () => (
  <div className="py-4 lg:py-2 font-extrabold text-center md:text-left text-4xl md:text-5xl lg:text-6xl ">
    <h2 className="mt-4 bg-clip-text text-transparent bg-yellow-bkg uppercase">
      Female
    </h2>
    <h2 className="mt-1 leading-tight text-grey uppercase">Focused.</h2>

    <p className="mt-6 px-9 sm:px-0 text-center font-thin tracking-wider md:text-left text-sm sm:text-base md:text-base  font-normal leading-relaxed text-grey-extralight">
      Our community is open to all, but we endeavor to make crypto more
      gender-balanced so our team priority is women.
    </p>
  </div>
);
const Section3 = () => (
  <div className="py-4 lg:py-2 font-black text-center md:text-left text-4xl md:text-5xl lg:text-6xl">
    <h2 className="mt-4 leading-tight text-grey">Taking decentralized</h2>

    <h2 className="bg-clip-text text-transparent bg-yellow-bkg uppercase">
      mainstream.
    </h2>

    <p className="mt-6 px-9 sm:px-0 text-center font-thin tracking-wider md:text-left text-sm sm:text-base md:text-base  font-normal leading-relaxed text-grey-extralight">
      As we work on solutions that make decentralized technology easier for
      mainstream users to experience, we are also committed to using
      decentralized technology in our everyday work.
    </p>
  </div>
);
const Section4 = () => (
  <div className="py-4 lg:py-2 font-black text-center md:text-left text-4xl md:text-5xl lg:text-6xl">
    <h2 className="mt-4 leading-tight text-grey">Helping the</h2>
    <span className="mt-1 flex justify-center md:justify-start leading-tight text-grey">
      world&nbsp;
      <h2 className="bg-clip-text text-transparent bg-yellow-bkg ">
        TryCrypto
      </h2>
    </span>
    <p className="mt-6 px-9 sm:px-0 text-center font-thin tracking-wider md:text-left text-sm sm:text-base md:text-base  font-normal leading-relaxed text-grey-extralight">
      We are a community of builders who believes that decentralized technology
      has the potential to fundamentally transform people's lives for the better
      and create a fairer, more just society.
    </p>
  </div>
);

const SECTIONS = [Section1, Section2, Section3, Section4];

const Header = () => {
  const [activeSection, setActiveSection] = useState(0);

  const nextSection = () => {
    if (activeSection === SECTIONS.length - 1) {
      setActiveSection(0);
    } else {
      setActiveSection(activeSection + 1);
    }
  };

  return (
    <div className="relative bg-home-bkg bg-cover ">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center h-screen">
        <div className="w-full max-w-md mx-auto md:max-w-lg md:mx-8">
          {SECTIONS[activeSection]()}
        </div>
        <div className="w-full max-w-md mx-auto md:max-w-3xl md:mx-0">
          <div className="relative">
            <img
              className="mx-auto w-10/12  object-cover md:w-10/12 lg:w-8/12 flex-shrink-0 relative"
              src="/images/about/Females.png"
              alt="TryCrypto Equity"
            />

            <img
              className="cursor-pointer absolute w-[25%] md:w-[22%] lg:w-[20%]  bottom-0  right-2 md:right-10 lg:right-20"
              src="/images/about/Next.png"
              alt="Go next"
              onClick={nextSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
