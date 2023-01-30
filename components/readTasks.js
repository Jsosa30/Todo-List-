import { createTask } from "./addTask.js";
import { dateElement } from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";


// esta funcion toma las tareas que se realizaron y las coloca en la lista de nuevo para poder verlas 
//las toma del localstorage

export const displayTasks = () => {
    const list = document.querySelector('[data-list]');
    const taskList = JSON.parse(localStorage.getItem('tasks')) || []; // tomanos lo que esta en el localstorage
    const dates = uniqueDates(taskList);
   

    orderDates(dates);
 

    // estamos mostrando las fechas
    dates.forEach(date => {
        const dateMoment = moment(date,'DD/MM/YYYY');

        list.appendChild(dateElement(date));
        // este forEach va a recorrer todo el array y los va a mostrar juntas la de la misma fecha
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat,'DD/MMM/YYYY');

            const diff = dateMoment.diff(taskDate);// para hacer la comparacion entre fechas

            if(diff == 0){
                list.appendChild(createTask(task));
            }
        });
    })
};

