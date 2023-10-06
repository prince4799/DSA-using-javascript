//            0 ,1, 2,   3,     4,    5,    6,    7,     8,    9,
let key_pad=["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]

const keypad_combination=( keys )=>{
    // console.log("keys",keys);

    // if(!keys.length){return ['']}

    // let char_at_0= keys.charAt(0)
    // let first_char=key_pad[char_at_0].split('')
    // let rem_char=keys.substring(1);
    // let keypad_keys=[]
    // // first_char.map(item_1=>{
    // //     return keypad_keys.push(item_1+keypad_combination(rem_char))
    // // })
    // first_char.forEach(item_1 => {
    //     const combinations = keypad_combination(rem_char);
    //     combinations.forEach(item_2 => {
    //         keypad_keys.push(item_1 + item_2);
    //     });
    // });
    // return [...keypad_keys]
    if (!keys.length)return [""]
    return key_pad[keys.charAt(0)].split('').flatMap((letter) => {
        return keypad_combination(keys.substring(1)).map((combination) =>letter+combination);
    });
    
}

let combination=keypad_combination('678')

console.log("let combination", combination);