import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/react/outline";

const features = [
  {
    logo: "/images/nftyfile.png",
    name: "Nftyfile",
    description: "Simple, photo-based authentication for decentralized apps.",
    icon: CloudUploadIcon,
  },
  {
    logo: "/images/decentpage.png",
    name: "DecentPage",
    description:
      "Flexible NFT media packaging solution for end-users and devs.",
    icon: LockClosedIcon,
  },
  {
    logo: "/images/photokey.png",
    name: "PhotoKey",
    description: "Visual web-page authoring with decentralized storage.",
    icon: RefreshIcon,
  },
];
const Index = () => {
  return (
    <div className="relative bg-black py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <h2 className="text-3xl font-semibold tracking-wide text-white lg:text-5xl ">
          Current Projects
        </h2>
        <p className="mt-4 text-lg  text-grey-extralight ">
          We work on projects that make crypto more accessible.
        </p>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center ">
                      <img src={feature.logo} />
                    </span>
                  </div>
                  <h3 className="mt-3 md:mt-10 text-xl font-medium text-white uppercase ">
                    {feature.name}
                  </h3>
                  <p className="mt-3 mb-10 mx-auto text-base text-gray-500 w-11/12 lg:w-8/12">
                    {feature.description}
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

export default Index;
