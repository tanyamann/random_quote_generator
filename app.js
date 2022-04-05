// console.log('connected!')
//const url="https://type.fit/api/quotes" 

// const button = document.getElementById('button');
// Fetching the quotes from the type.fit API using promises
// showQuote=()=>{
//         let displayQuote = document.querySelector(".displayQuote")
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json(); 
    }) // Getting the raw JSON data
    .then(function(data) {
        // Storing the quotes internally upon 
        // successful completion of request
        this.data = data; 
    // }) // Setting
        // Displaying the quote When the Webpage loads
        displayQuote() 
    
});
// Adding an onclick listener for the button
 
// Adding an onclick listener for the button
// function newQuote(){
// showQuote=()=>{
//     let displayQuote = document.querySelector(".displayQuote")
//     let url = "https://type.fit/api/quotes";

// fetch(url) 
//     .then(response =>{
//       return response.json()
//     })
//     .then(responseData => {
//         // console.log("response", responseData)
//         displayQuote.innerHTML = responseData.value;
//     })
    
// }
