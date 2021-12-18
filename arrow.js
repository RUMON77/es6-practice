const doubleIt = num => num * 2;
const add =(x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum* diff;
    return result;
}

const result1 = add(40, 30);
const result = doubleIt(500);
const result2 =doMath(7,5);

console.log(result2);