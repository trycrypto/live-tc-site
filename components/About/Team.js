/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'Aimara Garcia',
    emoji: '🐶 📝',
    image: '/images/team/Aimara.png',
    twitterUrl: 'https://twitter.com/NemerieGarcia',
    pos: 'Community Manager',
  },
  // {
  //   name: 'Angelica Turla',
  //   emoji: '💻 🌱',
  //   image: '/images/team/Gel.png',
  //   twitterUrl: 'https://twitter.com/gxlica',
  //   pos:
  //     'To build a more equitable world - where boundless opportunities are accessible to everyone.',
  // },

  {
    name: 'Dayana Yankulova',
    emoji: '🦄 🤸‍♀️',
    image: '/images/team/Dayana.png',
    twitterUrl: 'https://twitter.com/DayanaYankulova',
    pos: 'Community Lead',
  },
  // {
  //   name: "Megan Conard",
  //   emoji: "🐶 ⛷",
  //   image: "/images/team/Megan.png",
  //   twitterUrl: "https://twitter.com/Megan_Conard",
  //   pos:
  //     "I believe that crypto technologies can change the world, but only when women and minorities get a seat at the table.  TryCrypto's equality focus drives me toward finding new ways that crypto can do good in the world",
  // },
  {
    name: 'Mariana Rodrigues',
    emoji: '🏋🏻‍♀️🍓',
    image: '/images/team/mariana.jpg',
    twitterUrl: 'https://twitter.com/mari__0x',
    pos: 'Product & Community Lead',
  },

  {
    name: 'Mirna Maria',
    emoji: '🐶 ✨',
    image: '/images/team/Mirna.png',
    twitterUrl: 'https://twitter.com/ArtsyBolivian',
    pos: 'Marketing Lead',
  },
  {
    name: 'Nicole Prada',
    emoji: '🤠✨',
    image: '/images/team/nicole.jpeg',
    twitterUrl: 'https://twitter.com/Octopape',
    pos: 'Marketing & Community Lead',
  },
  // {
  //   name: 'Niharika Singh',
  //   emoji: '⛰️ 👩‍💻',
  //   image: '/images/team/Niharika.png',
  //   twitterUrl: 'https://twitter.com/YourETHGirl',
  //   pos: 'I want to see the world try crypto.',
  // },
  {
    name: 'Radhika Lal',
    emoji: '🐾 🎹',
    image: '/images/team/Radhika.png',
    twitterUrl: 'https://twitter.com/radhika_lal_',
    pos: 'Design Lead',
  },
  // More people...
]

const Team = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl text-grey font-bold tracking-wide sm:text-4xl">
              Core Crew
            </h2>
            <p className="text-base md:text-lg+ text-gray-500 ">
              We work on projects that make crypto more accessible.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-24 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <img
                    className="mx-auto h-40 w-40 rounded-md xl:w-56 xl:h-56 object-cover"
                    src={person.image}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-lg text-white leading-6 font-medium tracking-wider space-y-1">
                      <h3>{person.name}</h3>
                      <span className="flex justify-center items-center">
                        <a
                          href={person.twitterUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-6 h-6 mr-2"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <p className="text-indigo-600 text-xl">
                          {person.emoji}
                        </p>
                      </span>
                    </div>

                    <p className="text-sm px-4 md:px-14 lg:px-0 font-thin tracking-wide text-grey-dark">
                      {person.pos}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Team
