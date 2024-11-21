import React from 'react';

const games = [
  {
    title: 'Elden Ring',
    description: 'An open-world action RPG set in the dark fantasy world of the "Lands Between," where players embark on a journey to repair the shattered Elden Ring and become the Elden Lord, guided by mysterious forces.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_cspEzfgMdenwt0VS7QHBJCOdWaVkrXyvA&s'
  },
  {
    title: 'The Legend of Zelda: Breath of the Wild',
    description: 'An open-world adventure game where you explore the vast kingdom of Hyrule, solve puzzles, and battle enemies.',
    image: 'https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg'
  },
  {
    title: 'Call of Duty: Black Ops 6',
    description: 'A fan-made or future title in the Black Ops series. Stay tuned for the latest installment in the Call of Duty franchise!',
    image: 'https://movieauditions.in/wp-content/uploads/2024/10/image-1716.png' 
  },
  {
    title: 'Diablo IV',
    description: 'The highly anticipated fourth entry in the *Diablo* series, where players explore the dark and gothic world of Sanctuary, battling against the forces of Hell and the demoness, Lilith, in an open-world action RPG with intense combat and immersive storytelling.',
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2344520/capsule_616x353.jpg?t=1728494275'
  },
  {
    title: 'Horizon Forbidden West DLC',
    description: 'A new chapter in Aloy’s journey with more open-world exploration and robotic enemies to defeat.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*OY9KgTy-s6rLmxZh.jpg'
  },
  {
    title: 'Super Mario Odyssey',
    description: 'A 3D platformer where Mario embarks on a journey to save Princess Peach from Bowser, exploring varied kingdoms and collecting Power Moons.',
    image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5'
  },
  {
    title: 'The Last of Us Part II',
    description: 'A post-apocalyptic action-adventure game that follows Ellie as she navigates a world ravaged by a deadly virus, dealing with loss, revenge, and survival.',
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/da083fa5e19458dd750aa8a6ea30ba10bac6f87074693df5.jpg'
  },
  {
    title: 'God of War (2018)',
    description: 'A narrative-driven action game following Kratos, a former Greek god, as he embarks on a journey with his son in Norse mythology.',
    image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg'
  },
  {
    title: 'God of War: Ragnarok DLC',
    description: 'Following Kratos’ journey in the Nine Realms, this DLC adds new quests, realms, and deeper lore.',
    image: 'https://blog.playstation.com/tachyon/2023/12/56935f822f365f2cae0282333bf9f2e60dcb4211.jpg'
  },
  {
    title: 'Black Myth: Wukong',
    description: 'An upcoming action role-playing game based on the classic Chinese novel *Journey to the West*. You play as the legendary Monkey King, Sun Wukong, using his powers to battle mythical creatures and gods in a vast, visually stunning world.',
    image: 'https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jz9yr.jpg'
  },
  {
    title: 'Tom Clancy\'s The Division 2',
    description: 'A tactical third-person shooter set in a post-apocalyptic Washington D.C. where players work as Division agents to restore order and fight against various hostile factions.',
    image: 'https://i.ytimg.com/vi/fpaCrGwCtz4/maxresdefault.jpg'
  },
  {
    title: 'Street Fighter 6',
    description: 'The next chapter in the legendary fighting game series, bringing new fighters, modes, and improved mechanics.',
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/1408/l3bg7nmfPpPzam5jOVlaUFww.jpg'
  },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero section with full-width image */}
      <section className="relative w-full h-[500px]">
        <img
          src="https://img.freepik.com/free-photo/futuristic-video-game-equipment-illuminated-nightclub-generative-ai_188544-32105.jpg"
          className="w-full h-full object-cover"
        />
        {/* Hero content */}
        <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Welcome to the World of Games</h1>
        </div>
      </section>
      
     
      {/* Featured Games section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Featured Games</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamically render game cards */}
            {games.map((game, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden">
                {/* Image filling the entire card */}
                <div className="relative h-64 w-full mb-4">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="absolute inset-0 w-full h-full object-cover"  
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-100">{game.title}</h4>
                <p className="text-gray-400">{game.description}</p>
                <a
                  href={game.link || "#"}  
                  className="text-blue-500 hover:text-blue-600 mt-4 inline-block"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* About Games section */}
       <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">About Games</h3>
          <p className="text-xl mb-8">
            Video games have evolved into a dynamic and immersive form of entertainment, offering players vast worlds to explore, challenging gameplay, and compelling stories.
          </p>
          <p className="text-lg">
            From action-packed adventures to relaxing sandbox experiences, there’s a game for everyone. This site is dedicated to celebrating all kinds of video games, from the classics to the latest releases.
          </p>
        </div>
      </section>


      {/* Join the Gaming Community section */}
      <section className="py-12 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-4">Join the Gaming Community</h3>
          <p className="text-xl mb-6">Stay up-to-date with the latest news, game releases, and exciting updates across all genres of gaming!</p>
          <a
            href="/subscribe"
            className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 All Games Fan Site. All rights reserved.</p>
          <div className="mt-4">
            <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
            <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;


