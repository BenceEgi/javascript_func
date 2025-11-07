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
let tr = document.createElement("tr");

for (const i of fejlec){
    let th = document.createElement("th");
    th.innerText = i;
    tr.appendChild(th);
}
thead.appendChild(tr);

let td;
let tr1;
let tr2;
for (const j in arr){
    tr1 = document.createElement("tr");
    tr2 = document.createElement("tr");
    for (const k in arr[j]){
        td = document.createElement("td");
        td.innerText = arr[j][k];
        if (arr[j].name2 && k == "nationality") {td.rowSpan = 2};
        if (arr[j].name2 && (k === "name2" || k === "title2")){
            tr2.appendChild(td);
        }
        else{tr1.appendChild(td)}
    }
    tbody.appendChild(tr1);
    tbody.appendChild(tr2);
}

addEventListener("click", (event) => {
    /**
     * @type {HTMLTableColElement}
     */
    const element = event.target;
    element.classList.add("marked")
})

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);