

const increasing = (num) => {

    if (num <= 0)
        return;

    increasing(num - 1);
    console.log(num);

}

increasing(5);