const a = 1

function test() {
  const b = 2
  console.log("here", a, b)
}

test();
console.log(a, b)  // const b is not available globally

