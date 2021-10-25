/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Actions over words",
    description:
      'We prioritize action over analysis, and believe in "move fast and get results!”',
    icon: GlobeAltIcon,
  },
  {
    name: "Work for global economic equity",
    description:
      "We strive to bring economic equity for people everywhere, especially in developing countries.",
    icon: ScaleIcon,
  },
  {
    name: "High ethical and quality standards",
    description:
      "We aim for high quality in our work without making ethical compromises.",
    icon: LightningBoltIcon,
  },
  {
    name: "Empathy is paramount",
    description:
      "Empathy is the foundation on which we build our organization and our products.",
    icon: MailIcon,
  },
];

const Mission = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-screen-2xl  mx-auto py-40 px-4 sm:px-6 lg:px-8 ">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-yellow-bkg  md:text-4xl ">
              Our Core Mission
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 md:gap-y-20 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <p className="mb-10 text-2xl leading-6 font-medium text-white">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-bas text-grey-dark">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Mission;
