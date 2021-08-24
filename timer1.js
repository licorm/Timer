let times = process.argv.slice(2);

if (times.length > 0) {
  for (const num of times) {
    if (num > 0) {
      setTimeout(()=> {
        process.stdout.write('.');
      }, (num * 1000));
    }
  }
  setTimeout(()=> {
    process.stdout.write('\n');
  }, (Math.max(...times) * 1001));
}



