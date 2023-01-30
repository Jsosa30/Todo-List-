import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => {
  evento.preventDefault();// para evitar que la pagina se recarque y envie el formulario
  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');/* tomanos el input del calendario */

  const value = input.value;/* tomamos el valor de la tarea */
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY'); /* cambiamos el formato de la fecha que recibimos en date  con la libreria de moment */

  // con este if verificamos si alguno de los datos esta vacio y si esta  vacio retornamos no dejamos que se coloquen
  if (value == '' || date == '') {
    return;
  }

  input.value = '';// estoy cambiando el contenido del input lo estoy limpiando
  calendar.value = ''; // limpianos el calendario para que no quede la fecha

  const complete = false;  // para realizar la verificacion del boton de check

  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4() // le colocamos la libreria que genera los id unicos
  };

  list.innerHTML = ""; //abre el espacio y luego displayTasks le coloca el contenido 

  const taskList = JSON.parse(localStorage.getItem('tasks')) || []; // si no es tasks lo pasa a un array vacio 
  taskList.push(taskObj);

  localStorage.setItem('tasks', JSON.stringify(taskList));//almacenamos el array en formato string

  displayTasks();

};

export const createTask = ({ value, dateFormat, complete, id }) => { /* le decimos que vamos a  recibir del objeto que le pasamos */
  const task = document.createElement('li');// para crear el li
  task.classList.add('card');


  //backticks
  const taskContent = document.createElement('div');// creo  el div 

  const check = checkComplete(id);
  // verifica el estado y cambia el estilo del boton check
  if (complete) {
    console.log("completada");
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }


  //taskList.push(taskObj) ; // guardamos el objeto del localStorage en el array

  // sessionStorage.setItem("tasks",JSON.stringify(taskObj));
  /* usamos el sessionStorage con su metodo setItem que recibe 2 parametros
     la llave ,,,, y el valor segundo parametro es el valor
     clave .... valor

     usamos el metodo .Stringify para pasar el json recibido a string vamos a trasformar el objeto que creamos
  */

  const titleTask = document.createElement('span');/* creamos un span */
  titleTask.classList.add('task');// le agrego la clase
  titleTask.innerText = value; // le colocamos lo que esta en el input
  taskContent.appendChild(check);// agrega el boton check
  taskContent.appendChild(titleTask);// lo agregamos al contenido 
  // task.innerHTML = content;
  const dateElement = document.createElement('span');
  dateElement.innerHTML = dateFormat;/* le agregamos la fecha */

  task.appendChild(taskContent);// para agregarle el li 
  task.appendChild(dateElement); //agregamos el span con la fecha
  task.appendChild(deleteIcon(id)); // le colocamos el icono de eliminar

  return task;// para que retorne el elemento que usamos en la funcion addTask
};

