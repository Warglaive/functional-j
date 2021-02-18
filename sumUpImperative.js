function sumUp(numbers) {
    let x = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
        x += numbers[index];
    }
    return x;
}
var arr = [1,2,3];
console.log(sumUp(arr));