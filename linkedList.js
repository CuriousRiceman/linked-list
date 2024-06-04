// import export is ES6, need to specify type module in package.json or rename extensions to .mjs
// const LinkNode = require('./linkNode.js'); // CommonJS is default module system in Nodejs
import LinkNode from './linkNode.js';
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        if (this.tail === null && this.head === null) {
            let data = new LinkNode(value);
            this.tail = data;
            this.head = data;
        } else {
            let data = new LinkNode(value);
            data.nextNode = this.head;
            this.head = data;
        }
    }
    append(value) {
        if (this.head === null && this.tail === null) {
            let data = new LinkNode(value);
            this.head = data;
            this.tail = data;
        } else {
            let data = new LinkNode(value);
            this.tail.nextNode = data;
            this.tail = data;
        }
    }
    getSize() {
        let length = 0;
        let tempHead = this.head;
        while (tempHead !== null) {
            length++;
            tempHead = tempHead.nextNode;
        }
        console.log("Size of linked list is " + length);
    }
    getHead() {
        return "Head points to " + this.head.value;
    }
    getTail() {
        return "Tail points to " + this.tail.value;
    }
    at(index) {
        let tempHead = this.head;
        let instance = 0;
        while(tempHead !== null && instance < index) {
            tempHead = tempHead.nextNode;
            instance++;
        }
        if(tempHead === null) {
            return "Index does not exist";
        } else {
            return "Node at index " + index + " is " + tempHead.value;
        }
    }
    pop() {
        let tempHead = this.head;
        while(tempHead.nextNode !== this.tail) {
            tempHead = tempHead.nextNode;
        }
        tempHead.nextNode = null;
        this.tail = tempHead;
    }
    contains(value) {
        let tempHead = this.head;
        let found = false;
        while (tempHead !== null) {
            if(value === tempHead.value) {
                found = true;
                console.log("List contains " + value);
                break;
            }
            tempHead = tempHead.nextNode;
        }
        if(!found) {
            console.log("List does NOT contain " + value);
        }
        
    }
    find(value) {
        let tempHead = this.head;
        let found = false;
        let index = 0;
        while(tempHead !== null) {
            if(tempHead.value === value) {
                found = true;
                break;
            }
            index++;
            tempHead = tempHead.nextNode;
        }
        if(!found) {
            return "Index of " + value + " is " + null;
        } else {
            return "Index of " + value + " is " + index;
        }

    }
    remove(index) {
        let tempHead = this.head;
        let indexToMatch = 0;
        let previousNode = null;
        let followingNode = null;
        while (index > indexToMatch) {
            console.log(tempHead.value);
            indexToMatch++;
            previousNode = tempHead;
            tempHead = tempHead.nextNode;
            followingNode = tempHead.nextNode;
        }
        console.log();
        console.log(previousNode.value);
        console.log(tempHead.value + " Delete this value");
        console.log(followingNode.value);
    }
    toString() {
        let tempHead = this.head;
        while (tempHead !== null) {
            process.stdout.write("( " + tempHead.value + " ) -> "); // process.stdout.write will make it print on same line
            tempHead = tempHead.nextNode;
        }
        process.stdout.write("" + tempHead);
    }
}
const linkedList = new LinkedList;
linkedList.prepend(5);
linkedList.prepend(10);
linkedList.append(6);
linkedList.append(15);

// linkedList.getSize();
linkedList.remove(2);
linkedList.toString();

// console.log("\n------------------------------------------");
// linkedList.pop();
// linkedList.toString();

// console.log();
// console.log(linkedList.getHead());
// console.log(linkedList.getTail());
// console.log(linkedList.at(2));
// linkedList.contains(5);
// console.log(linkedList.find(6));

