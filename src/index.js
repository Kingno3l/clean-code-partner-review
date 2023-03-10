import './style.css';
const dataToDoList = [
  {
    description: 'Jumping',
    completed: true,
    index: 0,
  },
  {
    description: 'Running',
    completed: true,
    index: 1,
  },
  {
    description: 'Eating',
    completed: true,
    index: 2,
  },
  {
    description: 'Drinking',
    completed: false,
    index: 3,
  },
  {
    description: 'Sleeping',
    completed: true,
    index: 4,
  },
];

dataToDoList.forEach((n) => {
  const output = n.description;

  const containerList = document.getElementById('list-container');
  containerList.innerHTML += `
      <li class="list-to-do">
        <input type="checkbox" class="to-do">
        ${output}
        <i class="fa-solid fa-trash"></i>
      </li>
      <hr class="line">
    `;
});