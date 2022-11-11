import './style.css';
import addTodo from './modules/add';
import renderTodos from './modules/todo';

const createTodoForm = document.querySelector('#todo-form');
renderTodos();

createTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(createTodoForm);
  renderTodos();
});
