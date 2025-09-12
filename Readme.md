# Ping Me

Ping Me is a modern, full-stack real-time chat application that allows users to communicate instantly through text and image messages. The project consists of a React front end (bootstrapped with Vite) and an Express.js back end, with MongoDB for data storage and Cloudinary for image uploads. Authentication is implemented with JWT, and real-time messaging uses Socket.io.

---

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=for-the-badge)](https://ping-me-chat.vercel.app/)

## Features

- **User Authentication:** Secure signup and login via JWT, password hashing with bcrypt.
- **Profile Management:** Users can update their profile picture (uploaded to Cloudinary), bio, and full name.
- **Real-time Messaging:** Instant text and image messaging between users, powered by Socket.io.
- **Online User Status:** See which users are currently online.
- **Unseen Message Count:** Sidebar displays count of unseen messages per user.
- **Image Uploads:** Send images in chat, stored securely via Cloudinary.
- **Responsive UI:** Built with React and Vite for fast HMR and modern developer experience.

---

## Tech Stack

- **Frontend:** React, Vite, Socket.io-client, Axios
- **Backend:** Express.js, MongoDB, Socket.io, Cloudinary, JWT, bcrypt
- **Other:** ESLint, environment variable support for secrets

---

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Cloudinary account (for image storage)

### Environment Variables

Create `.env` files in both `client` and `server` directories.

#### Server `.env` Example

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Client `.env` Example

```
VITE_BACKEND_URL=http://localhost:5000
```

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/Abhishek001konni/ping-me.git
cd ping-me

# Setup server
cd server
npm install

# Setup client
cd ../client
npm install
```

### Running the App

Start the backend server:

```sh
cd server
npm run server
```

Start the frontend client:

```sh
cd ../client
npm run dev
```

Visit `http://localhost:5173` (or as printed in the terminal).

---

## Project Structure

```
ping-me/
│
├── client/
│   ├── index.html
│   ├── src/
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── App.jsx
│
├── server/
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── lib/
│   ├── middleware/
│   ├── models/
│   ├── routes/
```

---
## API Endpoints

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Log in an existing user
- `PUT /api/auth/update-profile` - Update user profile (auth required)
- `GET /api/auth/check` - Check authentication status (auth required)

- `GET /api/messages/users` - Get users for sidebar with unseen counts (auth required)
- `GET /api/messages/:id` - Get messages with a specific user (auth required)
- `PUT /api/messages/mark/:id` - Mark messages as seen with a specific user (auth required)
- `POST /api/messages/send/:id` - Send message to a specific user (auth required)

## Real-Time Functionality

- Utilizes Socket.io for:
  - Live messaging
  - Online user tracking
  - Instant update of unseen message counts

---

## Contributing

Feel free to make pull requests and open issues. 

---
