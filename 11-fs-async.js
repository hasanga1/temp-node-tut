const { readFile, writeFile } = require("fs");

console.log('Start');

readFile("./content/first.txt", "utf8", (err, firstResult) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = firstResult;

  readFile("./content/second.txt", "utf8", (err, secondResult) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = secondResult;

    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first} ${second}`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Task done");
      }
    );
  });
});

console.log('Program End');