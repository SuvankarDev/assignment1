const express = require("express");
const cors = require("cors");

// connect database
require("./db");

// import routes
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", taskRoutes);

// start server
app.listen(5000, function () {
  console.log("🚀 Server running on port 5000");
});
