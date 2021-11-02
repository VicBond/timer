let nums = (process.argv.slice(2));

for (let num of nums) {
  num = Number(num);
  if (isNaN(num) || num === '' || num < 0) {
    console.log('Please provide a valid time');
    return;
  } else {
    const timeout = setTimeout(() => {
      process.stdout.write('\x07');
    } , num);

  }
}

