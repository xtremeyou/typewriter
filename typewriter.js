const sentence = "hello there from lighthouse labs \n";

setTimeout(() => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);

    }, 50 * i);
  }
});


