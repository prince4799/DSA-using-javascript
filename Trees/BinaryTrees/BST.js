/**
 * insertion of leaf
 * counting the level
 * Depth/Breadth -first search
 * Deletion of leaf
 */


class Leaf {
 
    constructor(data) {
        this.left = null;
        this.value = data; 
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.level = 0

    }

    isEmpty() {
        // console.log(`The tree is empty ${this.root === null}`);
        return this.root === null;
    }

    insert(data) {
        let leaf = new Leaf(data)
        if (this.isEmpty()) {
            this.root = leaf;
            return;
        }
        this.insertNode(this.root, leaf)
    }
    insertNode(root, node) {
        if (node.value <= root.value && root.left === null) {
            return root.left = node;
        }
        if (node.value > root.value && root.right == null) {
            return root.right = node;
        }
        this.insertNode(node.value <= root.value ? root.left : root.right, node)

        // if (node.value <= root.value) {
        //     if (root.left === null) {
        //         return root.left = node;
        //     }
        //     this.insertNode(root.left, node)

        // } else {
        //     if (root.right == null) {
        //         return root.right = node;
        //     }
        //     this.insertNode(root.right, node)
        // }
    }

    maxDepth(root,arr) {
        if(!root||!root.value){
        arr.push(null)
        }else
        arr.push(root.value)
        if (!root) {
            return 0;
        }

        let leftDepth = this.maxDepth(root.left,arr);
        let rightDepth = this.maxDepth(root.right,arr);

        if (leftDepth > rightDepth)
           { console.log("arr...",arr);
            return leftDepth + 1;
    }
        else{
            console.log("arr...",arr);
            return rightDepth + 1;
        }
    }

    search(root, value) {

        if (!root) {
            return false
        }
        if (root.value == value) {
            return true
        }
        if (value < root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    maxOfTree(root){

        if(!root)
        return -1e9 ;

       const maxLeft=this.maxOfTree(root.left);
       const maxRight=this.maxOfTree(root.right);

       return Math.max(root.value,maxLeft,maxRight)

    }

    sizeOfTree(root){

        if(!root){
            return 0;
        }
        const left=this.sizeOfTree(root.left)
        const right=this.sizeOfTree(root.right)

        return left+right+1;

    }

    addOfTree(root){
        if(!root){
            return 0;
        }

        const left=this.addOfTree(root.left)
        const right=this.addOfTree(root.right)

        return left+right+root.value;    }

    

    inOrder(root){
        if(!root){
            return ;
        }

        const left =this.largestPath(root.left)
        console.log(node.value);
        const right =this.largestPath(root.right)
    }
}

const bst = new BST()
let arr=[]
// bst.isEmpty()
bst.insert(50)
bst.insert(25)
bst.insert(12)
bst.insert(37)
bst.insert(75)
bst.insert(62)
bst.insert(87)
bst.insert(9)
// bst.insert(11)
// bst.insert(10)
// bst.insert(16)
// bst.largestPath(bst.root,arr,1)
const depth=bst.maxDepth(bst.root,arr)
const max=bst.maxOfTree(bst.root)
const size=bst.sizeOfTree(bst.root)
const add =bst.addOfTree(bst.root)
// console.log(bst.search(bst.root, 10));
// console.log(add);