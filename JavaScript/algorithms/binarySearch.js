/*
Binary Search

Pseudo Code
```
If no doors left
  Return false
If X is behind doors[middle]
  Return true
Else if X < door[middle]
  Search doors[0] through doors[middle - 1] // LEFT HALF
Else if X > doors[middle] 
  Search doors[middle + 1] through doors[n - 1] // RIGHT HALF
```
*/
