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



//click function that allows users to focus over liked bars and populate the data in 2nd results bar with bar data as well as user rating and comments and photos.



// focus function that when the user clicks on the title it has an easter egg pop up (to be determined)

function easterEgg(){
    const title = document.querySelector(`.center`)
    title.addEventListener("focus",(e) => {
        e.target.hidden.textContent = "Please Drink Responsibly"
    })
}

//main function that has a submit, click, and focus event listener that calls the function everytime. 

function main(bars){
    getRandom(bars)
    easterEgg()
}