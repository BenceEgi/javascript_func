/**
     * @type {{nationality: string, name: string, title: string, name2: string?, title2: string?}}
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
    if (tr2.querySelector("td")){
        tbody.appendChild(tr2);
    }
}

addEventListener("click", (event) => {
    /**
     * @type {HTMLTableColElement}
     */
    const element = event.target;
    element.classList.add("marked")
})

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
    const dataStructTemplate = {
        nationality: inputs[0].value,
        name: inputs[1].value,
        title: inputs[2].value,
        name2: !inputs[3].value ? null : inputs[3].value,
        title2: !inputs[4].value ? null : inputs[4].value,
    };

    const tbody = document.getElementById("tb");
    let tr = document.createElement("tr");
    let tr2 = document.createElement("tr");
    let td;
    for (const i in dataStructTemplate){
        if (dataStructTemplate.name2 && dataStructTemplate.title2 && (i === "name2" || i === "title2")){
           console.log(i);
           td = document.createElement("td");
           td.innerText = dataStructTemplate[i];
           tr2.appendChild(td);
        }
        else if (i != "name2" && i != "title2"){
           td = document.createElement("td");
           td.innerText = dataStructTemplate[i];
           if (dataStructTemplate.name2 && dataStructTemplate.title2 && (i === "nationality")){td.rowSpan = 2}
           tr.appendChild(td);
        }
    }
    tbody.appendChild(tr);
    if (tr2.querySelector("td")){
        tbody.appendChild(tr2)
    }
})

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);