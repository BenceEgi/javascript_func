/**
 * @type {{}}
 */
const obj = {};

/**
 * @type {number}
 */
const num = 34;
if (num > 5) obj.name = "uj name";
console.log(obj);
obj["name"] = "ujabb name";
console.log(obj["name"]);
console.log(obj.age);