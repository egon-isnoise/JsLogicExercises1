
/*function countBs(x){
    let count = 0;
    for (let letters = x.length; letters >= 0; letters --) {
        if (x[letters] == 'B') {
            count ++;
        }
    }
    return count;
}
*/

function countChar(x,y) {
    let count = 0;
    for (let letters = x.length; letters >= 0; letters --) {
        if (x[letters] == y) {
            count ++;
        }
    }
    return count;
}

console.log(countChar('Willie, Willy, Uillee. You never learn...', 'w'));