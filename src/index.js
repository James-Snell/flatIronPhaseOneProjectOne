// Code Here

//Fetching the data from the api
fetch("https://api.openbrewerydb.org/breweries")
.then(r=> r.json())
.then(bars =>{
    console.log(bars)
})