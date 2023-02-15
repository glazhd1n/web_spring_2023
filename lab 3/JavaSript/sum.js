function sumInput() {
    let sum = 0;
    let number = []
    while (true) {
        let value = prompt("Input number", 0);
        if (value == '' || value == null || !isFinite(value)) break;

        number.push(+value)
    }
    for (let numbers of number) {
        sum += numbers;
    }
    return sum
}

alert(sumInput())