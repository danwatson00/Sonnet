let prose = document.getElementById("sonnet").innerHTML;

console.log(prose);

var str = "orphans"

var n = prose.indexOf("orphans")

console.log(n);

var length = prose.length;

console.log(length);

var rep = document.getElementById("sonnet").innerHTML.replace("winter", "yuletide")

console.log(rep);

var rep2 = document.getElementById("sonnet").innerHTML.replace(/the /g, "a large ");

console.log(rep2);

document.getElementById("sonnet").innerHTML = rep2;
