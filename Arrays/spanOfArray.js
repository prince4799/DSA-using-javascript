

function span_of_array(array=[1,2,3,4,5,6,7]){

    let min=Number.POSITIVE_INFINITY
    let max=Number.NEGATIVE_INFINITY

    // while loop is less efficient and require extra variable to iterate an array.
 
 /*   let index=0
    while(array[index]){
        if(array[index]<min){
            min=array[index]
        }
        if(array[index]>max){
            max=array[index]
        }
        index++;
    }
    */

    for(let item of array){
        if(item<min){
            min=item
        }
        if(item>max){
            max=item
        }
    }
    const span=max-min
    console.log("min",min);
    console.log("max",max);
    console.log("span",span);
}

span_of_array()

