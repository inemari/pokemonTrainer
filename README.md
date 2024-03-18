# PokemonTrainer

An application that lets the user create a Trainer account, catch Pokémon and view them on their trainer page. 

## Installation

```
git clone https://github.com/TobiasVetrhus/PokemonTrainer.git
cd PokemonTrainer
npm install
```

## Usage

To start the application, run the following command:

`ng serve`

This command will open a new page in your browser at `localhost:4200` and direct you to the landing page.

## Set-up

For the application to work, you need and api key and an api url. You also need a url to connect 
to the pokeAPI. 

Generate an environments folder:

`ng generate environments`

In the environment.ts files fill in these values:

```
production: true/false,
apiUsers: 'API URL',
apiKey: 'API key',
apiPokemons: 'https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0',
```

Please note that we don't share sensitive items in the README file. If you need them, feel free to contact the contributors of the project. 

## Contributors

[Tobias Vetrhus](https://github.com/TobiasVetrhus)
[Tommy Jåvold](https://github.com/t-lined)
[Ine Bredesen](https://github.com/inemari)

