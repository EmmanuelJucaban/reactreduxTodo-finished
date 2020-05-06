const router = require('express').Router();
const userTodosController = require('../../../controllers/userTodosController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

router.route('/')
  .get(requireAuth, userTodosController.getUserTodos);

router.route('/:todoId')
  .delete(requireAuth, userTodosController.deleteUserTodoById)
  .put(requireAuth, userTodosController.updateTodoById);

module.exports = router;
