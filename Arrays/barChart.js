/**
1     *
2     *
3     * *
4     * *
5*    * *
6*    * *
7* *  * *
 */

//Program for the max in array

function max_of_array(arr,index=0){

    if(!arr || !arr[index])
    return Number.NEGATIVE_INFINITY

    let max = max_of_array_1(arr, index + 1);
    return max> arr[index]? max : arr[index];
}

// Program for the bar chart 
function barChart(num_of_bars,heights_of_bars){

    let max_height=max_of_array(heights_of_bars)
    let index=0;
    for(let i=heights_of_bars[index]; )

    

}
