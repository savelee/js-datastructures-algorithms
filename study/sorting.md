# Sorting

Algorithm | Time complexity | Space complexity
Countsort | O(k+n) | O(k) 
Quicksort | O(nlog(n)) | O(nlog(n))
Mergesort | O(nlog(n)) | O(n)
Bubble Sort | O(n^2) | O(n^2)
Insertion Sort | O(n^2) | O(n^2)
Selection Sort | O(n^2) | O(n^2)

## Countsort

This sorting algorithm can be done very quick, because it does not compare values.
It can only work with numbers in a certain range.

You basically create a hashtable, that collects all the occurances
of each number, by looping through it, and counting it.

Then afterwards you loop through the keys of the object, and push them in an array.

## Quicksort

Quicksort works by creating a pivot somewhere in the array,
ideally in the center. The idea is to divide it in partitions.
Take a the last item from the right partition. Is it lower or higher than
the element of the pivot? If it's smaller, then swap the numbers from right to left. Then move the left and right pointers, check again if you need to swap. etc. Then change the pivot again, and start over this proces.
Till the pivot and the pointers can't be moved. (make sure your pivot rounds down)

Time Complexity: Best case scenario O(nlog(n)), worstcase O(n^2) (when the pivot is on the beginning or end).

## Mergesort

(It's more divide and merge sort);

Mergesort works by diving the array into subarrays until each array has only
one element. 
It then starts merging it again by comparing left to right, and picking it in the right order. 

For example, it first divides:
1,3,3,8,6,1,0,9
1,3,3,8 -- 6,1,0,9
1,3 -- 3,8 ---- 6,1 -- 0,9
Then it merges:
1,3 -- 3,8
1,3,3,8
1,6 -- 0,9
0,1,6,9
1,3,3,8 -- 0,1,6,9
0,1,1,3,3,6,8,9

What's nice about Mergesort is always fast, always O(nlogn), it does take O(n) in space.

## Bubble Sort

Bubble sorting is the simplest sorting algorithm, it simply iterates over
the entire array and swaps elements if one is bigger than the other.
Problem is, you keep on swapping.