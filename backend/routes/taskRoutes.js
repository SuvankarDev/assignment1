const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

/* ===================== LIST ROUTES ===================== */

router.get("/lists", taskController.getLists);
router.post("/lists", taskController.addList);

/* ===================== TASK ROUTES ===================== */

router.get("/tasks/:listId", taskController.getTasksByList);
router.post("/tasks", taskController.addTask);
router.put("/tasks/urgent/:id", taskController.toggleUrgent);
router.put("/tasks/completed/:id", taskController.toggleCompleted);

router.put("/tasks/move", taskController.moveTask);


module.exports = router;
