//piece of data - val
//reference to next node 

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null
    }

    //---------------- for adding to the end of the list (112) -------------
    push(val) {
        let newNode = new Node(val)

        //edge case for first item inserted
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            //we set the next item after the current tail to new item, them make the new item the new tail

            // console.log(newNode)
            this.tail.next = newNode
            // console.log(this.tail)
            this.tail = newNode
            // console.log(this.tail)
        }

        this.length++

        // returns the list 
        return this
    }

    //------------- for removing from the end of the list (114)-------------------------

    pop() {
        //if there is nothing in the list 
        if (!this.head) {
            return null
        }

        //resets the list if last item is removed
        if (this.length == 1) {
            let poppedItem = this.head
            this.head = null;
            this.tail = null;
            this.length -= 1
            return poppedItem
        }


        //2 vars to keep track of current and previous 
        let prev = this.head
        let current = prev.next

        //while we are not at the last node keep looping and bring previous along with us to get the 2nd to last node
        while (current.next) {
            current = current.next
            prev = prev.next
        }


        //set the new tail (removing the last item )
        this.tail = prev
        this.tail.next = null
        this.length -= 1



        //return current 
        return current
    }


    //for removing an item at the beginning of a list (116)
    shift() {

        //if there is nothing in the list return undefined 
        if (!this.head) {
            return null
        }

        let tempHead = this.head

        //if we are removing the last item from the list 
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length -= 1
            return tempHead
        }


        //set head to next item and -1 from length
        this.head = this.head.next
        this.length -= 1

        return tempHead
    }

    //for adding a new item at the beginning of the list
    unshift(val) {
        ///create the new node 
        let newNode = new Node(val)


        //if nothing in the list set head an tail to new node
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
            this.length += 1
            return this
        }

        //else set the new head to new node with the new node pointing to the old head
        let oldHead = this.head
        newNode.next = oldHead
        this.head = newNode
        this.length += 1
        return this
    }

    //for getting an item at an index(120) - unlike arrays Linked Lists are not indexed

    get(index) {
        //edge cases 
        if (index < 0 || index > this.length) {
            return null
        }


        let returnedObject = this.head

        //loop until we hit the index we want and move to the next item each time 
        for (let i = 0; i < index; i++) {
            returnedObject = returnedObject.next
        }

        return returnedObject
    }


    //for updating the value of a previous created node (122)
    set(index, value) {

        //use the get method to get the node to update 
        let node = this.get(index)
        console.log("SinglyLinkedList -> set -> node", node)

        //if there is a node, update the value 
        if (node) {
            node.val = value
            return true
        }

        //else return false
        return false
    }


    //for inserting at a specific position
    insert(index, value) {
        //to account for if the index wont be in the list 
        if (index < 0 || index > this.length) return false;

        //account for adding to the end of the list 
        if (index === this.length) return !!this.push(value);

        //accounts for adding to the beginning of the list 
        if (index === 0) return !!this.unshift(value);

        //to store node that will point to our new node
        let oldNodePrevious = this.get(index - 1)

        //to store node our new node will point to 
        let oldNode = this.get(index)


        let newNode = new Node(value)

        //point ot our new nod
        oldNodePrevious.next = newNode

        //point to our old node
        newNode.next = oldNode
        this.length += 1

        return true
    }

    remove(index) {
        //if index doesn't exist or is too big return null
        if (index < 0 || index > this.length) return null;

        //if it is zero remove first node
        if (index === 0) return this.shift();

        //if it is last number remove last node
        if (index === this.length - 1) return this.pop();

        let previousNode = this.get(index - 1)
        let nextNode = this.get(index + 1)
        let removedNode = this.get(index)

        previousNode.next = nextNode
        this.length -= 1

        return removedNode
    }
    reverse() {
        //store the head 
        var node = this.head;

        //set the new head to the tail 
        this.head = this.tail;

        //set the new tail to the head 
        this.tail = node;

        var next;

        var prev = null;


        for (var i = 0; i < this.length; i++) {
            console.log("======================")
            //on the   
            //console.log("this -> " + JSON.stringify(this))
            next = node.next;
            console.log("SinglyLinkedList -> reverse -> next", next)

            node.next = prev;

            prev = node;
            console.log("SinglyLinkedList -> reverse -> prev", prev)

            node = next;
            console.log("SinglyLinkedList -> reverse -> node", node)

          
        }
        return this;
    }
}


//------------------------ TEST CASES FOR REVERSE - 128 ------------------
let myList = new SinglyLinkedList()
myList.push("hello")
myList.push("there")
myList.push("again")
console.log(myList)
myList.reverse()
console.log(myList)

