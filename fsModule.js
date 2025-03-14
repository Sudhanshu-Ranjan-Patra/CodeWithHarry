const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data)=>{
   console.log(data);
})//Asyncroniously

const a = fs.readFileSync('file.txt');
console.log(a.toString());//Syncroniusly

fs.writeFile('file2.txt','Radha Vallabh Shri Haribansh ki Jay', (err, data)=>{
    console.log("Radha Radha")
})//Asyncroniously

const b = fs.writeFileSync('file.txt',"radha radha");
console.log(b);

console.log("Finished");