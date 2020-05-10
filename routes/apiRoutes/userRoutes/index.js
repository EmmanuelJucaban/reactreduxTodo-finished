const router = require('express').Router();
const {
  getUserTodos,
  getUserByEmail,
  updateTodoById,
  deleteUserTodoById,
} = require('../../../controllers/userController');
const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/users
router.route('/todos')
  .get(requireAuth, getUserTodos);

router.route('/email')
  .get(getUserByEmail);

router.route('/todos/:todoId')
  .delete(requireAuth, deleteUserTodoById)
  .put(requireAuth, updateTodoById);

module.exports = router;
