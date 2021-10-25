import { MAIN, SOCIALS } from "./consts";

const Footer = () => {
  return (
    <footer className="relative bg-footer bg-cover ">
      <div className="flex flex-col max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <img className="h-6 w-auto md:h-8" src="/images/Logo.svg" alt="" />
        <nav className="my-4 flex flex-wrap justify-center" aria-label="Footer">
          {MAIN.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-grey-extralight hover:text-yellow-200"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className=" flex justify-center space-x-6">
          {SOCIALS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-grey-extralight hover:text-yellow-200"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-grey-extralight">
          &copy; {new Date().getFullYear()} TryCrypto, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
