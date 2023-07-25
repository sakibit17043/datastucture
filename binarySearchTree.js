class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    isEmpty(){
        return !this.root;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root=== null){
            this.root = newNode;
        }
        else{
            if(newNode){
                
            }
        }
    }
}
const bst = new BinarySearchTree();
console.log('is the tree empty?',bst.isEmpty());