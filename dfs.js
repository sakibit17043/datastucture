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
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }
        else{
            this.insertValue(this.root,newNode)
        }
    }

    insertValue(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left = newNode;
            }
            else{
                this.insertValue(root.left,newNode)
            }
        }

        else{
            if(root.right === null){
                root.right = newNode;
            }
            else{
                this.insertValue(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(this.isEmpty()){
            return null;
        }
        else{
            if(root.value === value){
                return true;
            }
            else if(value<root.value){
                if(root.left === null){
                    return false;
                }
                else{
                    
                    return this.search(root.left,value);
                }
            }
            else{
                if(root.right === null){
                    return false;
                }
                else{
                    
                    return this.search(root.right,value);
                }
            }
        }
    }
    
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
             this.preOrder(root.right);
        }
       

    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            console.log(root.value);
            this.postOrder(root.right);
            this.postOrder(root.left);
        }
    }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5)
bst.insert(7)
bst.insert(3)
bst.insert(15)
console.log(bst.search(bst.root,7));
bst.postOrder(bst.root)