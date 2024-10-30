# Linked Lists

Its a data structure allowing for a language like C to build an array without worrying about allocating memory for things like arrays.

The data is non contiguously stored in memory.

## pros

- This structure can grow and shrink without affecting other nodes as we append, prepend, splice, or delete in new/old values

## cons

- We cannot use a search algorithm such as binary search since we cannot 'find' the middle, we have to traverse the tree, therefore this could be slower
- lost the O(log(n)) running time because we always have to start at the beginning to get to the middle or end

## Asymptotic Notation

Prepending nodes - constant time: O(1)
Appending nodes - searches the entire list: O(n)
Sorting nodes - still searches the entire list in the worst case senario despite being smart enough to prepend, append, or splice in new values without reorganizing the entire 'array', think about the index values vs node pointers: O(n)
