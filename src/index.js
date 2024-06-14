// Code Here

//Fetching the data from the api
fetch("https://api.openbrewerydb.org/breweries")
.then(r=> r.json())
.then(bars => {
    //main function holding all event listeners
    console.log(bars)
    main(bars)
})

//Implement drop down menu for type search with all possible types of bars included in data
//on website it has a list of all the types

//search function that allows users to input city,zip,and type, and populating 1 random bar within the parameters, in the results box everytime  
function getRandom(bars) {
    const formData = document.querySelector("#form")
    formData.addEventListener("submit", (e)=> {
        e.preventDefault()
        console.log(e)
        // take value of city, create new array of all cities that match, and from that new array get random. 
        const randomObj = Math.floor(Math.random() * bars.length);
        console.log(randomObj)
        const randomBar = bars[randomObj]
        console.log(randomBar) 

        const results = document.querySelector(`#searchResults`)
        const name = document.querySelector(`#name`)
        const type = document.querySelector(`.type`)
        const address = document.querySelector(`.address`)
        const city = document.querySelector(`.city`)
        const zip = document.querySelector(`.zip`)
        const state = document.querySelector(`.state`)
        const country = document.querySelector(`.country`)
        const phone = document.querySelector(`.phone`)
        const website = document.querySelector(`.web`)

        name.textContent = randomBar.name
        console.log(name)

        
        console.log(name)
        
    })
    
}


//submit function to allow user to sumbit an "Experince", with a rating, comments, and 1 picture, function also populates name of bar in likes box.



//click function that allows users to focus over liked bars and populate the data in 2nd results bar with bar data as well as user rating and comments and photos.



// focus function that when the user clicks on the title it has an easter egg pop up (to be determined)



//main function that has a submit, click, and focus event listener that calls the function everytime. 

function main(bars){
    getRandom(bars)
}