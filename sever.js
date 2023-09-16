import express from "express";
import members from "./api/members.route.js"; // Corrected path

const app = express();

// CORS setup
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Replace * with your allowed origins.
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

// Mount the members router at the specified path
app.use("/api/v1/members", members); // Added a slash (/) before "api/v1/members"

// Error handling middleware (handle 404 errors)
app.use("*", (req, res) => res.status(404).json({ error: "Not valid request/url" }));

export default app;
