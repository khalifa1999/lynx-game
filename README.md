# LynxJS Game Discovery App

Welcome to the LynxJS Game Discovery App! This project serves as a practical example and testing ground for building applications with the [LynxJS framework](https://github.com/lynx-js/lynx). It's a simple yet powerful application that uses the [RAWG Video Games Database API](https://rawg.io/apidocs) to allow users to discover and browse video games.

This repository is perfect for anyone looking to get hands-on experience with LynxJS and see how it can be used to build a real-world, mobile-first application.

## Features

- **Discover Games**: Browse categories like "Most Anticipated," "Most Popular," and "Best Rated."
- **Game Details**: View detailed information for each game, including descriptions, ratings, platforms, and screenshots.
- **Game Stores**: See which digital storefronts a game is available on.
- **Search**: (Future Implementation) A foundation for a search screen is included.
- **Built with LynxJS**: Demonstrates core LynxJS concepts, including components, navigation, and styling.

## Technology Stack

- **Framework**: [LynxJS](https://github.com/lynx-js/lynx) with React
- **Build Tool**: Rspeedy (Rsbuild + Rspack)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest) for state management of server data.
- **API**: [RAWG Video Games Database API](https://rawg.io/apidocs)
- **Language**: TypeScript

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- The [LynxExplorer App](https://github.com/lynx-js/lynx-native/releases) for your mobile device to view the project.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/lynx-game.git
    cd lynx-game
    ```

    _(Replace `your-username` with your actual GitHub username or the appropriate repository URL)_

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Configuration: Setting up the API Key

This project requires an API key from the RAWG Video Games Database to fetch game data. The key is currently hardcoded for ease of testing, but the recommended approach for your own version is to use an environment variable.

1.  **Get your free API key:**

    - Go to the [RAWG API page](https://rawg.io/apidocs) and create an account.
    - Once logged in, you'll find your API key in your account dashboard.

2.  **Create an environment file:**

    - In the root of the project, create a new file named `.env`.

3.  **Add your key to the `.env` file:**

    - Open the `.env` file and add the following line, replacing `YOUR_RAWG_API_KEY` with the key you just obtained:

    ```
    VITE_RAWG_API_KEY=YOUR_RAWG_API_KEY
    ```

4.  **Update the code to use the environment variable:**

    - For this project to use your new key, you'll need to update the files where the API key is used (e.g., `src/hooks/useGameQuery.ts`, `src/hooks/useSingleStore.ts`, etc.). Change the hardcoded key to use the environment variable:

    ```typescript
    // Replace this:
    const API_KEY = "425f2b4n0c3u7c0650f5d72098";

    // With this:
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    ```

## Running the Project

Once you have completed the installation and configuration, you can start the development server.

1.  **Run the development server:**

    ```bash
    npm run dev
    ```

2.  **View on your device:**
    - The terminal will display a QR code after the server starts.
    - Open the **LynxExplorer App** on your mobile device and scan the QR code.
    - The app will load, and you can now interact with it directly on your phone.

Hot reloading is enabled, so any changes you save in the source code will be reflected in the app almost instantly.

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add new features, please feel free to open an issue or submit a pull request.
