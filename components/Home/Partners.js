const PARTNERS = [
  {
    name: "Bloom",
    logo: "images/partners/Bloom.png",
  },
  {
    name: "Decentology",
    logo: "images/partners/Decentology.svg",
  },
  // {
  //   name: "Fame Lady Squad",
  //   logo: "",
  // },
];
const Partners = () => {
  return (
    <div className="bg-black pb-10">
      <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6 md:py-14 lg:py-20 lg:px-8">
        <p className="text-3xl text-center font-semibold tracking-wide text-grey-extralight md:text-4xl ">
          Our Partners
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:mt-8">
          {PARTNERS.map((item) => (
            <div className="col-span-1 flex justify-center py-6 opacity-80">
              <img
                className="max-h-12 md:max-h-16"
                src={item.logo}
                alt="Workcation"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
