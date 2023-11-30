

//=================== Type 1 ======================
const max_of_array_1 = (arr, index = 0) => {
    console.log("First time");

    if (!arr[index]) {
        return Number.NEGATIVE_INFINITY; // Return negative infinity to initialize max
    }

    let max = max_of_array_1(arr, index + 1);
    return max> arr[index]? max : arr[index];
    
    // console.log("---------"+index);
    // console.log("max_1",max);
    // console.log("max = "+max+" index "+index+" value " ,max> arr[index]? max : arr[index]);
    // return Math.max(max, arr[index]);
}

console.log(max_of_array_1([1, 2, 6, 4]));



