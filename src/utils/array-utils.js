export const random = () => {
    const from = 1 ;
    const to = 100;
    const length = 6;

    let result = [];
    for (let i = 0; i < length; i++) {
        const value = Math.floor(Math.random() * (from - to) + to);
        result.push(value);
    }
    return result;
}

export const reverse = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

let i = 0;
let j = 0;
let arr = [];

export const initSort = (inArr) => {
    arr = inArr;
}

export const doSortStep = (onComparison, onFinish, onClear) => {
    j = j + 1;

    if (j >= arr.length) {
        i++;
        j = i + 1;
    }  

    //comparison
    if (arr[i] <= arr[j]) {
        onComparison('less_or_equal', i, j);
    } else {
        onComparison('greater', i, j);
        //swap
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    //finish
    if (i === arr.length - 2 && j === arr.length - 1) {
        onFinish();
        i = 0;
        j = 0;
    }
}
