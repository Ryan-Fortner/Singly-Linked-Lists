// Add Front
class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }
    isEmpty(){
        return this.head === null;
    }
    add(val){
        // add new nodes to the front!

        // 1) construct the new node
        var newNode = new Node(val);

        // 2) attach new node's next to current head
        newNode.next = this.head;

        // 3) attach the head to the node
        this.head = newNode;
    }
    // remove first node
    removeFirst(){
        // remove and return value of head node
        var valToReturn = this.head.value;
        // move head forward (deleting old head)
        this.head = this.head.next;
        return valToReturn;
    }
    displayValues(){
        var current = this.head;
        while(current !== null){
            console.log(current.value)
            current = current.next;
        }
    }
    addBack(value){
        var newNode = new Node(value);
        var current = this.head;

        // edge case: empty list
        if(this.isEmpty()){
            this.add(value);
            return;
        }
        while(current.next !== null){
            console.log(current.value);
            current = current.next;  
        }
        current.next = newNode;
    }
}

var myList = new SinglyLinkedList();
myList.add(5);
myList.add(10);
myList.add(15);
myList.addBack(25);
console.log(myList.removeFirst(), "is the return");
myList.displayValues();
