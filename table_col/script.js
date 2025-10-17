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
 * @type {{szerzo: string, korszak: string, szerelmek: string}}
 */
const header = {szerzo: "Szerzo neve", korszak: "Korszak", szerelmek:"Szerelmek"};

let table = document.createElement("table");
let tbody = document.createElement("tbody");
let thead = document.createElement("thead");
let tr = document.createElement("tr");
table.appendChild(thead);
table.appendChild(tbody);

/*for (const headKeys in header){
    let th = document.createElement("th");
    th.innerText = header[headKeys];
    if (headKeys === "szerelmek"){th.colSpan = 2}
    tr.appendChild(th);
}
thead.appendChild(tr);

for (let i = 0; i < data.length; i++){
    tr = document.createElement("tr");
    for (const dataKeys in data[i]){
        let td = document.createElement("td");
        td.innerText = data[i][dataKeys];
        if (!data[i].szerelmek2 && dataKeys === "szerelmek1") {td.colSpan = 2}
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}*/

/**
 * @returns {void}
 */
function addRow(){

}

/**
 * Létrehoz egy új cellát, a megadott adattal
 * @param {string} cellType megadja a cella típusát
 * @param {string} cellContent megadja a cella tartalmaát
 * @param {HTMLTableRowElement} parentRow megadja az elementet amihez hozzáadjuk
 * @returns {void}
 */
function createCell(cellType, cellContent, parentRow){
    /**
     * @type {HTMLElement}
     */
    let cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);
}

document.body.appendChild(table);