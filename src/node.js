class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }   
}

const node = new Node(12)
console.log(node);

module.exports = Node;
