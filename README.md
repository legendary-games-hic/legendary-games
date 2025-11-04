# Legendary Games Website 💥💣💥

### Project for Human-Interface Computing class Fall 2025  💀💣

- Professor Giovanni Villalobos 💥😝
- Studendents: Joao Donaton, Lucas Oliveira, Nathan Yoak, Dovlet Gurbanov 👌😂

### Project Details for Team
- Green: 1DB954
- Blue: 2B78E4
- Background gray: 212121
- Navbar/Footer gray: 121212

### How to run
- Have node.JS installed
- run `npm run dev` to start the webserver locally

# API ey setup
- For game data, we are using: https://api.rawg.io/docs/
- You need to make an account and get an API key 
- DO NOT put the API key in the code
    - create a file called `.env.local` in the base project directory (on your local copy)
    - The file contents must be just: `VITE_API_KEY=YOUR API KEY FROM RAWG`
- To use the API key in your code:
    - Add the following line on top of your `.jsx` file where you'll use the API key:
```const APIKEY = import.meta.env.VITE_API_KEY```
    - This will automatically import the key from the `.env.local` file and put it in that variable

### API Requests Guide
