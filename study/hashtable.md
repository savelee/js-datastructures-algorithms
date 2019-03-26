# What do we know about HashMap?

Very similar to Maps/Associative Arrays, for storing
key value pairs. You can find a stored value in the shortest
time possible, O(1), rather than looping though each
array value O(n) or using a sorted binary array
or Tree O(log n).
 
Think about a student is assigned a student number
that can be used to find information about him.
 
To make sure all key values in a HashTable are short
as possible, and are integers to do fast lookup,
we will need a hashing function.
You will need to find a good hashing function, one
that doesn't take too long to create a hash (when inserting/
getting or removing). But you also don't want to make it
to simple so you create collisions.
 
Although hash tables provide fast insertion, deletion, and retrieval,
they perform poorly for operations that involve searching, such as finding the
minimum and maximum values in a data set. For these operations, other data structures
such as the binary search tree are more appropriate. Access and Deletion in worst case O(n)

## Real world examples in Software Engineering?
Browser vendors use hashtables a lot.
But also when you use a database, you would set indexes to allow faster searching.