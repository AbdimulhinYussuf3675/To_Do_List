import './style.css';
import addTodo from './modules/add.js';
import renderTodos from './modules/todo.js';

const createTodoForm = document.querySelector('#todo-form');
renderTodos();

createTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(createTodoForm);
  renderTodos();
});
