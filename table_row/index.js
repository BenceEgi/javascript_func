// DATA ---------------------------------------------------

/**
 * @type {TableObj}
 */
const tableObj = {
    header: ["Nemzetiseg", "Szerző", "Mű"],
    data: [
    { 
        nationality: "Orosz",
        name: "Gogol",
        title: "A köpönyeg",
        name2: "Csehov",
        title2: "A csinovnyik halála",
    },
    {
        nationality: "Cseh",
        name: "Franz Kafka",
        title: "Az átváltozás",
    },
    {
        nationality: "Magyar",
        name: "Örkény István",
        title: "Egyperces Novellák",  
        name2: "József Attila",
        title2: "Klárisok",
    },
    {
        nationality: "Svájc",
        name: "Friedrich Dürrenmatt",
        title: "A fizikusok",
    }]
}
/**
 * @type {InputData[]}
 */
const inputs = [
    {id:"nemzetiseg", text:"Nemzetiség:", type:"text"},
    {id:"szerzo1", text:"Szerző:", type:"text"},
    {id:"mu1", text:"Mű:", type:"text"},
    {id:"szerzo2", text:"Másik Szerző:", type:"text"},
    {id:"mu2", text:"Mű:", type:"text"}
]

// RENDER ---------------------------------------------------

// --- Create Table ---
// Create HTMLTableElements
const table = document.createElement("table");
const tbody = document.createElement("tbody");
tbody.setAttribute("id", "tb");
table.appendChild(tbody);
document.body.appendChild(table);

// Render table
GenerateHeader(table, tableObj.header);
renderTableBody(tableObj.data);

// --- Create Forms ---
// Create HTMLFromElements
const form = document.createElement("form");
const h2 = document.createElement("h2");
h2.innerText = "Js form";
form.setAttribute("id", "jsForms")
form.appendChild(h2);
document.body.appendChild(form);

// Render form
renderForm(form, inputs);

// Add (AddRow) Event to form
/**
 * @type {HTMLFormElement}
 */
const formJS = document.getElementById("jsForms");
formJS.addEventListener("submit", (event) => {AddRow(tableObj, event)})

const eventHandler = (array) => {

    return (e) => {
        //sdasdsad
    }
}

addEventListener('asdsad', eventHandler(array))