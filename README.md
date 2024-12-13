# Web Application Template

A modern, full-stack web application template built with React, TypeScript, Material UI, Node.js, Express, and SQLite.

## Features

- 🔐 Authentication (Login, Register, Password Recovery)
- 👤 User Profile Management
- 📊 Dashboard
- 📱 Responsive Design
- 🎨 Material UI Components
- 🔍 Search Functionality
- 📧 Email Integration
- 📄 Static Pages (About, Terms, Privacy Policy)
- ⚡ API Endpoints for CRUD Operations

## Tech Stack

### Frontend
- React with TypeScript
- Material UI
- React Router
- React Query
- Axios
- Formik & Yup

### Backend
- Node.js
- Express
- SQLite3
- JWT Authentication
- Nodemailer
- Express Validator

## Project Structure
```
web_app_template/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # API services
│   │   ├── utils/        # Utility functions
│   │   └── types/        # TypeScript types
│   └── public/           # Static assets
└── server/               # Backend Node.js application
    ├── src/
    │   ├── controllers/  # Route controllers
    │   ├── models/       # Database models
    │   ├── routes/       # API routes
    │   ├── middleware/   # Custom middleware
    │   └── utils/        # Utility functions
    └── database/         # SQLite database files
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. Set up environment variables:
   - Create `.env` file in the server directory
   - Create `.env` file in the client directory

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend development server
   cd client
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## Available Scripts

### Frontend

- `npm start` - Start development server
- `npm run build` - Build production bundle
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Backend

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run migrate` - Run database migrations

## License

MIT
