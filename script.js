

document.getElementById("input").addEventListener("input",function (e){
let lb=e.target.value;
 
    document.getElementById("gramOutput").innerHTML=(lb/0.0022046).toFixed(2);
    document.getElementById("kgOutput").innerHTML=(lb/2.2046).toFixed(2);
    document.getElementById("ozOutput").innerHTML=(lb*16).toFixed(2);
})