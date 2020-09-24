

function range(start,end,step){
    let numbers = [start];
    let current = start;
    if (step == 1 || step == undefined){
        for (let i =start;  i <= end; i++){
            numbers.push(current ++);
        }
    } else if (step < 0){
        for (let i = start; i >= (end-step); i += step){
            numbers.push(current += step);
        }
    } else {
        for (let i =start;  i < (end-step); i+= step){
            numbers.push(current += step);
        }
    }  
    return numbers;
}

function sum(numbersArray){
    let current = 0;
    let total = 0;
    for (number in numbersArray){
        total += numbersArray[current++];
    }
    return total;
}




console.log(range(42,12, -4));