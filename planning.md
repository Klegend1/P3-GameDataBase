

Gaming is a huge part of modern entertainment, but with so many titles available across various platforms, it can be overwhelming to keep track of what's new or what's worth playing. GameDatabase was created to make game discovery easy and enjoyable. The app lets users:

Browse through featured and popular games.
View detailed information about each game (description, release year, rating, platforms).
Navigate easily between games using a clean and intuitive interface.

Objective!
The goal is to create a dynamic and user-friendly game database application where users can search for games, view a list of all available games, and access detailed information about each game. Users should be able to browse the database easily, filter games by various parameters, and get more information with a single click.

+----------------+      +----------------+      +----------------+     +----------------+       +-------------------+
|   HomePage     |      | FeaturedGame   |      |   Game         |     |   GameSearch    |      |   GameDetails     |
+----------------+      +----------------+      +----------------+     +----------------+       +-------------------+
| homepage_id    |<--+--| featured_game_id|<----| game_id        |<----| search_id      |       | game_details_id    |
| title          |      | game_id         |     | name           |     | search_term    |       | game_id            |
| description    |      | homepage_id     |     | description    |     | game_id        |       | system_requirements|
| created_at     |      | featured_at     |     | release_date   |     +----------------+       | gameplay_features  |
| updated_at     |      | reason          |     | background_img |                              | content_categories |
+----------------+      +----------------+      | is_featured    |                              | additional_info    |
      |                                         | average_rating |                              +-------------------+
      |                                         | created_at     |
      |                                         | updated_at     |
      |                                         +----------------+
      |
      v                              F U T U R E   P L A N N I N G
+----------------+       +----------------+     +----------------+     +----------------+  
|   GameList     |       |  Genre         |     |  Platform      |     |   Rating       |  
+----------------+       +----------------+     +----------------+     +----------------+  
| list_id        |       | genre_id       |     | platform_id    |     | rating_id      |  
| homepage_id    |       | name           |     | name           |     | user_id        |  
| game_id        |       | description    |     | release_date   |     | game_id        |  
| created_at     |       +----------------+     | created_at     |     | rating_value   |  
| updated_at     |                              | updated_at     |     | created_at     |  
+----------------+                              +----------------+     +----------------+


. HomePage
  As a user,
  I want to search for games by name, genre, etc
  So that I can easily find a game that interests me.

. Featured Game
   As a user, 
   I want to discover a highlighted game on the homepage with quick access to detailed information.

. Game List
   As a user,
   I want to view a list of all games in the database,
   So that I can browse through different games and choose the one I want to explore further.

. Game Search
   As a user,
   I want to search for games by title, genre, or release year,
   So that I can quickly find a specific game from the database.

. Game Details
   As a user,
   I want to see detailed information about a selected game,
   So that I can learn more about its plot, gameplay, system requirements, reviews, and ratings.

. Game name
. Description
. Release date
. Average rating
. Platforms available (e.g., PC, Xbox, PlayStation)
. Screenshots or a background image


Functional Requirements:
Game List:

Display all games in a structured list.
Each game should show essential information like title, genre, release date, and thumbnail image.

Notes
Database: The database should include tables or collections for storing game data such as title, genre, release date, platform, system requirements, and user ratings.
Search Functionality: Implement efficient search algorithms, possibly leveraging full-text search or filters to quickly narrow down search results.
Game Detail: Each game entry should include both structured data (e.g., genres, platforms) and unstructured data (e.g., description, reviews).

Future Planning

Implementation Plan:
Search Filters for Games:
Add filters such as genre, platform, release date, rating, and more.
Users could select or type their preferences into a dropdown or search box.
Search Filters for Characters:
Filter characters based on traits like affiliation, class, or abilities.
UI Enhancements:
Display a sidebar or dropdown that allows users to select these filters.
Apply the filters to dynamically update the displayed list of games or characters.

Additional Features (Optional)ß

1. Game Wishlist/Favorites
   As a user,
   I want to mark games as favorites or add them to my wishlist,
   So that I can save games I’m interested in for future reference.

2. Game Recommendations
   As a user,
   I want to receive game recommendations based on my browsing or search history,
   So that I can discover new games that match my interests.

3. Game and Character Details Page
   Include more information such as biography, abilities, relationships with other characters, and appearances in games/movies.
   Show related characters (e.g., characters from the same universe or franchise).

4. Reviews and User Ratings
   Enable users to rate and leave reviews for games and characters to increase community engagement.

Level Ups
Learned Some Tailwind
