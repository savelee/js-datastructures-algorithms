# There are different types of search algorithms
 
The most common one is Linear Search,
the other one is Binary Search.

## Linear Search

Linear Search a search algorithm that works with sorted and unsorted data.
It's basically an interation over the array with a for loop.

O(n)

## Binary Search

Binary Search a search algorithm that only works on **sorted** data.
The idea is to get the middle as a pivot. See if the desired number
is smaller or greater than the middle. If it's smaller look in the
smaller part. Repeat this proccess till the value is found.
Just create a while loop with the condition start <= end. Keep modifying
the start and end variables with the value of middle.

O(log(n))