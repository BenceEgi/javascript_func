/**
* @type {{nationality: string, name: string, title: string, name2: string?, title2: string?}[]}
*/
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
const fejlec = ["Nemzetiseg", "Szerző", "Mű"]

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
tbody.setAttribute("id", "tb");
let tr = document.createElement("tr");

// Create header
for (const i of fejlec){
    let th = document.createElement("th");
    th.innerText = i;
    tr.appendChild(th);
}
thead.appendChild(tr);

//Add to table
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

/**
 * renders a table from the given array
 * @param data {{nationality: string, name: string, title: string, name2: string?, title2: string?}[]}
 */
function renderTableBody(data){
    const tbody = document.getElementById("tb");// Get tbody with "tb" id
    tbody.innerHTML = "";
    let td;
    let tr; let tr2;
    // Generate table
    for (const i in data){
        tr = document.createElement("tr");
        tr2 = document.createElement("tr");
        for (const j in data[i]){
            if (data[i].name2 && data[i].title2 && (j === "name2" || j === "title2")){
                console.log(j);
                td = document.createElement("td");
                td.innerText = data[i][j];
                tr2.appendChild(td);
            }
            else if (j !== "name2" && j !== "title2"){
                td = document.createElement("td");
                td.innerText = data[i][j];
                if (data[i].name2 && data[i].title2 && (j === "nationality")){td.rowSpan = 2}
                tr.appendChild(td);
            }
            td.addEventListener("click", (event) => {
                /**
                 * @type {HTMLTableCellElement}
                 */
                const element = event.target;
                /**
                 *
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
        tbody.appendChild(tr);
        if (tr2.querySelector("td")){
            tbody.appendChild(tr2);
        }
    }
}


/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("htmlform");
addEventListener("submit", (event) => {
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
     * @type {{nationality: string, name: string, title: string, name2: string, title2: string?}}
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

// Render table
renderTableBody(arr);