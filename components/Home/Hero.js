import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="bg-home-bkg bg-cover relative px-3 md:px-0 h-full">
      <div className="flex flex-col-reverse md:flex-row justify-between max-w-screen-lg lg:max-w-screen-xl mx-auto pt-32 pb-10 md:pb-0 ">
        <div className="w-full max-w-lg mx-auto md:max-w-xl md:mx-8">
          <div className="lg:py-8  font-black  text-center md:text-left text-4xl md:text-5xl xl:text-6xl">
            <h2 className="mt-2 md:text-left leading-tight bg-clip-text text-transparent bg-yellow-bkg bg-cover">
              TryCrypto
            </h2>
            <h2 className="mt-1 md:text-left leading-tight text-grey">
              for an equitable world
            </h2>
            <p className="mt-4 text-center font-thin tracking-wider md:text-left text-sm md:text-lg  font-normal leading-relaxed text-grey-extralight">
              TryCrypto is a community of women builders that uses decentralized
              technology to create a fairer, more just society.
            </p>
            <Link href="/join-us" passHref>
              <a className="inline-block tracking-wide cursor-pointer font-bold rounded-lg text-grey bg-button bg-cover py-3 px-8 mt-8  text-sm  mx-auto md:mx-0">
                <span className="flex items-center">
                  Join Our Community{' '}
                  <ArrowNarrowRightIcon className="w-5 md:w-6 ml-2" />
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto md:max-w-3xl md:mx-0">
          <img
            className=" mx-auto w-10/12  object-cover md:w-11/12 flex-shrink-0 relative"
            src="/images/home/equity.png"
            alt="TryCrypto Equity"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
