const todoInput = document.querySelector('.header-input');
const completedList = document.getElementById('completed');
const addTaskButton = document.getElementById('add');
const todoList = document.getElementById('todo');
const todoItem = todoList.querySelector('.todo-item');
const todoRemoveButton = document.querySelectorAll('.todo-remove');
const todoComleteButton = document.querySelectorAll('.todo-complete')

// Вызываем DOM и запускаем рендер
document.addEventListener('DOMContentLoaded', () => {
  runRender();
});

// создаем рендер пустой страницы
function runRender() {
  todoList.innerHTML = ''
  completedList.innerHTML = ''
};

addTaskButton.addEventListener('click', (event) => {
  event.preventDefault();
  addTodo();
});

function addTodo() {

  const taskText = todoInput.value.trim();
  // проверяем на пустую строку
  if (taskText !== '') {
    //создаем клон элемента
    const newTodoItem = todoItem.cloneNode(true);
    newTodoItem.querySelector('.text-todo').textContent = taskText;
    todoList.prepend(newTodoItem);

    // задаем кнопке удаления функцию
    const todoRemoveButton = document.querySelector('.todo-remove');
    todoRemoveButton.onclick = () => {
      const isCompleted = newTodoItem.parentElement.id === 'completed';
      if (isCompleted) {
        completedList.removeChild(newTodoItem);
      } else {
        todoList.removeChild(newTodoItem);
      };
    };

    // задаем кнопке-переключателю функцию
    const todoComleteButton = document.querySelector('.todo-complete')
    todoComleteButton.onclick = () => {
      const isCompleted = newTodoItem.parentElement.id === 'completed';
      if (isCompleted) {
        todoList.prepend(newTodoItem)
      } else {
        completedList.prepend(newTodoItem)
      };
    };
  } else {
    alert('Please enter a task')
  };
  // очищаем поле ввода
  todoInput.value = '';
};
