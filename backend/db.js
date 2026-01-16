const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Suvankar@9051",
  database: "task_app"
});

connection.connect(function (error) {
  if (error) {
    console.log("❌ Database connection failed");
    console.log(error);
    return;
  }

  console.log("✅ MySQL connected successfully");
});

module.exports = connection;
