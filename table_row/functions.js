/**
 * @typedef {{nationality: string, name: string, title: string, name2: string?, title2: string?}} CountryWriters
 * @typedef {{id: string, text: string, type: string}} InputData
 * @typedef {{header: string[], data: CountryWriters[]}} TableObj
 */

// --- Event Functions
/**
 * Handle cell marking
 * @param {Event} event
 */
function Marked(event){
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
}

/**
 * Adds row to table
 * @param {TableObj} tableObj
 * @param {Event} event
 */
function AddRow(tableObj, event){
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
    tableObj.data.push(dataStruct);
    renderTableBody(tableObj.data)
}

// --- Form Functions ---
/**
 * Render out input field to form
 * @param {HTMLFormElement} form 
 * @param {InputData} inputData
 */
function renderForm(form, inputData){
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.classList.add("error");
    div.appendChild(span);
    for (let i = 0; i < inputData.length; i++)
    {
        createInput(div, inputData[i])
    }
    const button = document.createElement("button");
    button.innerText = "Hozzáadás"
    div.appendChild(button);
    form.appendChild(div);
}

/**
 * Create input fields with labels
 * @param {HTMLDivElement} div 
 * @param {InputData} inputData
 */
function createInput(div, inputData){
    const label = document.createElement("label");
    label.htmlFor = inputData.id;
    label.innerText = inputData.text;

    const input = document.createElement("input");
    input.id = inputData.id;
    input.type = inputData.type;
    input.name = inputData.name;

    div.appendChild(label);
    div.appendChild(document.createElement("br"));
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
}


function validateFields(){
    let validFlag = true;
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
                td = createTableCell("td", data[i][j], tr2);
            }
            else if (j !== "name2" && j !== "title2"){
                td = createTableCell("td", data[i][j], tr);
                if (data[i].name2 && data[i].title2 && (j === "nationality")) td.rowSpan = 2;
            }
            td.addEventListener("click", Marked)
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