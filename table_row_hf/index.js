/**
 * @type {{war: string, team1: string, team1Size: string, team2?: string, team2Size?: string}[]}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    /*{
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }*/
]

/**
 * @type {{header: string}[]}
 */
const headerArr = [
    {
        header: "Harc megnevezése",
    },
    {
        header: "Szembenálló felek",
    },
    {
        header: "Haderő",
    }
]

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
let tr = document.createElement("tr");

for (const headerIndex in headerArr){
    let th = document.createElement("th");
    th.innerText = headerArr[headerIndex].header;
    tr.appendChild(th);
}
thead.appendChild(tr);

for (const dataIndex in arr){
    const trFirst = document.createElement("tr");
    const trSecond = document.createElement("tr");
    for (const key in arr[dataIndex])
    {
        
    }
    tbody.appendChild(trFirst);
    tbody.appendChild(trSecond);
}

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);