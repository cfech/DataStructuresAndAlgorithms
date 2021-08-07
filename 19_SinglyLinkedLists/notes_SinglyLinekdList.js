// ----------------------- DIRTY WAY OF CREATING A LINKED LIST - 110 --------------------------
// var first = new Node("Hi")
// first.next = new Node("Hi There")
// first.next.next = new Node("Hi There Again")
// console.log(first)


//----------------------------------- PUSH TEST CASES - 112------------------------
// let myList = new SinglyLinkedList()
// myList.push("hello")
// console.log(myList)
// myList.push("there")
// console.log(myList)
// myList.push("again")
// console.log(myList)
// console.log(myList.head)


//-------------------- POP TEST CASES - 114 ---------------------------------------
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// console.log("popped item : " + JSON.stringify(myList.pop()))
// console.log("-----------------")
// console.log(myList)
// console.log("popped item 2: " + JSON.stringify(myList.pop()))
// console.log("popped item 3: " + JSON.stringify(myList.pop()))
// console.log(myList)

//EDGE CASE NO ITEMS IN LIST SHOULD RETURN UNDEFINED 
// let myList = new SinglyLinkedList()
// console.log(myList.pop())

//EGE CASE REMOVE LAST ITEM , SHOULD RESET LIST 
// let myList = new SinglyLinkedList()
// myList.push("hello")
// console.log(myList)
// console.log("popped item : " + JSON.stringify(myList.pop()))
// console.log(myList)


//------------------------- SHIFT TEST CASES - 116 ------------
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// console.log("shifted item : " + JSON.stringify(myList.shift()))
// console.log(myList)
// console.log("shifted item 2: " + JSON.stringify(myList.shift()))
// console.log("shifted item 3 : " + JSON.stringify(myList.shift()))
// console.log(myList)
// myList.push("testing ")
// myList.push("testing2 ")
// console.log(myList)

//EDGE CASE EMPTY LIST
// let myList = new SinglyLinkedList()
//  console.log("shifted item : " + JSON.stringify(myList.shift()))

// EDGE CASE shifting LAST ITEM 
// let myList = new SinglyLinkedList()
// myList.push("hello")
// console.log(myList)
// console.log("popped item : " + JSON.stringify(myList.shift()))
// console.log(myList)


// ----------------------- TEST CASES FOR UNSHIFT - 118 -----------------------
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// console.log( myList.unshift("testing"))
// console.log(myList.head.next.next)


//EDGE CASE ADDING THE FIRST ITEM
// let myList = new SinglyLinkedList()
// console.log( myList.unshift("testing"))


//------------------------ TEST CASES FOR GET - 120 ------------------
//let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)

// console.log(myList.get(2))

// // EDGE CASES FOR LESS THAN 0 OR GREATER THAN LENGTH OF LIST
// console.log(myList.get(10))
// console.log(myList.get(-10))


//------------------------ TEST CASES FOR SET - 122 ------------------
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// myList.set(1, "you")
// console.log(myList)

//EDGE CASE FOR NOT FOUND 
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// myList.set(10, "you")
// console.log(myList)


//------------------------ TEST CASES FOR INSERT - 124 ------------------
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// console.log(myList.get(1))
// console.log(myList.insert(1, "testing"))
// console.log(myList)
// console.log(myList.get(2))


//EDGE CASE ADDING TO THE END OF A LIST 
// let myList = new SinglyLinkedList()
// myList.push("hello")
// console.log(myList)
// console.log(myList.insert(1, "there"))
// console.log(myList)


//EDGE CASE ADDING TO THE BEGINNING OF A LIST  
// let myList = new SinglyLinkedList()
// myList.push("hello")
// console.log(myList)
// console.log(myList.insert(0, "there"))
// console.log(myList)


//EDGE CASE, NOT A VALID INPUT <0 
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// console.log(myList.get(1))

// console.log(myList.insert(-11, "testing"))

// console.log(myList)
// console.log(myList.get(2))


//EDGE CASE , NOT A VALID INPUT , GREATER THAN LIST.LENGTH
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// console.log(myList.get(1))

// console.log(myList.insert(11, "testing"))

// console.log(myList)
// console.log(myList.get(2))

//------------------------ TEST CASES FOR REMOVE - 126 ------------------
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)

// console.log("removed node -> " + myList.remove(1))
// console.log(myList)

//EDGE CASE REMOVE 1ST
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)

// console.log("removed node -> " + myList.remove(0))
// console.log(myList)

//EDGE CASE REMOVE LAST
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)

// console.log("removed node -> " + myList.remove(2))
// console.log(myList)

//EDGE CASE , NOT A VALID INPUT , GREATER THAN LIST.LENGTH
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)

// console.log("removed node -> " + myList.remove(12))
// console.log(myList)

//EDGE CASE , NOT A VALID INPUT , LESS THAN 0
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)

// console.log("removed node -> " + myList.remove(-12))
// console.log(myList)

//------------------------ TEST CASES FOR REVERSE - 128 ------------------
// let myList = new SinglyLinkedList()
// myList.push("hello")
// myList.push("there")
// myList.push("again")
// console.log(myList)
// console.log(myList.reverse())


