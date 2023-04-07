const getqoute = document.querySelector(".quote");
const authour = document.querySelector("#authour-p");
const ulListe = document.querySelector("#ulListen");
const dataquote = [];
const authorArray = [];

getqoute.addEventListener("click", () => {
    fetch("https://dummy-apis.netlify.app/api/quote")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            ulListe.innerText = data.quote;
            authour.innerText = data.author;
            console.log(data);

        });

});
