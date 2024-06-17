<<<<<<< HEAD
=======
// Code Here

//Fetching the data from the api
fetch("https://api.openbrewerydb.org/breweries")
.then(r=> r.json())
.then(bars => {
    getRandom(bars)
})


//search function that allows users to input city,zip,and type, and populating 1 random bar within the parameters, in the results box everytime  
function getRandom(bars) {
    const formData = document.querySelector("#form")
    formData.addEventListener("submit", (e)=> {
        e.preventDefault()
        
        //Selects the search feilds in the form and accesses the data 
        const zipInput = document.querySelector(`#fzip`).value.toLowerCase()
        const cityInput = document.querySelector(`#fcity`).value.toLowerCase()
        const stateInput = document.querySelector(`#ftype`).value.toLowerCase()

        // Filters bars based on what was entered in the search feild.
        let filteredBars = bars.filter(bar => {
            return (
                (cityInput === "" || bar.city.toLowerCase() === cityInput) &&
                (zipInput === "" || bar.postal_code.toLowerCase().includes(zipInput)) &&
                (stateInput === "" || bar.state.toLowerCase() === stateInput)
            );
        });
        //Throws error if you cant find a brewery with given criteria
        if (filteredBars.length === 0) {
            alert("No Breweries found with the given information.");
            return;
        }

        // takes  calcuates a index based on the length of the API data using its length
        const randomObj = Math.floor(Math.random() * filteredBars.length);
        const randomBar = filteredBars[randomObj] // selects random obj by the index

        //selecting all needed elements of HTML to Manipulate 
        const name = document.querySelector(`#name`)
        const type = document.querySelector(`#brew`)
        const address = document.querySelector(`#address`)
        const city = document.querySelector(`#city`)
        const zip = document.querySelector(`#zip`)
        const state = document.querySelector(`#state`)
        const country = document.querySelector(`#country`)
        const phone = document.querySelector(`#phone`)
        const website = document.querySelector(`#web`)
        //Need function that if value equals null or undefinded. says "Unavaliable"


        //adding text content to search results with correct values from API
        name.textContent = `Name: ${randomBar.name}`
        type.textContent = `Type of Brewery: ${randomBar.brewery_type}`
        address.textContent = `Address: ${randomBar.address_1}`
        city.textContent = `City: ${randomBar.city}`
        zip.textContent = `Zip Code: ${randomBar.postal_code}`
        state.textContent = `State: ${randomBar.state}`
        country.textContent = `Country: ${randomBar.country}`
        phone.textContent = `Phone: ${randomBar.phone}`
        website.textContent = `Website: ${randomBar.website}`
        
    })
    
}


//submit function to allow user to sumbit an "Experince", with a rating, comments, and 1 picture, function also populates name of bar in likes box.



//fetching data from db.json
fetch("http://localhost:3000/bars")
.then(r=> r.json())
.then(bars => {
    //console.log(bars)
    bars.forEach((bars)=> {
    displayName(bars)
    })
    
})

//function that displays the name of the bar (from search resuklts) everytime the "liked" button is clicked
function displayName(bars){
    const name = document.createElement("h4")
    const favorites = document.querySelector("#likes")
    name.textContent = bars.name
    favorites.append(name)
    favorites.addEventListener("click",()=>{
        handleClick(bars)
    })
}

//click function that allows users to click on liked bars and populate the data in Bar Highlight box with bar data as well as user rating and comments and photos.
function handleClick(bars){
    const name = document.querySelector(`#lname`)
    const type = document.querySelector(`#lbrew`)
    const address = document.querySelector(`#laddress`)
    const city = document.querySelector(`#lcity`)
    const zip = document.querySelector(`#lzip`)
    const state = document.querySelector(`#lstate`)
    const country = document.querySelector(`#lcountry`)
    const score = document.querySelector(`#lscore`)
    const comment = document.querySelector(`#lcomment`)

    name.textContent = `Name: ${bars.name}`
    type.textContent = `Type of Brewery: ${bars.brewery_type}`
    address.textContent = `Address: ${bars.address_1}`
    city.textContent = `City: ${bars.city}`
    zip.textContent = `Zip Code: ${bars.postal_code}`
    state.textContent = `State: ${bars.state}`
    country.textContent = `Country: ${bars.country}`
    score.textContent = `Rating: ${bars.score}`
    comment.textContent = `Comments: ${bars.comments}`
}






// focus function that when the user clicks on the title it has an easter egg pop up (to be determined)

// function easterEgg(){
//     const title = document.querySelector(`.center`)
//     title.addEventListener("focus",(e) => {
//         e.target.hidden.textContent = "Please Drink Responsibly"
//     })
//}
>>>>>>> justins
