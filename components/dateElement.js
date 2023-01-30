

export const dateElement = (date)=>{
    const dateEqual = document.createElement('li');
    dateEqual.classList.add('date');
    dateEqual.innerHTML = date;
    return dateEqual;
}