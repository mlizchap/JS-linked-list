const Node = require('./node');

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    append(val) {
        const newNode = new Node(val);

        // if the list is empty -> make the new node the head/tail
        if (!this.head) {
            this.head = newNode;

            return this;
        }

        // to attach the new node to the end of a list
        let current = this.head;
        while(current.next !== null) {
            curennt.next = current;
        }
        current.next = newNode;
        return this;
    }

    prepend(val) {
        // the new val will be the new head; this new head will point to the old head
        this.head = new Node(val, this.head);
    }

}

module.exports = LinkedList;