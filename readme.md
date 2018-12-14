# Fibonacci Sequence with Recursion

### First Stack
```js
function fibonacci(3) {
  if (3 < 2) {
    return n
  }

  return fibonacci(3 - 1) + fibonacci(3 - 2)
}
```

Our first function in the stack uses 3 as our example. Before we add the final solution, the function has to be called twice with (2) and (1) because of this line:
```return fibonacci(3 - 1) + fibonacci(3 - 2)```

```
  ===========================================
  |         fibonacci(2) + fibonacci(1)     |
  ===========================================
```

**************************************************************************************

### Second Stacks (First Twin Stack)

```js
function fibonacci(2) {
  if (2 < 2) {
    return n
  }

  return fibonacci(2 - 1) + fibonacci(2 - 2)
}
```

the first of our two new stacks is ```fibonacci(2)```,
which runs 2 more new stacks, ```fibonacci(1)``` and ```fibonacci(0)```

the second of our two new stacks is fibonacci(1), which finally ends the loop and returns 1

```js
function fibonacci(1) {
  if (1 < 2) {
    return n
  }
  //1 is finally returned, one of our second stacks gets popped off the stack

  return fibonacci(1 - 1) + fibonacci(1 - 2)
}
```

Before it gets returned
```
    ================== ===================
    |  fibonacci(1)  | |    return 1     |
    | + fibonacci(0) | |                 |
    ================== ===================
  ===========================================
  |         fibonacci(2) + fibonacci(1)     |
  ===========================================
```
After it gets returned
```
    ==================
    |  fibonacci(1)  |
    | + fibonacci(0) |
    ==================
  ===========================================
  |         fibonacci(2) + 1                |
  ===========================================
```

**************************************************************************************

### Third Stacks (Second Twin Stack)


which now leaves the first in the loop, holding the sum of ```fibonacci(1) + fibonacci(0)``` (see above). We already know from the twin stack above that the output of ```fibonacci(1)``` is ```return 1```, and the output of ```fibonacci(0)``` likewise is ```return 0```

Before they get returned
```
    ======== =========
    |return| |return |
    |  1   | |   0   |
    ======== ========= 
    ==================
    |  fibonacci(1)  |
    | + fibonacci(0) | 
    ================== 
  ===========================================
  |         fibonacci(2) + 1                |
  ===========================================
```
After they get returned
```
    ==================
    |  return 1 + 0  | 
    |                |
    ================== 
  ===========================================
  |         fibonacci(2) + 1                |
  ===========================================
```

**************************************************************************************

### Second Stacks (First Twin Stack)

Lastly this leaves only one of the two stacks still in place with a return value of ```1 + 0```

```js
//second twin stack #1
function fibonacci(2) {
  if (2 < 2) {
    return n
  }

  return 1 + 0 //1
}
```

And so that also gets popped off the stack, leaving us with only one function still in the stack


Before it gets returned
```
    ==================
    |  return 1 + 0  | 
    |                |
    ================== 
  ===========================================
  |         fibonacci(2) + 1                |
  ===========================================
```
After it gets returned
```
  ===========================================
  |             return 1 + 1                |
  ===========================================
```

### First Stack

Lastly, we're left with ```return 1 + 1``` from our function, making our final result to be ```2```