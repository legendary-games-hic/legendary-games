# Legendary Games Website 💥💣💥

### Project for Human-Interface Computing class Fall 2025  💀💣

- Professor Giovanni Villalobos 💥😝
- Studendents: Joao Donaton, Lucas Oliveira, Nathan Yoak, Dovlet Gurbanov 👌😂

### Project Details for Team
- All of our colors (background, navfooter colors, green, blue) are defined in classes under `src/assets/css/globals.css` (already imported globally )
- Bootstrap classes and icons are imported globally and ready to use (see https://icons.getbootstrap.com/ for icon options)

### How to run
- Have node.JS installed
- run `npm run dev` to start the webserver locally

# API key setup
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
- For now see the example in `src/pages/MainPage.jsx` for how to fetch data from the API
- There are a few things you need to know:
    - This uses the `useState` hook to keep track of the data and update it (explanation here https://dev.to/mikhaelesa/what-is-usestate-in-react-47io)
    - We also use the `useEffect` hook (VERY IMPORTANT, see https://stackoverflow.com/questions/77009292/what-is-useeffect-in-react for when useEffect is called)
        - In this example useEffect will only be called when the component is first rendered
        - So this is where we put our API request to fetch the game data
    - The API request is done using the axios library to do a simple get request and pass the API key for authentication
    - See https://api.rawg.io/docs/ for full description of API capabilities (includes game data, game searching, screenshots of games, scores, and mcsre...)