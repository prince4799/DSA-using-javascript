

class Leaf {
    constructor(data) {
        this.value = data;
        this.children = []
    }
}

class generic_tree {
    constructor() {
        this.root = null;
        this.stack = [];
    }

    insert_node(data) {

        if (!data) return;

        if (data == -1) {
            if (this.stack.length > 0)
                this.stack.pop()
            return;
        }
        let node = new Leaf(data)
        if (this.stack.length == 0) {
            this.stack.push(node)
            this.root = node;
        }
        else {
            this.stack[this.stack.length - 1].children.push(node)
            this.stack.push(node)
        }
    }


    ceil_floor_of_tree(node, data, ceil, floor) {
        if (!node) return `Invalid node, unable to find.`;
        if (!node.value) return;
        
        if (node.value > data) {
            if (node.value < ceil || ceil === undefined) {
                ceil = node.value;
            }
        }  else if (node.value < data) {
            if (node.value > floor || floor === undefined) {
                floor = node.value;
            }
        }
        
    
        for (let child of node.children) {
            const result = this.ceil_floor_of_tree(child, data, ceil, floor);
            ({ ceil, floor } = result);
        }
        // console.log("ceil floor->",{ceil,floor});
        return { ceil, floor };
    }

    k_th_largest_in_tree(node,k){
        let factor=Number.POSITIVE_INFINITY
        let floor=Number.NEGATIVE_INFINITY
        for (let i=1;i<=k;i++){
           const result= this.ceil_floor_of_tree(node,factor, Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY)
           factor=result.floor
           floor=Number.NEGATIVE_INFINITY
        //    console.log("result",result);
        }
        return factor;
    }
    
}



let tree = new generic_tree()
let arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]
for (i = 0; arr[i] != undefined; i++) {
    tree.insert_node(arr[i])
}
let find_k_kargest = tree.k_th_largest_in_tree(tree.root, 2)
console.log(find_k_kargest != null ? find_k_kargest : 'Unable to find.'); find_k_kargest