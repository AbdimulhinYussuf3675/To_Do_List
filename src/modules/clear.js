import renderTodos from './todo';
import saveTodo from './save';
import getTodos from './getTask';

const markCompletedTodo = () => {
  const ckeckboxes = document.querySelectorAll('.checkbox');
  ckeckboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const index = Number(checkbox.id);
      const todos = getTodos();

      if (todos[index - 1].completed) {
        todos[index - 1].completed = false;
      } else {
        todos[index - 1].completed = true;
      }

      saveTodo(todos);
      renderTodos();
    });
  });
};

export default markCompletedTodo;