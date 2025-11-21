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
 * Adds a new row to JS table
 * @param {TableObj} tableObj
 * @param {Event} event
 */
function AddRowToJs(tableObj, event){
    event.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const element = event.target;
    /**
     * @type {HTMLInputElement[]}
     */
    const inputs = element.querySelectorAll("input");

    // Validation and error message handling
    if (!validateFields(inputs[0], inputs[1], inputs[2])) return;
    const spans = element.querySelectorAll(".error");
    for (const span of spans){span.innerText = "";}

    /**
     * @type {CountryWriters}
     */
    const dataStruct = {
        nationality: inputs[0].value,
        name: inputs[1].value,
        title: inputs[2].value,
        name2: !inputs[3].value ? undefined : inputs[3].value,
        title2: !inputs[4].value ? undefined : inputs[4].value,
    };
    tableObj.data.push(dataStruct);
    renderTableBody(tableObj.data)
}

/**
 * Adds a new row to HTML table
 * @param {TableObj} tableObj
 * @param {Event} event
 */
function AddRowToHTML(event){
    event.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const element = event.target;
    /**
     * @type {HTMLInputElement[]}
     */
    const inputs = element.querySelectorAll("input");

    // Validation and error message handling
    if (!validateFields(inputs[0], inputs[1], inputs[2])) return;
    const spans = element.querySelectorAll(".error");
    for (const span of spans){span.innerText = "";}

    /**
     * @type {CountryWriters[]}
     */
    const dataStruct = [{
        nationality: inputs[0].value,
        name: inputs[1].value,
        title: inputs[2].value,
        name2: !inputs[3].value ? undefined : inputs[3].value,
        title2: !inputs[4].value ? undefined : inputs[4].value,
    }];
    const table = document.getElementById("htmlTb");
    AddRow(dataStruct, table, 0)
}


// --- Form Functions ---
/**
 * Render out input field to form
 * @param {InputData[]} inputData
 * @param {string} formId
 * @return {HTMLFormElement}
 */
function renderForm(inputData, formId){
    const form = document.createElement("form");
    const div = document.createElement("div");

    form.setAttribute("id", formId);

    for (let i = 0; i < inputData.length; i++)
    {
        let span = document.createElement("span");
        span.classList.add("error");
        div.appendChild(span);
        div.appendChild(document.createElement("br"));
        createInput(div, inputData[i])
    }

    const button = document.createElement("button");
    button.innerText = "Hozzáadás"
    div.appendChild(button); form.appendChild(div); document.body.appendChild(form);
    return form;
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
    input.name = inputData.id;

    div.appendChild(label);
    div.appendChild(document.createElement("br"));
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
}

/**
 * Validates 3 fields
 * @param {HTMLInputElement} nemzetisegField
 * @param {HTMLInputElement} szerzoField
 * @param {HTMLInputElement} muField
 * @return {boolean}
 */
function validateFields(nemzetisegField, szerzoField, muField){
    let validFlag = true;
    if (!validateField(muField, "A mű mezőt kötelező kitölteni")) validFlag = false;
    if (!validateField(szerzoField, "A szerző mezőt kötelező kitölteni")) validFlag = false;
    if (!validateField(nemzetisegField, "A nemzetiség mezőt kötelező kitölteni")) validFlag = false;
    return validFlag;
}

/**
 * Validates one field, and put out the error message into the parent span
 * @param {HTMLInputElement} htmlInputField
 * @param {string} errorMessage
 */
function validateField(htmlInputField, errorMessage){
    let validFlag = true;
    if (!htmlInputField.value) {
        validFlag = false;
        let span = htmlInputField.parentElement.querySelector(".error")
        span.innerText = errorMessage;
    }
    return validFlag;
}

// --- Table Functions ---

/**
 * Generates the table and adds the headers
 * @param {string} tbodyId
 * @param {string[]} headerArr
 */
function generateTable(tbodyId, headerArr){
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    GenerateHeader(table, headerArr);
    tbody.setAttribute("id", tbodyId);
    table.appendChild(tbody);
    document.body.appendChild(table);
}

/**
 * Renders a table from the given array
 * @param {CountryWriters[]} data
 * @param {string} tbodyId
 */
function renderTableBody(data){
    const tbody = document.getElementById("tb");// Get tbody with "tb" id
    tbody.innerHTML = "";
    // Generate table
    for (const i in data){
        AddRow(data, tbody, i);
    }
}

/**
 * Create table rows from the given data
 * @param {CountryWriters} data
 * @param {HTMLTableRowElement} tr
 * @param {HTMLTableRowElement} tr2
 */
function GenerateRows(data, tr, tr2){
    let td;
    for (const j in data){
        if (data.name2 && data.title2 && (j === "name2" || j === "title2")){
            td = createTableCell("td", data[j], tr2);
        }
        else if (j !== "name2" && j !== "title2"){
            td = createTableCell("td", data[j], tr);
            if (data.name2 && data.title2 && (j === "nationality")) td.rowSpan = 2;
        }
        td.addEventListener("click", Marked)
    }
}

/**
 * Add rows to tbody
 * @param {CountryWriters[]} data
 * @param {HTMLElement} tbody
 * @param {number} index
 */
function AddRow(data, tbody, index){
    let tr; let tr2;
    tr = document.createElement("tr");
    tr2 = document.createElement("tr");
    // Create rows
    GenerateRows(data[index], tr, tr2);
    // Add to table
    tbody.appendChild(tr);
    if (tr2.querySelector("td")){
        tbody.appendChild(tr2);
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