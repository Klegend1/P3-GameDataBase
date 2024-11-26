import React from "react";

const games = [
  {
    title: "Spider-Man 2",
    description:
      "The next installment in the Spider-Man franchise, where players control both Peter Parker and Miles Morales...",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202306/1301/0357d5697ac91c4a9a6493eb0d02654006e417b4e0dbb351.png",
    releaseYear: 2023,
    rating: 9.4,
    platforms: ["PlayStation 5"],
  },
  {
    title: "Dead Space Remake",
    description:
      "A next-gen remake of the classic survival horror game, with enhanced visuals, sound, and gameplay mechanics...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktT8a8cUnF-z6_pEynuRlGhNYtNnuU71H1A&s",
    releaseYear: 2023,
    rating: 9.3,
    platforms: ["PlayStation 5", "Xbox Series X/S", "PC"],
  },
  {
    title: "Cyberpunk 2077: Phantom Liberty",
    description:
      "A major expansion to Cyberpunk 2077, introducing a new storyline, location, and characters while improving the base game’s mechanics.",
    image:
      "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2138330/capsule_616x353.jpg?t=1730212614",
    releaseYear: 2023,
    rating: 8.7,
    platforms: ["PlayStation 5", "Xbox Series X/S", "PC"],
  },
  {
    title: "Star Wars Jedi: Survivor",
    description:
      "A sequel to Star Wars Jedi: Fallen Order, continuing the story of Cal Kestis as he battles the Empire and uncovers new secrets of the Force.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202304/2814/24a5bc14faa8f69c74a9a8d7b729509841a1c9046bc9a7f3.png?w=440",
    releaseYear: 2023,
    rating: 9.0,
    platforms: ["PlayStation 5", "Xbox Series X/S", "PC"],
  },
  {
    title: "Elden Ring",
    description:
      'An open-world action RPG set in the dark fantasy world of the "Lands Between," where players embark on a journey to repair the shattered Elden Ring and become the Elden Lord, guided by mysterious forces.',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_cspEzfgMdenwt0VS7QHBJCOdWaVkrXyvA&s",
    releaseYear: 2022,
    rating: 9.5,
    platforms: ["PlayStation 4", "PlayStation 5", "Xbox Series X/S", "PC"],
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "An open-world adventure game where you explore the vast kingdom of Hyrule, solve puzzles, and battle enemies.",
    image:
      "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
    releaseYear: 2017,
    rating: 10,
    platforms: ["Nintendo Switch", "Wii U"],
  },
  {
    title: "Call of Duty: Black Ops 6",
    description:
      "A fan-made or future title in the Black Ops series. Stay tuned for the latest installment in the Call of Duty franchise!",
    image:
      "https://movieauditions.in/wp-content/uploads/2024/10/image-1716.png",
    releaseYear: 2024,
    rating: 8.5,
    platforms: ["PlayStation 5", "Xbox Series X/S", "PC"],
  },
  {
    title: "Resident Evil Village DLC: Shadows of Rose",
    description:
      "A new expansion for Resident Evil Village, following Ethan’s daughter, Rosemary, as she explores the dark corners of the story’s world.",
    image:
      "https://assets-prd.ignimgs.com/2022/06/14/resident-evil-village-shadows-of-rose-dlc-button-1-1655250123777.jpg",
    releaseYear: 2023,
    rating: 8.9,
    platforms: ["PlayStation 5", "Xbox Series X/S", "PC"],
  },
  {
    title: "Horizon Forbidden West DLC",
    description:
      "A new chapter in Aloy’s journey with more open-world exploration and robotic enemies to defeat.",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*OY9KgTy-s6rLmxZh.jpg",
    releaseYear: 2024,
    rating: 8.8,
    platforms: ["PlayStation 5"],
  },
  {
    title: "Super Mario Odyssey",
    description:
      "A 3D platformer where Mario embarks on a journey to save Princess Peach from Bowser, exploring varied kingdoms and collecting Power Moons.",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
    releaseYear: 2017,
    rating: 9.7,
    platforms: ["Nintendo Switch"],
  },
  {
    title: "The Last of Us Part II",
    description:
      "A post-apocalyptic action-adventure game that follows Ellie as she navigates a world ravaged by a deadly virus, dealing with loss, revenge, and survival.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/da083fa5e19458dd750aa8a6ea30ba10bac6f87074693df5.jpg",
    releaseYear: 2020,
    rating: 9.5,
    platforms: ["PlayStation 4"],
  },
  {
    title: "God of War (2018)",
    description:
      "A narrative-driven action game following Kratos, a former Greek god, as he embarks on a journey with his son in Norse mythology.",
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg",
    releaseYear: 2018,
    rating: 9.8,
    platforms: ["PlayStation 4", "PC"],
  },
  {
    title: "God of War: Ragnarok DLC",
    description:
      "Following Kratos’ journey in the Nine Realms, this DLC adds new quests, realms, and deeper lore.",
    image:
      "https://blog.playstation.com/tachyon/2023/12/56935f822f365f2cae0282333bf9f2e60dcb4211.jpg",
    releaseYear: 2023,
    rating: 9.6,
    platforms: ["PlayStation 5"],
  },
  {
    title: "Black Myth: Wukong",
    description:
      "An upcoming action role-playing game based on the classic Chinese novel Journey to the West. You play as the legendary Monkey King, Sun Wukong, using his powers to battle mythical creatures.",
    image:
      "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jz9yr.jpg",
    releaseYear: 2024,
    rating: null,
    platforms: ["PlayStation 5", "Xbox Series X/S", "PC"],
  },
  {
    title: "Tom Clancy's The Division 2",
    description:
      "A tactical third-person shooter set in a post-apocalyptic Washington D.C. where players work as Division agents to restore order.",
    image: "https://i.ytimg.com/vi/fpaCrGwCtz4/maxresdefault.jpg",
    releaseYear: 2019,
    rating: 8.3,
    platforms: ["PlayStation 4", "Xbox One", "PC"],
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="relative w-full h-[500px]">
        <img
          src="https://img.freepik.com/free-photo/futuristic-video-game-equipment-illuminated-nightclub-generative-ai_188544-32105.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl hover:text-blue-400 transition duration-300">
            Welcome to the World of Games
          </h1>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300">
            Featured Games
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64 w-full mb-4">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-xl sm:text-2xl font-semibold text-gray-100 hover:text-blue-400 transition duration-300">
                  {game.title}
                </h4>
                <p className="text-gray-400">{game.description}</p>

                <div className="mt-4 text-gray-300">
                  <p>
                    <strong>Release Year:</strong> {game.releaseYear}
                  </p>
                  <p>
                    <strong>Rating:</strong>{" "}
                    {game.rating ? game.rating : "Not Rated"}
                  </p>
                  <p>
                    <strong>Platforms:</strong> {game.platforms.join(", ")}
                  </p>
                </div>

                <a
                  href={game.link || "#"}
                  className="text-blue-500 hover:text-blue-600 mt-4 inline-block transition duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300">
            About Games
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Video games have evolved into a dynamic and immersive form of
            entertainment, offering players vast worlds to explore, challenging
            gameplay, and compelling stories.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            From action-packed adventures to relaxing sandbox experiences,
            there’s a game for everyone. This site is dedicated to celebrating
            all kinds of video games, from the classics to the latest releases.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 hover:text-blue-400 transition duration-300">
            Join the Gaming Community
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            Stay up-to-date with the latest news, game releases, and exciting
            updates across all genres of gaming!
          </p>
          <a
            href="/subscribe"
            className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-center text-white py-8">
      <div className="container mx-auto px-6">
        <p className="text-sm text-gray-400">
          &copy; 2024 Fan Site. All rights reserved.
        </p>

        <div className="mt-4">
          <a
            href="/about"
            className="text-gray-400 hover:text-white mx-4 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white mx-4 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-400 hover:text-white mx-4 transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>

        <div className="mt-6">
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:text-white mx-3 transition-colors duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white mx-3 transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-400 hover:text-white mx-3 transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Home;
