

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
  
    find_node_to_root_path(node, data, subtree) {
        if (!data) return 'Please provide valid data as null cannot be found';
    
        if (node.value === data) {
            return [node.value];
        }
    
        for (let child of node.children) {
            const result = this.find_node_to_root_path(child, data, node);
            if (result.length > 0) {
                return [node.value, ...result]; // Include the current node in the result
            }
        }
    
        return [];
    }
    
}

let tree = new generic_tree()
let arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]
for (i = 0; arr[i] != undefined; i++) {
    tree.insert_node(arr[i])
}
let find_leaf = tree.find_node_to_root_path(tree.root, 110,tree.root)
console.log(find_leaf.length>0?find_leaf:'Required data not exists in the tree');