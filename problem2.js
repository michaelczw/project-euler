const fibo = (limit) => {
    let t1 = 1;
    let t2 = 1;
    let nextTerm = 0;
    let array = [];
    while (nextTerm <= limit) {
        t1 = t2;
        t2 = nextTerm;
        nextTerm = t1 + t2;
        array.push(nextTerm);
    }
    return array.slice(0, -1).slice(1);
}

const sumOfEven = (array) => {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            totalSum += array[i];
        }
    }
    return totalSum;
}

console.log(sumOfEven(fibo(4000000)));