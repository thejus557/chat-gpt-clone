# Backend

# TypeScript + Express + Node.js + Biomejs

This repository contains a backend folder which has basic TypeScript Express application that utilizes Node.js for server-side functionality. It is configured with Nodemon for automatic server restarts during development and uses ts-node for TypeScript execution. It also includes a frontend folder which has a basic React application that utilizes TypeScript and Tailwind CSS for styling.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/): Ensure that Node.js, preferably version 16 or higher, is installed on your system, as this project utilizes the latest versions of TypeScript and Nodemon.
- [npm](https://www.npmjs.com/): npm is the package manager for Node.js and comes with the Node.js installation.

## Installation

Clone the repository to your local machine:

```
git clone https://github.com/thejus557/mern-template.git
```

Navigate to the project directory:

```
cd backend/
```

Install the project dependencies including TypeScript and Nodemon:

```
pnpm i
```

## Usage

For development purposes, you can run the application using Nodemon to automatically restart the server when changes are detected. Execute the following command:

```
pnpm run dev
```

This will start the server at `http://localhost:3000` by default. You can change the port in the `src/index.ts` file or create an `.env` file to manage the environt-specific variables separately.

For production, you can build the TypeScript files and then start the server. Run the following commands:

```
pnpm run build
pnpm start
```

## Project Structure

The project structure is organized as follows:

- `src`: Contains TypeScript source files
    - `index.ts`: Configures and starts the Express application
- `dist`: Output directory created during build for compiled TypeScript files
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript configuration

You can customize the project configuration i nthe `tsconfig.json` file and adjust the server settings in the `src/index.ts` file.


### Mongodb Setup is coming soon.

# Frontend

# React + TypeScript + Rspack + Tailwind CSS + Biomejs

Navigate to the project directory:

```
cd frontend/
```

Install the project dependencies including TypeScript and Nodemon:

```
pnpm i
```

## Usage

For development purposes, you can run the application using rspack to automatically restart the server when changes are detected. Execute the following command:

```
pnpm run dev
```

This will start the server at `http://localhost:8080` by default.

For production, you can build the frontend project. Run the following commands:

```
pnpm run build
```
