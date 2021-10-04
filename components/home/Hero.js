import MainBanner from "../visuals/Main-banner";
export default function Example() {
  return (
    <div className="relative pt-6 pb-12 px-15 sm:pb-12 lg:pb-10">
      <main className="mt-16 mx-auto max-w-screen-2xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-7xl">
                <span className="block text-gray-900">Data to enrich your</span>
                <span className="block text-indigo-600">online business</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua ad ad non deserunt sunt.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <button
                type="submit"
                className="uppercase mt-3 w-full px-10 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto md:m-0"
              >
                Join our community
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <MainBanner className="w-full" />
          </div>
        </div>
      </main>
    </div>
  );
}
