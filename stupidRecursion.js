

function isEven(n) {
    if (n == 0 || n ==1){
        let x = n;
        console.log(x == 0);
    } else if (n < 0) {
        return isEven(n + 2);

    } else {
        return isEven(n - 2);
    }
}

isEven(-10);