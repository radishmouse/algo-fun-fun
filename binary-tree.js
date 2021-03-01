/*
A binary tree node will look like this:
    {
        value: 5,
        left: (ptr to another node),
        right: (ptr to another node)
    }
*/
// tree (binary, red/black etc.)
// trie (super fancy data structure that is used nowadays for: immutable data structures and search-as-you-type aka autosuggest)

const names = [
    "smith",
    "jones",
    "rose",
    "martha",
    "smith",
    "k-9",
];

// constructor function
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

Node.prototype.setLeft = function (left) {
    this.left = left;
};

Node.prototype.setRight = function (right) {
    this.right = right;
}

Node.prototype.insert = function (node) {
// a node is new and is an instance of Node
    // If node.value is "less than" this.value, assign it as 
    // our left.
    // Else if node.value is "greater than" this.value,
    // assign it as our right;
    
    if (node.value < this.value) {
        if (this.left) {
            this.left.insert(node);
        } else {
            this.setLeft(node);
        }
    } else if (node.value > this.value){
        if (this.right) {
            this.right.insert(node);
        } else {
            this.setRight(node);
        }
    } else {
        console.log('whoops');
    }
};

Node.prototype.traverse = function () {
    if (this.left) {
        this.left.traverse();
    }
    console.log(this.value);
    if (this.right) {
        this.right.traverse();
    }
}

const root = new Node('smith');
root.insert(new Node('jones'))
root.insert(new Node('alex'));
root.insert(new Node('k-9'));
root.insert(new Node('martha'));
root.insert(new Node('zed'));
root.insert(new Node('sparrow'));
console.log(root);

root.traverse();


module.exports = {
    Node
}


