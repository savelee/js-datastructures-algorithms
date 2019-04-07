# What do we know about Arrays?

In JavaScript Arrays do not have a predefined size.
Arrays can grow on runtime.

Accessing an array can be done by passing in an index number.
Arrays are zero based:

```
var array = [1,2,3,4];
array[2] // 3
```

Looping is very common when working with arrays.
Time Complexity is Linear O(n);

```
for (let i = 0; i < array.length; i++) {
    // CODE    
}

for (let index in array) {
    console.log(array[index]);   
}

for (let el of array) {
    console.log(el);   
}

break; can be used to break out the loop.

forEach(function(el){
    console.log(el); 
    // can't use break here
})

while(condition) {
    // do something
    // make sure you can get out
}

do {
    // do this first
} while (condition);

```


Inserting and Removing items can be done with Constant time complexity O(1)

Inserting:
```
var array = [1,2,3,4];
var a1 = array;
a1 = a1.slice(0,1);
var a2 = array.slice(1);
var newArray = a1.concat([9],a2);
// [1,9,2,3,4];
```

Removing:
```
newArray.splice(1,1)
// [1,2,3,4]
```