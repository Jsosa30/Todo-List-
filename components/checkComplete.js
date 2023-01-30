const checkComplete = (id) => {
  const i = document.createElement('i');// creamos un elemento i
  i.classList.add('far', 'fa-check-square', 'icon');// le agregamos las clases en este caso son 3
  i.addEventListener('click',(event) => completeTask(event,id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event,id) => {
  // para ver el objetivo que estoy apuntando
  const element = event.target;
  // toggle lo que hace es que si existe lo quita y sino lo pone la clase
  element.classList.toggle('fas');// le agregamos la clase al elemento
  element.classList.toggle('completeIcon');// agregamos la clase que cambia el color
  element.classList.toggle('far');// le quitamos la clase que  hace el check
  const tasks = JSON.parse(localStorage.getItem("tasks")); // tomamos lo que estra guardados
  const index = tasks.findIndex((item) => item.id == id); // lo recorremos y buscamos el id
  console.log(index);
  tasks[index]["complete"] = !tasks[index]["complete"]; // cambiamos el valor del complete
  localStorage.setItem("tasks", JSON.stringify(tasks)); // guardamos el arreglo dentro del localStorage
};

export default checkComplete;
