# Fibonacci Sequence with Recursion
This is a walkthrough of a fibonacci function being invoked with the number 3. By seeing each individual step and visualizing it, one is able to get a better understanding of how recursive functions work. Credit for the functions goes to Adam Coder on [Youtube](https://www.youtube.com/watch?v=fTKROPcI1gE)

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
  |  return fibonacci(2) + fibonacci(1)     |
  ===========================================
```

**************************************************************************************

### Second Stack

So because of what happened above, two functions are running concurrently. One with n = 2 and one with n = 1

the first of our two new functions is ```fibonacci(2)```,
which runs 2 more new functions, ```fibonacci(1)``` and ```fibonacci(0)```

```js
//first concurrent function
function fibonacci(2) {
  if (2 < 2) {
    return n
  }

  return fibonacci(2 - 1) + fibonacci(2 - 2)
}
```

the second of our two new functions is fibonacci(1), which finally ends the loop and returns 1

```js
//second concurrent function
function fibonacci(1) {
  if (1 < 2) {
    return n
  }
  //1 is finally returned, one of our second stacks gets popped off the stack

  return fibonacci(1 - 1) + fibonacci(1 - 2)
}
```

Before the function on the right gets returned
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

### Third Stack


which now leaves the first function in the second stack, holding the sum of ```fibonacci(1) + fibonacci(0)``` (see above). We already know from one of the concurrent functions above that the output of ```fibonacci(1)``` is ```return 1```, and the output of ```fibonacci(0)``` likewise is ```return 0```

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

Lastly this leaves the function with a return value of ```1 + 0```

```js
//second twin stack #1
function fibonacci(2) {
  if (2 < 2) {
    return n
  }

  return 1 + 0 //1
}
```

And so that also gets popped off the stack, leaving us with only one function left


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

```
  ===========================================
  |             return 2                    |
  ===========================================
```

And that makes sense because our 3 index in a fibonacci sequence (starting with 0), is 2
```
0: 0
1: 1
2: 1
3: 2
```

**************************************************************************************

# Fibonacci Sequence without Recursion

this is the second example of how a fibonacci sequence would be accomplished without recursion.

```js
function fibonacciNoRecursion(3, [0,1]) {
  const arr = [0,1]
  const table = {}
  let counter = 0

  for(let i = 2; i <= 3; i++) {
    let a = arr[i - 1]
    let b = arr[i - 2]
    arr.push(a + b)
  }

  for(let e in arr) {
    table[counter] = arr[e]
    counter++
  }

  return table
}

console.log(fibonacciNoRecursion(3))
```js