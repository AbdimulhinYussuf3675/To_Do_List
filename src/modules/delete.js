import renderTodos from './todo';
import saveTodo from './save';
import getTodos from './getTask';

const deleteTodo = () => {
  const trashIcons = document.querySelectorAll('.trash-icon');
  trashIcons.forEach((trashIcon) => {
    trashIcon.addEventListener('click', () => {
      const index = trashIcon.id;
      let todos = getTodos().filter((todo) => todo.index !== Number(index));
      todos = todos.map((todo, i) => {
        todo.index = i + 1;
        return todo;
      });

      saveTodo(todos);
      renderTodos();
    });
  });
};

export default deleteTodo;