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
    for (let i = 0; i< arr.length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
