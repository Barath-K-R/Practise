const fs = require("node:fs");

console.log("First");
//readfilesync is synchronous
const fileContents = fs.readFileSync("./file.txt", "utf8");
console.log(fileContents);

console.log("Second");
//readfile asynchronous using callback function
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("Third");

fs.writeFileSync("./greet.txt", "Hi Hello good morning");
fs.writeFile(
  "./greet.txt",
  " Hello Vishwas",
  {
    flag: "a",
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written");
    }
  }
);