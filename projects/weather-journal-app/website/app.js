/* Global Variables */

const apiKey = 'ca929a06b8a186b984d3a6259d89b66a' ;
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// btn and function using this btn click
const btn = document.getElementById('generate');


btn.addEventListener('click',()=>{
    const zipCode = document.querySelector('#zip').value;
    const feelings = document.querySelector('#feelings').value;
    console.log(`${zipCode} and ${feelings}`)
})


