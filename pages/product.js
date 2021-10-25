import Seo from "../components/Seo";
import Link from "next/link";

const Hero = () => (
  <div className="relative bg-home-bkg bg-cover ">
    <div className="flex flex-col-reverse md:flex-row justify-center items-center h-screen">
      <div className="w-full max-w-md mx-auto md:max-w-lg md:mx-8 text-white">
        <h1 className="text-center md:text-left text-5xl md:text-6xl font-bold">
          <span className="text-yellow">Crypto</span>
          <br />
          Queens
        </h1>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          voluptatum molestias fuga cumque provident ipsum possimus quidem quia
          voluptas dolore perferendis, consequuntur, totam explicabo esse
          architecto minus veniam optio rem!
        </p>

        <div className="flex items-center mt-8">
          <Link href="/join-us" passHref>
            <a className="border-2 border-white-dark hover:text-white hover:border-white px-3 py-2 rounded-2xl cursor-pointer text-grey-extralight flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
              See Community
            </a>
          </Link>
          <a
            href="https://"
            className="ml-4 cursor-pointer hover:text-white text-grey-extralight flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full mt-28 md:mt-0 max-w-md mx-auto md:max-w-3xl md:mx-0">
        <img
          className="mx-auto w-3/4 object-cover md:w-10/12 lg:w-8/12 flex-shrink-0"
          src="/images/queens.png"
          alt="Crypto Queen"
        />
      </div>
    </div>
  </div>
);

const Product = () => (
  <>
    <Seo title="Crypto Queens" />
    <Hero />
  </>
);

export default Product;
