mainFunction();  // the function declaration is hoisted to the top which makes the function call work even if before the declaration
    
    function mainFunction() {
      console.log('red')
    }

mainFunction();