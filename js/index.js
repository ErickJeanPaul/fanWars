
const BASE_API_URL = "https://rickandmortyapi.com/";

const container = document.querySelector("#container"); 
const ul = document.createElement("ul");

fetch( `${ BASE_API_URL }/character` )
.then( (response) => {
    return response.json();
})
