/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import saveTodo from './save.js';
import getTodos from './getTask.js';

const validated = ({ description }, todos) => {
  description = description.value.trim();
  if (description.length > 0) {
    return { description, completed: false, index: todos.length + 1 };
  }
  return null;
};

const addTodo = (createTodoForm) => {
  const todos = getTodos();
  const todo = validated(createTodoForm, todos);
  todos.push(todo);
  if (todo === null) return;
  saveTodo(todos);
};

export default addTodo;