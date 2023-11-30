let sample_array=[1,1,12,3,4,4,4,5,6]     

function digit_frequency(sample_array,data,index,result){

        if(!sample_array[index])
        return result;

        if(sample_array[index]==data){
            result+=1
        }

        return digit_frequency(sample_array,data,index+1,result)

}

let frequency=digit_frequency(sample_array,6,0,0)

console.log(frequency);