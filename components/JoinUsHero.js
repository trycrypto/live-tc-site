import Link from "next/link";
const FEATURES = [
  {
    name: "Design",
    description: "Making things look  and feel good is your vibe.",
  },
  { name: "Engineering", description: "You code wrangler, you!" },
  { name: "Community", description: "Is there even life outside of Discord?" },
  { name: "Product", description: "Is that your best feature?" },
  { name: "Marketing", description: "280 characters is all you need." },
  { name: "Operations", description: "You’re such a smooth operator." },
];

const JoinUsHero = () => {
  return (
    <div className="flex justify-center max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12">
      <div className="relative py-20 lg:pt-10 lg:pb-28">
        <div className="relative flex flex-col md:flex-row justify-between  text-left mx-auto py-10  sm:pt-16 sm:pb-2 ">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white lg:text-4xl ">
              How to
            </h1>
            <h1 className="mt-2 font-black text-4xl leading-tight bg-clip-text text-transparent bg-yellow-bkg uppercase md:text-4xl lg:text-5xl">
              Contribute
            </h1>
          </div>
        </div>

        <div className="mt-5 flex flex-col md:flex-row text-lg md:text-lg  justify-between  text-grey-extralight mx-auto">
          <p>
            We are currently ramping up our crews in the areas below. <br />
            If you are interested in a leadership role, click “Sign Up” and{" "}
            <br />
            complete the application now.
            <br />
            <br />
            If you are interested in other roles, apply{" "}
            <Link href="" passHref>
              <a className="hover:text-yellow underline italic">here</a>
            </Link>
            .
          </p>
          <div className=" flex flex-col justify-center  space-y-4">
            <div className="inline-flex ">
              <a
                href="https://ly3v2je88v5.typeform.com/to/CR6M3SJD"
                className="inline-flex items-center justify-center px-8 py-3 w-52 border border-transparent text-base font-semibold rounded-md text-white bg-button bg-cover "
              >
                Sign Up
              </a>
            </div>
            <div className=" inline-flex">
              <a
                href="https://discord.gg/trycrypto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3  w-52 border border-grey-extralight text-base font-medium rounded-md text-grey-extralight hover:text-yellow"
              >
                Join Our Discord
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-md px-4 md:px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-screen-2xl">
          <div className="mt-12 ">
            <h3 className="bg-clip-text text-transparent bg-yellow-bkg text-4xl my-12 font-bold">
              Crew
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ name, description }) => (
                <div key={name} className="px-4 lg:px-1 xl:px-0">
                  <div className="relative">
                    <img src="/images/border.svg" className="" />
                    <div className="absolute mx-auto flex justify-center items-center w-11/12 h-3/4 top-6 left-7 lg:w-10/12 lg:h-5/6 lg:left-9 xl:w-10/12 xl:left-14 xl:top-4 lg:top-4 text-black md:text-white hover:text-black  rounded-xl bg-yellow-light md:bg-grey-light hover:bg-yellow-light">
                      <div className=" px-8 text-center tracking-wide ">
                        <h3 className="text-lg font-bold mb-2">{name}</h3>
                        <p className=" font-thin">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsHero;
