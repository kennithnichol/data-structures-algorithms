function bubbleSort(array) {
    const size = array.length;
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([1,3,2,8,24,6,5,10]));
// expect
// [1,2,3,5,6,8,10,24]