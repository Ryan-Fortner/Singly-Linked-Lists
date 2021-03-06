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
    // Add Front
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
    findNode(value){
        var current = this.head;
        while(current !== null){
            console.log(current.value)
            current = current.next;
        }
        var valToReturn = this.value;
        return valToReturn, "This is Tad's position in line";
    }
    findLength(search_for){
        var current = this.head;
        var count = 0;
        while(current !== null){
            if (current.data == search_for){
                count++;
                current=current.next
            }
        }
        return count;
    }
    mylist(){
        var current = this.head;
        while(current !==null){
            console.log(current.value);
            current = current.next;
        }
    }
    minimum(this){
        var current = this.head;
        if(this.head == null){
            console.log("List is empty");
        }
        else{
        min= this.head;
        While(current !==null){
            if (min > this.head){
                min = current.data;
                current = current.next;
            }
        return min;
        }
        }
    }
    maximum(this){
        var current = this.head;
        if(this.head == null){
            console.log("List is empty");
        }
        else{
            max= this.head;
            while(current !==null){
                if (max < this.head){
                    max = current.data;
                    current = current.next;
                }
            return max;
            }
        }
    }
    average(this){
        var current = this.head;
        if(this.head == null){
            console.log("List is empty");
        }
        else{
            count = 0;
            sum = 0;
            while(current !==null){
                count++;
                sum += current.datacurrent = current.next;
            }
            // calculate average
            avg = (sum * 2)/count;
        }
        return avg;
    }
}