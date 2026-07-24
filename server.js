const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");

// Load config
dotenv.config();

// Setup environment defaults for development
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_ENV = process.env.NODE_ENV || "development";
  process.env.CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
}

// Validate required environment variables
const requiredEnvVars = ["MONGO_URL", "JWT_SECRET", "CLIENT_URL"];
const missingEnvVars = requiredEnvVars.filter((v) => !process.env[v]);
if (missingEnvVars.length > 0) {
  console.error(`[Fatal Startup Error] Missing environment variables: ${missingEnvVars.join(", ")}`);
  process.exit(1);
}

// Connect to Database
connectDB();

// Initialize app
const app = express();

// Security and Performance Middlewares
app.use(helmet());
app.use(compression());
app.use(express.json());

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000",
  "http://localhost:5173"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptions));

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Rate Limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api/", apiLimiter);

// Routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error(`[Error] ${err.message}`);
  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
});

// Port configuration
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.NODE_ENV} Mode On Port ${PORT}`.bgBlue.white
  );
});

