// Code Here

//Fetching the data from the api
fetch("https://api.openbrewerydb.org/breweries")
.then(r=> r.json())
.then(bars =>{
    //main function holding all event listeners
    console.log(bars)
})

//search function that allows users to input city, zip, and type, and populating 1 random bar within the parameters, in the results box everytime  



//submit function to allow user to sumbit an "Experince", with a rating, comments, and 1 picture, function also populates name of bar in likes box.
rateExperience.addEventListener("click",()=>{

    //need results tag in order to get information
//use these ids
// value.id.method
// to save data to json
// only save data to json when they like it 
// -->
//         <p id="name">Name:</p>
//         <p id="brew">Type of Brewery:</p>
//         <p id="address">Address:</p>
//         <p id="city">City:</p>
//         <p id="zip">Zip Code:</p>
//         <p id="state">State:</p>
//         <p id="country">Country:</p>
//         <p id="phone">Phone:</p>
//         <p id="web">Website:</p>
    if(!inLikes){
        console.log("Adding")
        book.users.push(currUser)
        fetch(`http://localhost:3000/books/${}`,{
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //     need to append these things
                // userRating: book.users
                // userComment:
                // userImages:
                value.name.
            })
        })
        .then(r=>r.json())
        .then(newBook =>{
            //append something to likes box
            console.log(newBook)

            displayBook(newBook)
        })
    }
    else{
        book.users = book.users.filter((user)=>{
            if(user.username === currUser.username){
                return false
            }
            return true
        })
        fetch(`http://localhost:3000/books/${book.id}`,{
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                users: book.users
            })
        })
        .then(r=>r.json())
        .then(newBook =>{
            displayBook(newBook)
        })
    }
})

//focus function that allows users to focus over liked bars and populate the data in 2nd results bar with bar data as well as user rating and comments and photos.



// click function that when the user clicks on the title it has an easter egg pop up (to be determined)



//main function that has a submit, click, and focus event listener that calls the function everytime. 