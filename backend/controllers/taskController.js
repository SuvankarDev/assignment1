const db = require("../db");

/* ===================== LIST CONTROLLERS ===================== */

// GET all lists
exports.getLists = function (req, res) {
  db.query("SELECT * FROM lists", function (error, results) {
    if (error) {
      res.status(500).send("Error fetching lists");
      return;
    }
    res.json(results);
  });
};

// ADD new list
exports.addList = function (req, res) {
  const name = req.body.name;

  if (!name) {
    res.status(400).send("List name is required");
    return;
  }

  db.query(
    "INSERT INTO lists (name) VALUES (?)",
    [name],
    function (error, result) {
      if (error) {
        res.status(500).send("Error adding list");
        return;
      }

      res.json({
        id: result.insertId,
        name: name,
        tasks: []
      });
    }
  );
};

/* ===================== TASK CONTROLLERS ===================== */

// GET tasks by list id
exports.getTasksByList = function (req, res) {
  const listId = req.params.listId;

  db.query(
    "SELECT * FROM tasks WHERE list_id = ?",
    [listId],
    function (error, results) {
      if (error) {
        res.status(500).send("Error fetching tasks");
        return;
      }
      res.json(results);
    }
  );
};

// ADD new task
exports.addTask = function (req, res) {
  const listId = req.body.listId;
  const name = req.body.name;
  const date = req.body.date;

  if (!listId || !name || !date) {
    res.status(400).send("Missing task data");
    return;
  }

  db.query(
    "INSERT INTO tasks (list_id, name, task_date, urgent, completed) VALUES (?, ?, ?, ?, ?)",
    [listId, name, date, false, false],
    function (error, result) {
      if (error) {
        res.status(500).send("Error adding task");
        return;
      }

      res.json({
        id: result.insertId,
        list_id: listId,
        name: name,
        date: date,
        urgent: false,
        completed: false
      });
    }
  );
};

// TOGGLE urgent
exports.toggleUrgent = function (req, res) {
  const taskId = req.params.id;

  db.query(
    "UPDATE tasks SET urgent = NOT urgent WHERE id = ?",
    [taskId],
    function (error) {
      if (error) {
        res.status(500).send("Error updating urgent");
        return;
      }
      res.send("Urgent updated");
    }
  );
};

// TOGGLE completed
exports.toggleCompleted = function (req, res) {
  const taskId = req.params.id;

  db.query(
    "UPDATE tasks SET completed = NOT completed WHERE id = ?",
    [taskId],
    function (error) {
      if (error) {
        res.status(500).send("Error updating completed");
        return;
      }
      res.send("Completed updated");
    }
  );
};

exports.moveTask = function (req, res) {
  const taskId = req.body.taskId;
  const newListId = req.body.newListId;

  db.query(
    "UPDATE tasks SET list_id = ? WHERE id = ?",
    [newListId, taskId],
    function () {
      res.send("Task moved");
    }
  );
};
