/**
 * @type {number}
 */
let szam = 2;

/**
 * @returns {void}
 */
function valami1(){
    console.log("valami1");
}

/**
 * @returns {void}
 */
function valami2(){
    console.log(szam);
}

/**
 * @returns {void}
 */
function valami3(){
    /**
     * @type {number}
     */
    let szamLoc = 3;
    console.log(szamLoc);
}

/**
 * @param {number} param
 * @returns {number}
 */
function valami3(param, a){
    /**
     * @type {number}
     */
    let szamLoc = 3;
    /**
     * @type {number}
     */
    let szamLoc2 = szamLoc + param;
    
    return szamLoc2;
}

valami1();
valami2();
/**
 * @type {number}
 */
const asd = valami3(4);
console.log(asd);