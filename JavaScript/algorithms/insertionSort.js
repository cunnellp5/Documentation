function insertionSort(arr) {
  // Start from the second element (index 1) as the first element is already considered sorted
  for (let i = 1; i < arr.length; i++) {
    // Store the current element to be compared and inserted into the sorted portion of the array
    let key = arr[i];

    // Start comparing with the element before the current element
    let j = i - 1;

    // Move elements of the sorted portion of the array that are greater than the key to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      // Shift the element to the right
      arr[j + 1] = arr[j];
      // Move to the previous element
      j = j - 1;
    }

    // Insert the key into its correct position in the sorted portion of the array
    arr[j + 1] = key;
  }

  // Return the sorted array
  return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);

/* 
Explanation:

  Outer Loop: The outer loop starts from the second element (index 1) and iterates through the array.
  Key: The key is the element currently being compared and inserted into the sorted portion of the array.
  Inner Loop: The inner loop moves elements of the sorted portion of the array (i.e., elements before the current key) that are greater than the key to one position ahead of their current position.
  Insertion: After finding the correct position for the key, it is inserted into the sorted portion of the array.
  
  This algorithm sorts the array in place and has a time complexity of O(n^2) in the worst case, where n is the number of elements in the array.
*/
