// get data from the server using fetch and async/await
const getFetchBtn = document.getElementById("getFetch");
const getAsyncBtn = document.getElementById("getAsync");

// add event listeners
getFetchBtn.addEventListener('click', getDataFetch);
getAsyncBtn.addEventListener('click', getDataAsync);

// fetch data from the server
const apiURL = 'http://localhost:3000/api/cars';

// fetch data from the server
function getDataFetch() {
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => console.log(data));
};
// fetch data from the server using async/await
async function getDataAsync() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);

        let ulContent = "<ul>";
        for (const element of data) {
            ulContent += "<li>" + element.make + ": " + element.model + " " + element.year + " - $" + element.price + " - " + element.color + "</li>";

        }
        ulContent += "</ul>";

        document.getElementById("data").innerHTML = ulContent;
    } catch (error) {
        console.error('There has been an error with the fetch operation:', error);
    }
}
