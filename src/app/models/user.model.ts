//Interface representing a user with a Pokémon collection.
export interface User {
  id: number,
  username: string;
  pokemon: string[] //Array containing the Pokémon caught by the user.
}