// console.log('connected!')
//const url="https://type.fit/api/quotes" 


// const button = document.getElementById('button');

showQuote=()=>{
    let displayFact = document.querySelector(".display-facts")
    let url = "https://type.fit/api/quotes";
}
fetch(url) 
    .then(response =>{
      return response.json()
    })
    .then(responseData => {
        console.log("response", responseData)
        displayFact.innerHTML = responseData.value;
    })
    
}
