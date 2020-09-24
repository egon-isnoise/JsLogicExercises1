

function reverseArray(array){
    array2 = [];
    index = array.length;
    for (elements in array){
        array2.push(array[index-1]);
        index --;
    }
    return array2;
}

function reverseArrayPlace(array){
    last = array.length -1;
    first = 0;

    for (let i=0; i <= Math.floor((array.length-1) /2); i++){
        rememberNumber = array[last];
        array[last] = array[first];
        array[first] = rememberNumber;
        first++;
        last --;
    }
    return array;
 
}

console.log(reverseArrayPlace([1,2,3,4,5,6,7,8,9,10,11,12,13]));

