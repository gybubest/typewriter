const sentence = "hello there from lighthouse labs";
let time = 0;
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  setTimeout(() => process.stdout.write(char), time);
  if (i === sentence.length - 1) {
    setTimeout(() => process.stdout.write('\n'), time);
  } 
  time += 50;
}