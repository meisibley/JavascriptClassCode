//let randNum = Math.floor(Math.random() * 10000);
console.log(randNum);

function randFunc(){
let randArray = [];
let arrNum = document.getElementById(tb-1).innerHTML;

for (i=0, i<arrNum, i++){
let randNum = Math.floor(Math.random() * 10000);
randArray.push(randNum);
}

document.getElementById("p1").innerHTML = randArray;
}