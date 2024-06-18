// Code Here
//Clean Up Code
//Fetching the data from the api
fetch("https://api.openbrewerydb.org/breweries")
.then(r=> r.json())
.then(bars => {
    getRandom(bars)
})


//search function that allows users to input city,zip,and type, and populating 1 random bar within the parameters, in the results box everytime  
function getRandom(bars) {
    const formData = document.querySelector("#form1")
    formData.addEventListener("submit", (e)=> {
        e.preventDefault()
        
        //Selects the search feilds in the form and accesses the data 
        const zipInput = document.querySelector(`#fzip`).value.toLowerCase()
        const cityInput = document.querySelector(`#fcity`).value.toLowerCase()
        const stateInput = document.querySelector(`#fstate`).value.toLowerCase()

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

        // calcuates a index based on the length of the API data using its length
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

        //adding text content to search results with correct values from API as well as changing null values to equal Not Avaliable - check with Mariposa
        name.textContent = randomBar.country === null ? 'Name: Not Avaliable' : `Name: ${randomBar.name}`
        type.textContent = randomBar.country === null ? 'Type of Brewery: Not Avaliable' : `Type of Brewery: ${randomBar.brewery_type}`
        address.textContent = randomBar.address === null ? 'Address: Not Avaliable' : `Address: ${randomBar.address_1}`
        city.textContent = randomBar.city === null ? 'City: Not Avaliable' : `City: ${randomBar.city}`
        zip.textContent = randomBar.zip === null ? 'Zip: Not Avaliable' : `Zip Code: ${randomBar.postal_code}`
        state.textContent = randomBar.state === null ? 'State: Not Avaliable' : `State: ${randomBar.state}`
        country.textContent = randomBar.country === null ? 'Country: Not Avaliable' : `Country: ${randomBar.country}`
    })
}

//submit function to allow user to sumbit an "Experince", with a rating, comments, and 1 picture, function also populates name of bar in likes box.
const likeButton = document.querySelector(`#experience`)
likeButton.addEventListener("submit", (e) => {
    e.preventDefault()
    handleSubmit(e)
})   
// Add function to make sure they cant save empty bar into favorites

function handleSubmit(e){
    //collects all data and adds them to a new obj
    const name = document.querySelector(`#name`)
    const type = document.querySelector(`#brew`)
    const address = document.querySelector(`#address`)
    const city = document.querySelector(`#city`)
    const zip = document.querySelector(`#zip`)
    const state = document.querySelector(`#state`)
    const country = document.querySelector(`#country`)
    
    const newName = name.textContent.slice(6)
    const newType = type.textContent.slice(17)
    const newAddress = address.textContent.slice(9)
    const newCity = city.textContent.slice(6)
    const newZip = zip.textContent.slice(10)
    const newState = state.textContent.slice(7)
    const newCountry = country.textContent.slice(9)
    const newScore = e.target[`rate`].value
    const newComment = e.target[`comments`].value
    const newImage = e.target[`images`].value

    //creates new object with data from results as well as data that is inserted from experince 
    const likedBar = {
        name: newName,
        brewery_type: newType,
        address_1: newAddress,
        city: newCity,
        postal_code: newZip,
        state: newState,
        country: newCountry,
        score: newScore,
        comment: newComment,
        image_url: newImage,
        }
    posty(likedBar)
}

function posty(likedBar){
    console.log(likedBar)
    fetch('http://localhost:3000/bars',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },   
        body: JSON.stringify(likedBar)
    })
    .then(r => r.json())
    .then(bars => displayName(bars))
}

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
    score.textContent =  bars.score === "" ? "Rating: No Rating Given" : `Rating: ${bars.score}`
    comment.textContent = bars.comment === "" ? 'Comments: No Comments' : `Comments: ${bars.comment}`

    //Display Image
}

// focus function that when the user clicks on the title it has an easter egg pop up 
// Get the element using its class name
const textContainer = document.querySelector('.center');

// Add mouseover event listener
textContainer.addEventListener('mouseover', function() {
    textContainer.textContent = 'Please Drink Responsibly';
});

// Add mouseout event listener
textContainer.addEventListener('mouseout', function() {
    textContainer.textContent = 'Night Out';
});