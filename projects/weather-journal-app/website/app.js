/* Global Variables */

const apiKey = 'ca929a06b8a186b984d3a6259d89b66a';
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// btn and function using this btn click
const btn = document.getElementById('generate');

// fetch data 
const getData = async (zipCode) => {
    try {
        const response = await fetch(`${url}?zip=${zipCode}&appid=${apiKey}`)
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log('faild to fetch data')
        }
    } catch (error) {
        console.log(error, 'faild to fetch data')
    }
}

// post data to the server
const postData = async (url, data) => {
    try {
        console.log(data);
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.log('error')
    }
};

// update ui

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

/**
 * const ui = async () => {
    try {
        const req = await fetch('/all');
        const aData = await req.json();
        document.getElementById('temp').innerHTML = `Temperature : ${Math.round(aData.temperature)}°F`
        document.getElementById('date').innerHTML = `Date : ${aData.date}`
        document.getElementById('content').innerHTML = `Feeling : ${aData.userResponse}`

    } catch (error) {
        console.log(error, 'error')
    }
}
 */

// event when i use the btn
btn.addEventListener('click', async () => {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const date = new Date().toLocaleDateString();
    //console.log(`${zipCode} and ${feelings}`)
    if (zipCode) {
        const getWData = await getData(zipCode);
        if (getWData && getWData.main) {
            await postData('/add', {
                temperature: getWData.main.temp,
                date: date,
                userResponse: feelings,
            })
            retrieveData();
        } else {
            alert('error')
        }
    } else {
        alert('error')
    }
})



