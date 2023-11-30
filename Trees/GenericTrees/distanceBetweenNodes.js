

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

    find_node_to_root_path(node, data) {

        if (!data) return `Please provide valid data as ${data} is invalid.`

        if (node.value == data) {
            return [node.value]
        }

        for (let child of node.children) {
            let result = this.find_node_to_root_path(child, data)
            if (result.length > 0) {
                return [...result, node.value,]
            }
        }
        return []
    }

    find_distance_between_nodes(node, first_data, second_data) {

        if (!first_data || !second_data) return `Invalid values unable to find.`

        let first_data_array = this.find_node_to_root_path(node, first_data)
        let second_data_array = this.find_node_to_root_path(node, second_data)
        // console.log('first_data_array', first_data_array);
        // console.log('second_data_array', second_data_array);
        
        let i = first_data_array.length - 1, j = second_data_array.length - 1;
        while (i >-1 && j > -1 && first_data_array[i] == second_data_array[j]) {
            i--;
            j--;
            console.log(i,j);
        }
        return i+j+2;
    }
}



let tree = new generic_tree()
let arr = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]
for (i = 0; arr[i] != undefined; i++) {
    tree.insert_node(arr[i])
}
let find_leaf = tree.find_distance_between_nodes(tree.root, 60, 120)
console.log(find_leaf != null ? find_leaf : 'Unable to find.'); find_leaf