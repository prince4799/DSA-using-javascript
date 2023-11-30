

function find_element_in_array(array=[1,2,3,4,5,6,7],data=3){

// let index_element=null;

for(let [index, item] of array.entries()){
    if(item==data){
        // index_element=index
        console.log(`Element found at ${index+1} place`);
        break;
    }
}

}

find_element_in_array()