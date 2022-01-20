/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Actions over words',
    description:
      'We prioritize action over analysis, and believe in "move fast and get results!”',
    icon: '/images/home/actions.svg',
  },
  {
    name: 'Work for global economic equity',
    description:
      'We strive to bring economic equity for people everywhere, especially in developing countries.',
    icon: '/images/home/equity.svg',
  },
  {
    name: 'High ethical and quality standards',
    description:
      'We aim for high quality in our work without making ethical compromises.',
    icon: '/images/home/ethics.svg',
  },
  {
    name: 'Empathy is paramount',
    description:
      'Empathy is the foundation on which we build our organization and our products.',
    icon: '/images/home/empathy.svg',
  },
]

const Mission = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-screen-xl  mx-auto py-32 px-8   ">
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-extrabold tracking-tight text-white  md:text-4xl ">
              Our Core Mission
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 md:gap-y-20 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="items-center justify-center h-12 w-12 ">
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className="h-8 w-8"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mb-6 text-2xl  font-bold bg-clip-text text-transparent bg-yellow-bkg">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mb-24 md:mb-10 text-base text-grey-dark">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Mission
