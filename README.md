# Blog Application

A full-stack blog application that allows users to sign up, log in, create, view, and manage blogs. Users can also see the blogs created by others and navigate through the application seamlessly.

## Features

- User Authentication:
  - Sign up with a profile picture.
  - Login and Logout functionality.
- Blog Management:
  - Create, edit, and view blogs.
  - View other users' blogs.
  - Dynamic timestamps for blogs (e.g., "2 hours ago").
- Responsive User Dashboard:
  - Displays a personalized greeting.
  - Shows a list of blogs created by the logged-in user.
- Dynamic Home Page:
  - Lists all blogs with author details, timestamps, and thumbnails.

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Axios for API requests
- CSS for styling

### Backend
- Node.js with Express.js
- MongoDB with Mongoose for database
- JSON Web Tokens (JWT) for authentication
- Multer for file uploads
- Environment variables via `dotenv`

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (locally or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

### Environment Variables
Create a `.env` file in the root directory of the backend and add the following:
```env
PORT=5000
DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
SECRET_KEY=your_jwt_secret_key


```




### Backend Setup
1. Navigate to the backend directory:
   ```bash
   
   cd backend
   ```
2. Install dependencies:
   ```bash
   
   npm install
   ```
3. Start the server:
   ```bash
   
   npm run dev
   ```
   The backend will run at `http://localhost:8000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   
   cd frontend
   ```
2. Install dependencies:
   ```bash
   
   npm install
   ```
3. Create a `.env` file in the frontend directory and add:
   ```env
   
   REACT_APP_BASE_URL=http://localhost:8000
   ```
4. Start the React app:
   ```bash
   
   npm start
   ```
   The frontend will run at `http://localhost:3000`.

## API Endpoints

### Authentication
- **POST /signup**: Sign up a new user.
- **POST /login**: Log in an existing user.
- **GET /logout**: Log out the user.

### User
- **GET /user/getuserinfo**: Fetch user information, including blogs.

### Blog
- **POST /blog/addpost**: Create a new blog.
- **GET /blog/getblogs**: Fetch all blogs.
- **GET /blog/:id**: Fetch details of a specific blog.

## File Structure


## Usage

1. Clone the repository:
   ```bash
   
   git clone https://github.com/codemaniac-sahil/blog-web.git
   ```
2. Follow the setup instructions for both the backend and frontend.
3. Access the application at `http://localhost:3000`.


