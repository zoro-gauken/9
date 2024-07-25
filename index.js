let shuffled = [1,2,3,4]
let total = 0
let average = 0
shuffled.filter((value, number, array) => {
total += value
if (number) {
array.summa= total
array.kolvo = array.length
}
return false   
});
average = shuffled.summa / shuffled.kolvo

console.log(total);
console.log(average);


