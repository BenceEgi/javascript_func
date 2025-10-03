/**
 * @type {{theme: string, time: string, scientist1: string, scientist2: string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]
const table = document.createElement("table");
const thead = document.createElement("thead");
let sor = document.createElement("tr");
const tbody = document.createElement("tbody");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
th1.innerText = "Fizika területe";
th2.innerText = "Időszak";
th3.innerText = "Képviselők";
th3.colSpan = 2;
sor.appendChild(th1);
sor.appendChild(th2);
sor.appendChild(th3);
thead.appendChild(sor);
table.appendChild(thead);
table.appendChild(tbody);

for (let i = 0; i<arr.length; i++){
    sor = document.createElement("tr");
    for (const j in arr[i]){
        let data = document.createElement("td");
        data.innerText = arr[i][j];
        if (arr[i].scientist2 == null && j == "scientist1"){data.colSpan = 2}
        sor.appendChild(data)
    }
    tbody.appendChild(sor);
}

document.body.appendChild(table);