# Scrum Score

A real-time scoring and management tool for Scrums, built with Node.js and Socket.io.

## Features

- Real-time game and player management
- WebSocket support for live updates
- Modular code structure (models, resolvers, type definitions)
- Simple database integration

## Project Structure

```
server/
	app.js           # Main server entry point
	constants.js     # Application constants
	package.json     # Server dependencies and scripts
	socket.js        # WebSocket logic
	db/
		index.js       # Database connection and setup
	models/
		game.js        # Game model
		player.js      # Player model
		index.js       # Model exports
	resolvers/
		game.js        # Game resolvers
		player.js      # Player resolvers
		index.js       # Resolver exports
	typeDefs/
		game.js        # Game GraphQL type definitions
		player.js      # Player GraphQL type definitions
		index.js       # TypeDefs exports
```

## Getting Started

### Prerequisites

- Node.js (v22+ recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/taufiqelrahman/scrum-score.git
   cd scrum-score/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server

```sh
node app.js
```

The server will start and listen for incoming connections. WebSocket events are handled via `socket.js`.

## Security

- Input validation on both client and server
- No sensitive data stored in client-side code
- Secure error handling and logging

## License

MIT
