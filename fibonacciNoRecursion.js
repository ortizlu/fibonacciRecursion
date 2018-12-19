function fibonacciNoRecursion(n, signature) {
  const arr = signature
  const table = {}
  let counter = 0

  for(let i = 2; i <= n; i++) {
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

console.log(fibonacciNoRecursion(3, [0, 1]))