const router = require('express').Router();
const todoController = require('../../../controllers/todoController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');


router.route('/')
  .get(todoController.getTodos)
  .post(todoController.addTodo);

router.route('/:id')
  .get(todoController.getTodoById);

module.exports = router;
