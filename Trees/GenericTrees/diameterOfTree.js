

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


    

    diameter_of_tree(node) {
        if(!node) return
        let result=[];
        for (let child of node.children){
            result.push(this.diameter_of_tree(child))
            
        }
    }
    
 
    
    
    

}



let tree = new generic_tree()
let arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]
for (i = 0; arr[i] != undefined; i++) {
    tree.insert_node(arr[i])
}
let find_k_kargest = tree.diameter_of_tree(tree.root,tree.root,Number.NEGATIVE_INFINITY)
console.log(find_k_kargest != null ? find_k_kargest : 'Unable to find.'); find_k_kargest