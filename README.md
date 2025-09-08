# Ping Me 💬

A modern, real-time chat application built with React and Node.js. Connect with friends and family through instant messaging with support for text messages, image sharing, and real-time online status updates.

![Ping Me Screenshot](./docs/screenshot.png) <!-- Add your screenshot here -->

## ✨ Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: Secure signup and login with JWT tokens
- **Image Sharing**: Upload and share images via Cloudinary integration
- **Online Status**: See who's online in real-time
- **Message Status**: Track message delivery and read receipts
- **User Profiles**: Customizable profiles with bio and profile pictures
- **Responsive Design**: Modern UI built with TailwindCSS
- **Message History**: Persistent chat history stored in MongoDB

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **TailwindCSS 4.x** - Utility-first CSS framework
- **Socket.io Client** - Real-time communication
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Cloudinary** - Cloud-based image management
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek001konni/ping-me.git
   cd ping-me
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Environment Setup

#### Server Environment Variables

Create a `.env` file in the `server` directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server Configuration
PORT=5000
```

#### Client Environment Variables

Create a `.env` file in the `client` directory:

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:5000
```

### Running the Application

1. **Start the server** (from the `server` directory):
   ```bash
   npm run server    # Development with nodemon
   # or
   npm start        # Production
   ```

2. **Start the client** (from the `client` directory):
   ```bash
   npm run dev      # Development server
   # or
   npm run build    # Build for production
   npm run preview  # Preview production build
   ```

3. **Access the application**:
   - Frontend: http://localhost:5173 (Vite default)
   - Backend API: http://localhost:5000

## 📱 Usage

### Getting Started

1. **Sign Up**: Create a new account with email and password
2. **Login**: Access your account with your credentials
3. **Update Profile**: Add a profile picture and bio
4. **Start Chatting**: Select a user from the sidebar to start messaging
5. **Send Messages**: Type text messages or upload images
6. **Real-time Updates**: See when users are online and when messages are read

### Key Features Explained

- **Sidebar**: Shows all registered users with online status indicators
- **Chat Container**: Main messaging interface with message history
- **Message Status**: Blue checkmarks indicate read messages
- **Image Upload**: Click the image icon to share photos
- **Profile Management**: Update your profile from the profile page

## 🏗️ Project Structure

```
ping-me/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and static files
│   │   ├── components/    # Reusable React components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── RightSidebar.jsx
│   │   ├── context/       # React Context providers
│   │   │   └── AuthContext.jsx
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Application entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                # Node.js backend application
│   ├── config/           # Configuration files
│   │   └── db.js         # MongoDB connection
│   ├── controllers/      # Request handlers
│   │   ├── messageController.js
│   │   └── userController.js
│   ├── lib/              # External service configurations
│   │   ├── cloudinary.js # Cloudinary setup
│   │   └── utils.js      # JWT token utilities
│   ├── middleware/       # Custom middleware
│   │   └── auth.js       # JWT authentication
│   ├── models/           # MongoDB schemas
│   │   ├── Message.js
│   │   └── User.js
│   ├── routes/           # API routes
│   │   ├── messageRoutes.js
│   │   └── userRoutes.js
│   ├── server.js         # Server entry point
│   └── package.json
│
└── README.md             # This file
```

## 🔌 API Documentation

### Authentication Endpoints

```
POST /api/auth/signup     # Create new user account
POST /api/auth/login      # User login
GET  /api/auth/check      # Verify authentication status
PUT  /api/auth/update-profile  # Update user profile
```

### Message Endpoints

```
GET  /api/messages/users      # Get all users for sidebar
GET  /api/messages/:id        # Get messages with specific user
POST /api/messages/send/:id   # Send message to user
PUT  /api/messages/mark/:id   # Mark message as seen
```

### WebSocket Events

**Client to Server:**
- `connection` - User connects with userId in query

**Server to Client:**
- `newMessage` - New message received
- `getOnlineUsers` - List of online user IDs

## 🧪 Development

### Running Tests

```bash
# Frontend tests
cd client
npm run lint

# Backend tests (if available)
cd server
npm test
```

### Building for Production

```bash
# Build frontend
cd client
npm run build

# The build artifacts will be stored in the `dist/` directory
```

### Code Style

- Frontend uses ESLint with React-specific rules
- Follow the existing code patterns and naming conventions
- Use meaningful component and variable names

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write clean, readable code with proper comments
- Follow the existing code style and patterns
- Test your changes thoroughly before submitting
- Update documentation for any new features

## 📝 Environment Variables Reference

### Server (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secret_key_here` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789012345` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `your_api_secret` |
| `PORT` | Server port (optional) | `5000` |

### Client (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | Backend API URL | `http://localhost:5000` |

## 🔧 Troubleshooting

### Common Issues

1. **Cannot connect to MongoDB**
   - Ensure MongoDB is running locally or check your Atlas connection string
   - Verify the `MONGODB_URI` in your `.env` file

2. **Cloudinary images not uploading**
   - Check your Cloudinary credentials in the `.env` file
   - Ensure your Cloudinary account has sufficient quota

3. **Socket.io connection fails**
   - Verify the backend URL in the client `.env` file
   - Check if the server is running on the correct port

4. **JWT authentication errors**
   - Ensure `JWT_SECRET` is set in server `.env`
   - Clear browser localStorage and try logging in again

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## 👥 Authors

- [@Abhishek001konni](https://github.com/Abhishek001konni) - Initial work

---

**Built with ❤️ using React and Node.js**

For more information or support, please open an issue on GitHub.