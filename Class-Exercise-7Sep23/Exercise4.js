let globalVar = 'global';  // global variable

function modify (globalVar) {
  
  console.log(modify);
}

function localScopeTest() {
  let globalVar = 'global change';
  console.log(localScopeTest);
}

modify();
localScopeTest();