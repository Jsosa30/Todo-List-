import { displayTasks } from "./readTasks.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

// funciones que crean el icono de la basura y la funcion de eliminar
const deleteTask = (id) => {
  const li = document.querySelector("[data-list]") //tomamos toda la lista
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item)=> item.id == id);
  tasks.splice(index,1); // eliminamos 1 elemento
  console.log(index)
  console.log(tasks);
  li.innerHTML = ""; // la limpiamos
  // volvemos a almacenar en localStorage lo que eliminamos
  localStorage.setItem("tasks", JSON.stringify(tasks));
 // refrescamos la pantalla
  displayTasks(); // volvemos a llenar la lista con el cambio
};

export default deleteIcon;
