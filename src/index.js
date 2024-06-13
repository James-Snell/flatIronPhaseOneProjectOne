// Code Here

//Fetching the data from the api
fetch("https://api.openbrewerydb.org/breweries")
.then(r=> r.json())
.then(bars =>{
    //main function holding all event listeners
    console.log(bars)
})

//search function that allows users to input city,zip,and type, and populating 1 random bar within the parameters, in the results box everytime  



//submit function to allow user to sumbit an "Experince", with a rating, comments, and 1 picture, function also populates name of bar in likes box.



//focus function that allows users to focus over liked bars and populate the data in 2nd results bar with bar data as well as user rating and comments and photos.



// click function that when the user clicks on the title it has an easter egg pop up (to be determined)



//main function that has a submit, click, and focus event listener that calls the function everytime. 