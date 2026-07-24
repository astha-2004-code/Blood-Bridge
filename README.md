# 🩸 Blood Bridge - MERN Stack Blood Bank Application



---

## 🔗 Deployed Links

💻 **Live Demo**: [https://blood-bridge-self.vercel.app/login](https://blood-bridge-self.vercel.app/login)  
📦 **GitHub Repository**: [https://github.com/astha-2004-code/Blood-Bridge](https://github.com/astha-2004-code/Blood-Bridge)

---

## 📖 About the Project

**Blood Bridge** is a premium, full-stack MERN web application designed to connect Blood Donors, Hospitals, Organizations, and Administrators on a single, secure platform. It manages real-time blood inventory, tracks donations, facilitates consumer requests, and provides analytical insights through clean, responsive dashboards.

The platform supports four user roles, each with a custom dashboard and restricted features:

* 🩸 **Donor**: Track personal blood donation history, view total blood donated, and manage profile information.
* 🏥 **Hospital**: Submit blood consumption requests, manage inventory logs, and view previous transactions.
* 🏢 **Organization**: Organize blood donation events, manage inventory check-ins (`In`) and check-outs (`Out`), and track interactions with Donors and Hospitals.
* 👨‍💼 **Admin**: Manage user accounts (Donors, Hospitals, Organizations) with validation controls and perform delete operations.

---


## 🚀 Features

* **Secure JWT Authentication**: Stateless user sessions with token verification.
* **Role-Based Authorization**: Protected frontend routes and backend APIs restricted by role validation.
* **Responsive UI Layouts**: Styled using Bootstrap 5, fully adapted for mobile, tablet, and desktop views.
* **Blood Inventory Management**: Log incoming (`In`) donations and outgoing (`Out`) consumption transactions.
* **Database Sanitization**: Clean checks to strip empty inputs, preventing duplicate keys on optional fields in MongoDB.
* **Real-time Analytics**: Grid dashboard displaying total blood inventory volume by type (`A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`, `O+`, `O-`).
* **Enhanced Notifications**: Toast alert notifications powered by `react-toastify` for validation errors and successes.

---

## 🛠️ Tech Stack

### Frontend
* **Core**: React.js, React Hooks
* **State Management**: Redux Toolkit (Thunks & Slices)
* **Routing**: React Router DOM (v6)
* **Styling**: Bootstrap 5, Vanilla CSS, FontAwesome Iconography
* **API Client**: Axios

### Backend
* **Runtime**: Node.js
* **Framework**: Express.js
* **Authentication**: JSON Web Tokens (JWT)
* **Security**: bcryptjs password hashing, CORS configuration
* **Middleware**: Custom router authentication and administrator validation

### Database
* **Database**: MongoDB Atlas
* **Object Modeling**: Mongoose

---

## 📂 Folder Structure

```text
Blood-Bridge/
├── client/                     # React Frontend Application
│   ├── public/                 # Static public files (HTML, favicon)
│   └── src/
│       ├── components/         # Common Layout, Sidebar, Header & Forms
│       ├── pages/              # Admin, Auth (Login/Register), and Dashboard Pages
│       ├── redux/              # Redux Toolkit Slices, Thunks, and Store Config
│       └── services/           # Axios Base Config & Auth Handlers
├── config/                     # MongoDB connection setup
├── controllers/                # REST API Endpoint request controllers
├── middlewares/                # Custom JWT & Admin role verification middlewares
├── models/                     # Mongoose Schema Definitions (User, Inventory)
├── routes/                     # Express Router APIs
└── server.js                   # Main application entry point
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine:

### Step 1: Clone the Repository
```bash
git clone https://github.com/astha-2004-code/Blood-Bridge.git
cd Blood-Bridge
```

### Step 2: Install Backend Dependencies
In the root directory, run:
```bash
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd client
npm install
```

---

## 🔑 Environment Variables

### Backend Configuration
Create a `.env` file in the **root** directory of the project:
```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_token
NODE_ENV=production
CLIENT_URL=your_vercel_frontend_url
```

### Frontend Configuration
Create a `.env` file in the **`client/`** directory of the project:
```env
REACT_APP_BASEURL=your_railway_backend_url/api/v1
```

---

## 🏃 Running the Application

### Backend Server
In the root directory, execute:
```bash
npm run server
```

### Frontend Server
In a new terminal window, navigate to the `client` directory and start the development server:
```bash
cd client
npm start
```

* **Frontend Localhost URL**: [http://localhost:3000](http://localhost:3000)
* **Backend Localhost URL**: [http://localhost:8080](http://localhost:8080)

---

## 🔮 Future Enhancements

* **Email Notifications**: Automatically send emails to donors once their donation is processed or when an organization creates a camp.
* **Google Maps Integration**: Locate nearby blood banks and hospitals based on geographical location.
* **AI-based Blood Demand Prediction**: Leverage machine learning to forecast blood group demands based on seasonal usage trends.
* **Dark Mode**: Add sleek, dark-themed toggles to enhance dashboard visuals.
* **Real-time Notifications**: Notify hospitals when requested blood groups become available using Socket.IO.
* **Mobile Application**: Port the project using React Native or Flutter to support mobile devices.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the project repository.
2. Create a new feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add some NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a **Pull Request**.

---

## ✉️ Contact

* **LinkedIn**: [linkedin](https://www.linkedin.com/in/astha-jha-2oo4/)
* **GitHub**: [github](https://github.com/astha-2004-code)
