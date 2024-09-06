# StudyNotion

StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. It is built using the MERN stack, including **ReactJS**, **NodeJS**, **MongoDB**, and **ExpressJS**.

## Features

- **For Students:**
  - Browse and enroll in courses
  - View and rate courses
  - Manage account details
  - Add courses to wishlist and checkout

- **For Instructors:**
  - Create, update, and manage courses
  - View insights and feedback on courses

- **For Admin (Future Scope):**
  - Platform-wide insights
  - Manage users and instructors

## Technologies Used

- **Front-End:**
  - ReactJS
  - Tailwind CSS for styling
  - Redux for state management
  - RESTful API integration

- **Back-End:**
  - Node.js
  - Express.js
  - MongoDB (via Mongoose)
  - JWT for authentication
  - Bcrypt for password hashing

- **Media Storage:**
  - Cloudinary for media management

- **Payment Integration:**
  - Razorpay for handling payments

## API Endpoints

- `POST /api/auth/signup`: Create a new user account
- `POST /api/auth/login`: Log in and generate a JWT token
- `POST /api/auth/verify-otp`: Verify OTP for user authentication
- `GET /api/courses`: Fetch all courses
- `POST /api/courses`: Create a new course (instructor only)

## System Architecture

StudyNotion follows a client-server architecture with:
- **Front-End**: Built with ReactJS, it communicates with the backend via REST API.
- **Back-End**: Built with NodeJS and ExpressJS, handling user authentication, course management, and content delivery.
- **Database**: MongoDB stores course content, user data, and other related information.

## Deployment

- **Frontend**: Deployed using Vercel
- **Backend**: Deployed using Render or Railway
- **Database**: Hosted on MongoDB Atlas
- **Media**: Stored on Cloudinary

## Future Enhancements

- Gamification features (badges, points, leaderboards)
- Personalized learning paths
- Social learning features (group discussions, feedback)
- Mobile app development
- Machine learning-powered recommendations
- Virtual reality integration for immersive learning

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/StudyNotion.git
