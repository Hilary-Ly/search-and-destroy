'use strict';

//Complete this algo
const isLoop = linkedlist => {
   let pointerA = linkedlist.head;
   let pointerB = linkedlist.head.next
   while (pointerA !== pointerB && pointerB.next.next !== null) {
       pointerA = pointerA.next
       pointerB = pointerB.next.next
   }
   if (pointerA === pointerB) return true
   else return false
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
