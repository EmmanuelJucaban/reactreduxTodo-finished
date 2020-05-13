const router = require('express').Router();
const {
  getUserTodos,
  getUserByEmail,
  updateTodoById,
  deleteUserTodoById,
  addTodo,
} = require('../../../controllers/userController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/users
router.route('/todos')
  .get(requireAuth, getUserTodos)
  .post(requireAuth, addTodo);

router.route('/todos/:todoId')
  .delete(requireAuth, deleteUserTodoById)
  .put(requireAuth, updateTodoById);


router.route('/email')
  .get(getUserByEmail);

module.exports = router;
