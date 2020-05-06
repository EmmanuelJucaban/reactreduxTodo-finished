const { Todo } = require('../models');

module.exports = {
  getTodos: async (req, res) => {
    console.log(req.user);
    try {
      const todos = await Todo.find();
      if (!todos) {
        return res.json({ error: 'No todos found' });
      }
      return res.json(todos);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  addTodo: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.status(403).json({ error: 'You must provide a text' });
    }
    try {
      const newTodo = await new Todo({ text, user: req.user._id }).save();
      req.user.todos.push(newTodo);
      await req.user.save();
      return res.status(200).json(newTodo);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findById(id);
      if (!todo) {
        return res.status(404).json({ error: 'No todo found with that id'});
      }
      return res.json(todo);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const todo = await Todo.findByIdAndDelete(id);
      console.log(todo);
      if (!todo) {
        return res.status(404).json({ error: 'No todo found with that Id'});
      }
      return res.json({ todo });
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  updateTodoById: async (req, res) => {
    const { id } = req.params;
    const { completed, text } = req.body;
    try {
      const todo = await Todo.findByIdAndUpdate(id,
        { completed, text },
        { new: true });
      if (!todo) {
        return res.status(404).json({ error: 'No todo found with that Id'});
      }
      return res.json(todo);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
