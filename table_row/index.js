/**
 * @typedef {{nationality: string, name: string, title: string, name2: string?, title2: string?}} CountryWriters
 * @typedef {{id: string, text: string, type: string}} InputData
 */

// --- Generate Table ---
// Data for table
/**
* @type {CountryWriters[]}
*/
const fejlec = ["Nemzetiseg", "Szerző", "Mű"]
const arr = [
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
    },
]

// Create HTMLTableElements
const table = document.createElement("table");
const tbody = document.createElement("tbody");
tbody.setAttribute("id", "tb");
table.appendChild(tbody);
document.body.appendChild(table);

// Render table
GenerateHeader(table, fejlec);
renderTableBody(arr);

// --- Create Forms ---
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

const forms = document.createElement("form");
const h2 = document.createElement("h2");
h2.innerText = "Js form";
forms.setAttribute("id", "jsForms")
forms.appendChild(h2);
document.body.appendChild(forms);

// Render form
renderForm(forms, inputs);

// --- Events ---
// Add row
/**
 * @type {HTMLFormElement}
 */
const formJS = document.getElementById("jsForms");
formJS.addEventListener("submit", (event) => {
    event.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const element = event.target;
    /**
     * @type {HTMLInputElement[]}
     */
    const inputs = element.querySelectorAll("input");
    /**
     * @type {CountryWriters}
     */
    const dataStruct = {
        nationality: inputs[0].value,
        name: inputs[1].value,
        title: inputs[2].value,
        name2: !inputs[3].value ? null : inputs[3].value,
        title2: !inputs[4].value ? null : inputs[4].value,
    };
    arr.push(dataStruct);
    renderTableBody(arr)
})

// --- Form Functions ---
/**
 * Render out input field to form
 * @param {HTMLFormElement} form 
 * @param {InputData} inputData
 */
function renderForm(form, inputData){
    for (let i = 0; i < inputData.length; i++)
    {
        createInput(form, inputData[i])
    }
    const button = document.createElement("button");
    button.innerText = "Hozzáadás"
    form.appendChild(button);
}

/**
 * Create input fields with labels
 * @param {HTMLFormElement} form 
 * @param {InputData} inputData
 */
function createInput(form, inputData){
    const label = document.createElement("label");
    label.htmlFor = inputData.id;
    label.innerText = inputData.text;

    const input = document.createElement("input");
    input.id = inputData.id;
    input.type = inputData.type;
    input.name = inputData.name;

    form.appendChild(label);
    form.appendChild(document.createElement("br"));
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
}

// --- Table Functions ---

/**
 * Renders a table from the given array
 * @param data {CountryWriters[]}
 */
function renderTableBody(data){
    const tbody = document.getElementById("tb");// Get tbody with "tb" id
    tbody.innerHTML = "";
    let td; let tr; let tr2;
    // Generate table
    for (const i in data){
        tr = document.createElement("tr");
        tr2 = document.createElement("tr");
        for (const j in data[i]){
            if (data[i].name2 && data[i].title2 && (j === "name2" || j === "title2")){
                console.log(j);
                td = createTableCell("td", data[i][j], tr2);
            }
            else if (j !== "name2" && j !== "title2"){
                td = createTableCell("td", data[i][j], tr);
                if (data[i].name2 && data[i].title2 && (j === "nationality")){td.rowSpan = 2}
            }
            td.addEventListener("click", (event) => {
                /**
                 * @type {HTMLTableCellElement}
                 */
                const element = event.target;
                /**
                 * @type {HTMLTableRowElement}
                 */
                const parentParentElement = element.parentElement.parentElement;
                const selectedElement = parentParentElement.querySelector(".marked");
                
                if (selectedElement != null){
                    selectedElement.classList.remove("marked");
                }
                element.classList.add("marked");
            })
        }
        // Add to table
        tbody.appendChild(tr);
        if (tr2.querySelector("td")){
            tbody.appendChild(tr2);
        }
    }
}

/**
 * Create table cells
 * @param {string} type
 * @param {string} cellData 
 * @param {HTMLTableRowElement} parentRow 
 * @returns {HTMLTableCellElement}
 */
function createTableCell(type, cellData, parentRow){
    /**
     * @type {HTMLTableCellElement}
     */
    const cell = document.createElement(type);
    cell.innerText = cellData;
    parentRow.appendChild(cell);

    return cell;
}

/**
 * Generate header cells
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList 
 */
function GenerateHeader(table, headerList){
    const thead = document.createElement("thead");
    let trHead = document.createElement("tr");

    // Create header
    for (const i of headerList){
        createTableCell("th", i, trHead)
    }
    thead.appendChild(trHead);

    //Add to table
    table.appendChild(thead);
}