#Today's Kata: "TBA"

Given a sequence of characters your task is to reorder them as follows:

1) Move a range of elements from one position to another, preserving their order and the order of the other elements.

   e.g. Given the sequence
   [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ]

   moving the range of elements starting at element[1] (B) and ending at element[3] (D) to the position before element[8] (I) will give
   [ 'A', 'E', 'F', 'G', 'H', 'B', 'C', 'D', 'I', 'J' ]

   The Plan:

A function that takes:

[1]  an array
[2] start element index
[3] end element index
[4] position before element

 ...and returns a new array with a chunck in a different position.

