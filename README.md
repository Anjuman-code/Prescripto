# Prescripto - Smart Doctor Appointment System

> A modern, full-stack doctor appointment booking platform built with MERN stack (MongoDB, Express.js, React.js, Node.js)

🔗 [Live Demo](https://prescripto.vercel.app) *(Optional - Add your deployed URL)*

## 📝 Description

Prescripto is a comprehensive healthcare appointment management system that bridges the gap between patients and doctors. It features a user-friendly interface for patients to book appointments, a dedicated portal for doctors to manage their schedules, and an admin dashboard for overall system management.

### Key Highlights
- 🏥 Seamless appointment booking
- 👨‍⚕️ Doctor availability management
- 💳 Secure payment integration
- 📱 Responsive design
- 🔒 Role-based access control

## 👥 Author

**Mirza Anjuman Ara Juman**
- GitHub: [@Anjuman-code](https://github.com/Anjuman-code)

## ⚡ Quick Start

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB
- npm or yarn
- Cloudinary account for image storage

### Installation

1. Clone the repository
```bash
git clone https://github.com/Anjuman-code/Prescripto.git
cd Prescripto
```

2. Configure Environment Variables
Create .env files in backend, frontend, and admin directories:

Backend (.env):
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Frontend & Admin (.env):
```env
VITE_API_URL=http://localhost:4000
```

3. Start Backend Server
```bash
cd backend
npm install
npm start
```

4. Start Frontend Application
```bash
cd frontend
npm install
npm run dev
```

5. Start Admin Panel
```bash
cd admin
npm install
npm run dev
```

Your application should now be running at:
- Frontend: http://localhost:5173
- Admin Panel: http://localhost:5174
- Backend API: http://localhost:4000

## 🏗️ Project Structure

```
├── frontend/          # Patient/User facing application
├── admin/            # Admin & Doctor dashboard
└── backend/          # Express.js REST API
```

## ✨ Features

### For Patients
- Browse and search for doctors
- View doctor profiles and availability
- Book appointments
- Manage appointments (view, cancel)
- Secure payment integration (bKash)

### For Doctors
- Manage availability status
- View and manage appointments
- Mark appointments as completed
- Profile management
- View earnings and statistics

### For Administrators
- Add and manage doctors
- View all appointments
- Monitor system statistics
- Manage doctor availability

## 🛠️ Tech Stack

### Frontend & Admin Panel
- React.js
- Tailwind CSS
- Context API for state management
- Vite as build tool
- Responsive design

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT authentication
- Cloudinary for image storage
- Email notifications
- bcrypt for password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB
- npm or yarn

### Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/doctor-booking.git
cd doctor-booking
```

2. Setup Backend
```bash
cd backend
npm install
# Create .env file with necessary credentials
# MONGODB_URI, JWT_SECRET, CLOUDINARY credentials, etc.
npm start
```

3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

4. Setup Admin Panel
```bash
cd admin
npm install
npm run dev
```

### Environment Variables

Backend (.env):
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Frontend & Admin (.env):
```
VITE_API_URL=http://localhost:4000
```

## 📱 Screenshots

![image alt](https://github.com/Anjuman-code/Prescripto/blob/101e926266ab926f20ed2d5dc33a986d423d0b8e/screenshots/Screenshot_16-7-2025_34710_localhost.jpeg)
![image alt](https://github.com/Anjuman-code/Prescripto/blob/101e926266ab926f20ed2d5dc33a986d423d0b8e/screenshots/2.jpeg)
![image alt](https://github.com/Anjuman-code/Prescripto/blob/101e926266ab926f20ed2d5dc33a986d423d0b8e/screenshots/3.jpeg)
![image alt](https://github.com/Anjuman-code/Prescripto/blob/101e926266ab926f20ed2d5dc33a986d423d0b8e/screenshots/4.jpeg)
![image alt](https://github.com/Anjuman-code/Prescripto/blob/51e0a1400b23d34a8568f865357e95a0e1ea2387/Screenshot_1.png)


## 🔒 Security Features

- JWT based authentication
- Bcrypt password hashing
- Protected API routes
- Role-based access control
- Secure password generation for doctors

## 💡 Development Features

- Clean and maintainable code structure
- Component-based architecture
- Responsive UI with Tailwind CSS
- Loading states and skeleton loaders
- Error handling and notifications
- Image upload with preview
- Form validation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## � Acknowledgments

Special thanks to:
- MongoDB for the database service
- Cloudinary for image hosting
- Vercel for hosting services
- The open-source community for inspiration and tools

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
