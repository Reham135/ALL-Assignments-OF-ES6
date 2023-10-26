
///////////////////////////////*task a*////////////////////////////////////

var fruits = ["apple", "strawberry", "banana", "orange","mango"]
/* const isStringsArray = fruits.every(function(el){
    return typeof el==="string"
}); */
let isStringsArray=fruits.every(el=> typeof el==="string");
console.log(isStringsArray);

///////////////////////////////*task b*////////////////////////////////////

/* let checkFruits=fruits.some(function(el){
    return el.startsWith ("a")
}); */
let checkFruits=fruits.some(el=>el.startsWith ("a"))
console.log(checkFruits);

///////////////////////////////*task c*////////////////////////////////////

/* let bsArray=fruits.filter(function(el){
    return el.startsWith ("b") + el.startsWith("s")
}); */
let bsArray=fruits.filter(el=>el.startsWith('b') || el.startsWith('s'))
console.log(bsArray);

///////////////////////////////*task d & e *////////////////////////////////////

/* let iLikeFruits=fruits.map(function(el){
return `i Like ${el}`
}) */
let iLikeFruits=fruits.map(el=>`i like ${el}`).forEach(el=>{
    console.log(el);

});


