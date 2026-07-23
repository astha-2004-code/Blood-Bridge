# 🩸 Blood Bridge - MERN Stack Blood Bank Application

**Blood Bridge** is a premium, fully featured MERN Stack platform designed to bridge the gap between Blood Donors, Hospitals, Organizations, and Administrators. It manages real-time blood inventory, tracks donations, facilitates consumer requests, and provides analytical insights through a clean, modern user dashboard.

---

## 🚀 Key Features

### 👤 Role-Based Portals & Dashboards
* **Admin Dashboard**: Manage user accounts (Donors, Hospitals, Organizations) and monitor overall platform activities with safety validations.
* **Donor Portal**: Track donation history, view total blood donated, and manage profile information.
* **Hospital Portal**: Submit real-time blood requirements, track consumed blood inventory, and view logs of previous requests.
* **Organization Portal**: Organize blood donation camps, manage blood inventory check-ins (In) and check-outs (Out), and track interactions with both Donors and Hospitals.

### 📊 Real-Time Analytics
* Interactive analytics dashboard displaying live inventory status by Blood Group (`A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`, `O+`, `O-`).
* Real-time indicators of total incoming (donated) vs. outgoing (consumed) blood volumes.

### 🔒 Enterprise Security
* Secured JWT (JSON Web Token) authentication and cookie-based authorization.
* Custom middleware to enforce role-based route access controls (Admin-only, Organization-only, etc.).
* Password hashing using bcryptjs.

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React.js | Dynamic UI component architecture |
| **State Management** | Redux Toolkit | Centralized state management & async logic |
| **Styling** | Bootstrap 5 & FontAwesome | Sleek, responsive design & iconography |
| **Backend** | Node.js & Express.js | Robust RESTful API & server logic |
| **Database** | MongoDB & Mongoose | Document database & object-relational mapping |
| **Auth** | JSON Web Tokens (JWT) | Safe session-less API authentication |

---

## 📦 Installation & Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (v16+ recommended)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB instance

### Step 1: Clone the Repository
```bash
git clone https://github.com/astha-2004-code/Blood-Bridge.git
cd Blood-Bridge
```

### Step 2: Server-Side Configuration
1. Install backend dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root directory and add the following keys:
   ```env
   PORT=8080
   MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/bloodbridge
   JWT_SECRET=your_jwt_secret_key_here
   ```

### Step 3: Client-Side Configuration
1. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
2. Create a `.env` file in the `client/` directory and add the following:
   ```env
   REACT_APP_BASEURL=http://localhost:8080/api/v1
   ```

---

## 🏃 Running the Application

To run both the server and client concurrently in development mode, go back to the root directory and execute:

```bash
npm run dev
```

* **Backend Server**: Runs on [http://localhost:8080](http://localhost:8080)
* **Frontend Web App**: Runs on [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Directory Structure

```text
Blood-Bridge/
├── client/                 # React Frontend Application
│   ├── public/             # Public assets & HTML templates
│   └── src/
│       ├── components/     # Reusable layout & form components
│       ├── pages/          # Admin, Auth, and Dashboard pages
│       ├── redux/          # Redux Toolkit slices & store configuration
│       └── services/       # Axios API client handlers
├── config/                 # Database connector settings
├── controllers/            # API Route logic handlers
├── middlewares/            # JWT validation and Role checkers
├── models/                 # Mongoose Database schemas (User, Inventory)
├── routes/                 # Express API endpoint definitions
└── server.js               # Application Entry Point
```

---

## 🔗 Key API Endpoints

### 🔐 Authentication
* `POST /api/v1/auth/register` - Register a new User (Donor, Hospital, or Organization)
* `POST /api/v1/auth/login` - Login to account
* `GET /api/v1/auth/current-user` - Retrieve active user profile

### 🩸 Inventory Management
* `POST /api/v1/inventory/create-inventory` - Add an In/Out blood transaction record
* `GET /api/v1/inventory/get-inventory` - Fetch inventory log records
* `POST /api/v1/inventory/get-inventory-hospital` - Fetch blood consumption logs for a hospital

### 👥 Admin Actions
* `GET /api/v1/admin/donor-list` - Fetch all registered Donors
* `GET /api/v1/admin/hospital-list` - Fetch all registered Hospitals
* `GET /api/v1/admin/org-list` - Fetch all registered Organizations
* `DELETE /api/v1/admin/delete-donor/:id` - Remove a donor/user account

---

## 📄 License
This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
