/*
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.


/*
You are given a linked list where each element in the list is a node and have an integer data. You need to add 1 to the number formed by concatinating all the list node numbers together and return the head of the modified linked list. 

Note: The head represents the first element of the given array.

Examples :

Input: LinkedList: 4->5->6
Output:457= 4->5->7
9
1 0
9 1 0

456+1 = 457
123+1 = 124
if not null --> null
0+1 = 1
1 2 -3+1 -> 122

num - start 0 > 
- 4 5 6 
  traverse thru the list
    if the the end of the node
    will at 1 to last value
9 -> 9 = 99 + 1 = 100 = 1-> 0 -> 0
  cur, curt 
In
9->9->9 = 999+1 = 1000 = 1->0->0->0 
9 -> 1 = 1 -> 0

*/

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addOneToList(head) {
    let curr = head;

    // travese throug list
    let sum = ''; // convers to string
    while (curr !== null) {
        sum += curr.val;
        curr = curr.next;
    }

    const addOne = (BigInt(sum) + BigInt(1)).toString();

    let dummy = new Node(0);
    let currNode = dummy;

    for (const s of addOne) {
        currNode.next = new Node(parseInt(s));
        currNode = currNode.next;
    }
    return dummy.next;
}

function printList(node) {
    let result = '';
    while (node !== null) {
        result += node.val;
        node = node.next;
    }
    console.log(result);
}

const node = new Node(1, new Node(2, new Node(3))); // 124
printList(addOneToList(node));

const node1 = new Node(9, new Node(9, new Node(9))); // 1000
printList(addOneToList(node1));


