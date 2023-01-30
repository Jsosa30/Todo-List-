export const uniqueDates = (tasks)=>{

    const unique =  [];

    tasks.forEach(tasks =>{
        if (!unique.includes(tasks.dateFormat)){
            unique.push(tasks.dateFormat);
        }
    })

    return unique;

}

// con esta funcion arreglamos que las tareas salgan ordenadas por fecha
export const orderDates = (dates)=>{
    return  dates.sort((a,b)=>{
        const fristDate = moment(a, 'DD/MM/YYYY'); // trasformamod en formato de fecha
        const secondDate = moment(b, 'DD/MM/YYYY'); // transformamos en formato de fecha
        return fristDate - secondDate;
    })
}