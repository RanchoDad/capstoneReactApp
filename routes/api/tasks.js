const express = require('express');
const router = express.Router();
const tasksController = require('../../controllers/api/tasks');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/tasks
router.get('/', tasksController.index)
router.post('/', ensureLoggedIn, tasksController.create);
router.get('/:id', tasksController.detail);
router.delete('/:id', ensureLoggedIn, tasksController.deleteTask);
router.put('/:id', tasksController.update)

module.exports = router;