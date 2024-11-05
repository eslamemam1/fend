/* Global Variables */

const { error } = require("console");
const { response } = require("express");

const apiKey = 'ca929a06b8a186b984d3a6259d89b66a' ;
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// btn and function using this btn click
const btn = document.getElementById('generate');
const zipCode = document.querySelector('#zip');
const feelings = document.querySelector('#feelings');

btn.addEventListener('click',()=>{
    console.log(`${zipCode.value} and ${feelings.value}`)
})

// fetch data 
const getData = async (zipCode) =>{
    try{
        const response = await fetch (`${url}?zip=${zipCode}&appid=${apiKey}`)
        if(response.ok){
            const data = await response.json();
            return data ;
        }else{
            console.log('faild to fetch data')
        }
    } catch(error){
        console.log(error , 'faild to fetch data')
    }
}

// post data to the server
const postData = async (url = '' , data = {})=>{
    console.log(data);
    const response = await fetch (url , {
        method : 'POST',
        credentials : 'same-origin',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData ;
    }catch(error){
        console.log(error , 'error')
    }
}


