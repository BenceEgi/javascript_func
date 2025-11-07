/**
 * @type {{szerzo: string, korszak: string, szerelmek1: string, szerelmek2: string}[]}
 */
let data = [
    {
        szerzo: "Balassi Balint",
        korszak: "reformacio",
        szerelmek1: "Losonczy Anna",
        szerelmek2: "Dobo Krisztina"
    },
    {
        szerzo: "Csokonai Vitéz Mihály",
        korszak: "felvilágosodás",
        szerelmek1: "Vajda Juliána",
    },
    {
        szerzo: "Petőfi Sándor",
        korszak: "magyar romantika",
        szerelmek1: "Mednyánszky Berta",
        szerelmek2: "Szendrey Júlia"
    },
    {
        szerzo: "Ady Endre",
        korszak: "20. század",
        szerelmek1: "Léda",
        szerelmek2: "Csinszka"
    },
];
/**
 * @type {{title: string, width: number}[]}
 */
const header = [
    {title: "Szerzo neve", width: 1}, 
    {title: "Korszak", width: 1}, 
    {title:"Szerelmek", width: 2}
];

let table = document.createElement("table");
let tbody = document.createElement("tbody");
let thead = document.createElement("thead");
let tr = document.createElement("tr");

/**
 * Létrehoz egy új cellát, a megadott adattal
 * @param {string} cellType megadja a cella típusát
 * @param {string} cellContent megadja a cella tartalmaát
 * @param {HTMLTableRowElement} parentRow megadja az elementet amihez hozzáadjuk
 * @returns {HTMLTableCellElement} visszadaja a cellát
 */
function createCell(cellType, cellContent, parentRow){
    let cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);
    return cell;
}

//Create header
for (const j in header){
    createCell("th", header[j].title, tr).colSpan = header[j].width;
}
thead.appendChild(tr);

//Create table data
for (const i in data){
    tr =  document.createElement("tr");
    for (const key in data[i]){
        createCell("td", data[i][key], tr).colSpan = (data[i].szerelmek2 == null && key == "szerelmek1" ? 2 : 0);
    }
    tbody.appendChild(tr);
}
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

// --- CREATE FORMS --- //
const forms = document.createElement("form");
forms.id = "form_js";
const title = document.createElement("h2");
title.innerText = "Javascript form";
forms.appendChild(title);
const button = document.createElement("button");
button.innerText = "Hozzáadás";


/**
 * @type {{id: string, text: string, type: string}[]}
 */
const inputs = [
    {id:"kolto_nev", text:"Költő neve:", type:"text"},
    {id:"korszak", text:"Korszak:", type:"text"},
    {id:"szerelem1", text:"Szerelme:", type:"text"},
    {id:"szerelem2", text:"Szerelme:", type:"text"}
]

// Create input fields
for (const inputObj of inputs)
    {createInput(inputObj.type, inputObj.text, inputObj.id, forms);}
forms.appendChild(button);

/**
 * @param {string} inputType
 * @param {string} labelText
 * @param {string} id
 * @param {HTMLFormElement} parentForms
 * @return void
 */
function createInput(inputType, labelText, id, parentForms){
    let label; let input;
    label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelText;

    input = document.createElement("input");
    input.type = inputType;
    input.id = id;
    input.name = id;

    parentForms.appendChild(label);
    parentForms.appendChild(document.createElement("br"));
    parentForms.appendChild(input);
    parentForms.appendChild(document.createElement("br"));
    parentForms.appendChild(document.createElement("br"));
}

document.body.appendChild(forms);