## Fullstack starter template

Node.js + Express.js + Knex.js + MySQL + React + Vite

## Getting Started

1. Install devtools, frontend and backend packages

### `npm install`

2. Create .env file from .env_sample

3. Run database migration

### `npm run migrate`

4. Start concurrently the dev server and react app

### `npm run dev`

## Environment variables

The .env file is located in the backend directory.

Contains:

- database access
- initial demo user

## Available Scripts

In the project directory, you can run:

### `npm run migrate`

Runs migration to define initial table (user) with demo data.

### `npm run dev`

Runs the app in the development mode.
Frontend [http://localhost:5173](http://localhost:5173) to view it in your browser.
Backend [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build:frontend`

Vite builds the frontend app for production to the `frontend/dist` folder.
