// DATA ---------------------------------------------------
/**
 * @type {TableObj}
 */
const tableObj = {
    header: ["Nemzetiseg", "Szerző", "Mű"],
    data: [
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
    }]
}
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

// RENDER ---------------------------------------------------
// --- Create Table ---
generateTable("tb", tableObj.header);
renderTableBody(tableObj.data, "tb");

// --- Create Forms ---
// Render form
const formJs = renderForm(inputs, "jsForms");
formJs.addEventListener("submit", (event) => {AddRow(tableObj, event)}) // Add (AddRow) Event to form