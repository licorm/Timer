const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", (key) => {
  if (key === 'b') process.stdout.write('. \n'); 
  if (key > 0 && key < 10) {
    process.stdout.write(`setter the timer for ${key} seconds`);
    setTimeout(()=> {
      process.stdout.write('. \n');
    }, (key * 1000));
  }
});

rl.on('SIGINT', () => {
  rl.question('Thank you for using me! Ciao!', () => {
    rl.close();
  });
});


