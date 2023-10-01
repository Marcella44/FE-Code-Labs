function parentFunction() {
  const color = 'red';
  console.log(color);

  function childFunction() {
    const clothes = 'hoodie'
    console.log(clothes);
  }

  return childFunction;

}

parentFunction();