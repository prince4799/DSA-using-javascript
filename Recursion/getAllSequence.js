// function generateCombinations(str) {
//     function generateHelper(prefix, remaining) {
//       if (remaining === '') {
//         console.log(prefix);
//         return;
//       }
  
//       for (let i = 0; i < remaining.length; i++) {
//         generateHelper(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
//       }
//     }
  
//     generateHelper('', str);
//   }
  
//   // Example usage:
//   const inputString = 'abc';
//   generateCombinations(inputString);
  
function get_all_sequences(the_string, prefix){
    if (the_string === '') {
                return [prefix];
              }
              let arr_seq=[];
    for (let i=0 ;i<the_string.length;i++){
       arr_seq= [...arr_seq,...get_all_sequences(the_string.slice(0,i)+the_string.slice(i+1),prefix+the_string[i])]

    }
    return arr_seq
}


let arr_of_sequence = get_all_sequences('abc', '');
console.log(arr_of_sequence);