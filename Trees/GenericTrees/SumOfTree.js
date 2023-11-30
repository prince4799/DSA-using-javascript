

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


    

    sum_of_tree(node, max_node, max_sum) {
        if (!node) return { max_sum, max_node };
    
        let sum = node.value;  // Initialize sum with the current node's value
    
        for (let child of node.children) {
            const child_result = this.sum_of_tree(child, max_node, max_sum);
            sum += Math.max(0, child_result.max_sum);  // Only add positive child sums
            console.log("sum", sum);
        }
    
        if (sum > max_sum) {
            max_node = node;
            max_sum = sum;
        }
    
        return { max_sum, max_node };
    }
    
 
    
    
    

}



let tree = new generic_tree()
let arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]
for (i = 0; arr[i] != undefined; i++) {
    tree.insert_node(arr[i])
}
let find_k_kargest = tree.sum_of_tree(tree.root,tree.root,Number.NEGATIVE_INFINITY)
console.log(find_k_kargest != null ? find_k_kargest : 'Unable to find.'); find_k_kargest