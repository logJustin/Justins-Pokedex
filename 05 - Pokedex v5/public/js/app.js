
const searchBar = document.querySelector("#searchBar")
const searchButton = document.querySelector("#searchButton")

searchButton.addEventListener("click", (e) => {
    const inputURL = "http://localhost:3000/pokemon/" + searchBar.value
    window.location.href = inputURL
})