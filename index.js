const inputSearch = document.querySelector("search-movie")
const search = document.getElementById("search-button")
const result = document.getElementById("result")
const baseUrl = "http://www.omdbapi.com/"
const apikey = "&apikey=f83f09ee"


// create a function to render movies cards



// create a function for the search bar



function searchMovie() {
    search.addEventListener("submit") = inputSearch.value
}
 
console.log(searchMovie)

fetch(`${baseUrl}?i=tt3896198${apikey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })




//  ?i=tt3896198
