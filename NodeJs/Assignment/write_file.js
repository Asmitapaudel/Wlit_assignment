const fs =require("fs")
console.log("File content before write operation :" +fs.readFileSync("./file.txt",'utf-8'))

console.log("bg1")
console.log(fs.writeFileSync("./file.txt",'Hello form WriteFileSync'))
console.log("bg2")
console.log("File content After writeFileSync operation : " +fs.readFileSync("./file.txt",'utf-8'))

console.log("bg3")
fs.open('file.txt', 'w', (err, fd) => {
  if (err) throw err;

  fs.write(fd, 'Hello from fd.write!', (err, written, string) => {
    if (err) throw err;

    console.log(`${written} bytes written`);
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});
console.log("bg4")
console.log("File content After write operation : " +fs.readFileSync("./file.txt",'utf-8'))
