import renderTodos from './todo';
import saveTodo from './save';
import getTodos from './getTask';

const clearCompleted = () => {
  const clearCompleted = document.querySelector('.todo-clear');
  clearCompleted.addEventListener('click', () => {
    let todos = getTodos();
    todos = todos.filter((todo) => (
      !todo.completed
    ));
    todos = todos.map((todo, i) => {
      todo.index = i + 1;
      return todo;
    });
    saveTodo(todos);
    renderTodos();
  });
};

export default clearCompleted;