let game = 'Sonic';  // global variable

console.log(game);

function title() {
  console.log(`${game}`);
}

title();

if(true) {
  console.log(`${game}`);
}

// you can use global variables anywhere within your code
// overusing using global variables is not considered good practice

