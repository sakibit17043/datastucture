class Node{
    constructor(data,left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BST{
    constructor() {
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node===null){
            this.root = new Node(data);
            return;
        }
        else{
            const searchTree = function(node){
                if(data<node.data){
                    if(node.left=== null){
                        node.left = new Node(data);
                        return;
                    }
                    else{
                         return searchTree(node.left)
                    }
                }
                else if(data>node.data){
                    if(node.right===null){
                        node.right = new Node(data);
                        return;
                    }
                    else{
                        return searchTree(node.right);
                    }
                }
                else{
                    return null
                }
            }
            return searchTree(node); 
        }
    }

    findMax(){
        let current = this.root;
        while(current.right!==null){
            current = current.right;
        }
        return current.data;
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findData(data){
        let current = this.root;
        while(current.data!==data){
            if(data<current.data){
                current = current.left;
            }
            else{
                current = current.right;
            }
            if(current === null){
                return null;
            }

        }
        return current;
    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(current.data === data){
                return true;
            }
            else if(data < current.data){
                current = current.left;
            }
            else{
                current =  current.right;
            }
        }
        return false;
    }

}
const tree = new BST();
tree.add(50); 
tree.add(22); 
tree.add(30); 
tree.add(36); 
tree.add(9); 
tree.add(78); 
tree.add(56); 
console.log(tree.findMax());
console.log(tree.findMin());
console.log(tree.isPresent(45));
console.log(tree.isPresent(56));
console.log(tree.findData(9));
console.log(tree.findData(50));

