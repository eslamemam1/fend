/* Global Variables */

const apiKey = 'ca929a06b8a186b984d3a6259d89b66a' ;
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// btn and function using this btn click
const btn = document.getElementById('generate');
/** 
    const zipCode = document.querySelector('#zip').value;
    console.log(zipCode)
*/

const getWdata = async (zip) =>{
    const res = await fetch (`${url}?zip=${zip}&appid=${apiKey}`);
    try {
        return await res.json();
    } catch(error){
        console.log( 'error' , error)
    }
}

const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById("date").innerHTML =allData.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }

   btn.addEventListener('click', retrieveData )
