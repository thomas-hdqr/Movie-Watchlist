const inputSearch = document.querySelector("search-movie")
const searchContainer = document.querySelector("[data-search]")
const result = document.getElementById("result")
const baseUrl = "http://www.omdbapi.com/"
const apikey = "&apikey=f83f09ee"

let movieArray = []



// create a function for the search bar
  searchContainer.addEventListener("input",  e => {
    const value = e.target.value
    console.log(value)
})




// create a function to render movies cards


// fetch(`${baseUrl}?t=${searchContainer}${apikey}`)
// .then(res => res.json())
// .then(data => console.log(data))



// 

// function renderMovie() {
//     let html = ""
//     for (let movie of movieArray) {
//         html += `
//             <h3>${movie.title}</h3>
//             <p>${movie.body}</p>
//             <hr />
//         `
//     }
//     document.getElementById("blog-list").innerHTML = html
    
// }

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         movieArray = data.slice(0, 5)
//         renderMovie()
//     })




// function searchMovie() {
//     search.addEventListener("submit") = inputSearch.value
// }
// console.log(searchMovie)


