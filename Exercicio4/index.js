var sp = 67836.43
var rj = 36678.66
var mg = 29229.88
var es = 27165.48
var outros = 19849.53

var total = sp + rj + mg + es + outros

console.log("--PERCENTUAIS--")
console.log("SP: " + (100 * sp/ total).toFixed(2) + "%")
console.log("RJ: " + (100 * rj/ total).toFixed(2) + "%")
console.log("MG: " + (100 * mg/ total).toFixed(2) + "%")
console.log("ES: " + (100 * es/ total).toFixed(2) + "%")
console.log("Outros: " + (100 * outros/ total).toFixed(2) + "%")