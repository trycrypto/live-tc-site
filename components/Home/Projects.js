import Link from "next/link";
const PROJECTS = [
  // {
  //   logo: "/images/products/nftyfile.png",
  //   name: "Nftyfile",
  //   description: "Simple, photo-based authentication for decentralized apps.",
  // },
  {
    logo: "/images/products/xpNFT.png",
    name: "xpNFT",
    description:
      "Platform that enables NFT artists to design and mint experiential art NFTs.",
  },
  {
    logo: "/images/products/decentpage.png",
    name: "DECENTPAGE",
    description:
      "Flexible NFT media packaging solution for end-users and devs.",
  },
  {
    logo: "/images/products/photokey.png",
    name: "PHOTOKEY",
    description: "Visual web-page authoring with decentralized storage.",
  },
];
const Projects = () => {
  return (
    <div className="relative bg-black py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-white lg:text-6xl ">
          Current Projects
        </h2>
        <p className="mt-5 text-sm md:text-base lg:text-lg text-grey-dark font-thin tracking-wide ">
          We are currently working on these projects that make crypto more
          accessible. <br /> Crews for each project are forming soon. Join
          our&nbsp;
          <Link href="https://discord.gg/trycrypto" passHref>
            <a
              target="_blank"
              rel="norefferer"
              className="hover:text-yellow underline italic"
            >
              discord
            </a>
          </Link>
          &nbsp;to indicate your interest!
        </p>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 lg:grid-cols-3">
            {PROJECTS.map((item) => (
              <div key={item.name} className="pt-6">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center ">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-9/12 md:w-10/12 lg:w-full"
                      />
                    </span>
                  </div>
                  <h3 className="mt-2 md:mt-8 text-2xl font-semibold tracking-wide text-white  ">
                    {item.name}
                  </h3>
                  <p className="mt-3 mb-10 mx-auto text-sm md:text-base font-thin tracking-wide text-gray-500 w-11/12 lg:w-8/12">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
