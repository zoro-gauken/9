let shuffled = [1,2,3,4]
let total = 0
let average = 0
shuffled.filter((value, number, array) => {
total += value
if (number) {
array.summa= total
array.kolvo = array.length
}
average = shuffled.summa / shuffled.kolvo
return false   
});

console.log(total);
console.log(average);


