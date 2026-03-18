let cityname = ["Delhi", "Pune", "Mumbai"];

cityname.forEach((val) => {
    console.log(val.toUpperCase());
});
let nums = [1, 2, 3, 4, 5];

let result1 = nums.filter((val) => {
    return val % 2 === 0;
});

console.log(result1);

let result2 = nums.map((val) => {
    return val * val;
});

console.log(result2);