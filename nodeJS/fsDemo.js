//import fs from 'fs'
import fs from 'fs/promises'


//readFile() - callback

// fs.readFile('./test.txt','utf8',(err,data)=>{
//     if(err)throw err;
//     console.log(data)
// });


// //readFileSync() - sync

// const data=fs.readFileSync('./test.txt','utf8');
// console.log(data);

//readfilel() - promise


// fs.readFile('./test.txt', 'utf8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

  // readfile() async/await

  const readFile=async()=>{
    try{
        const data=await fs.readFile('./test.txt', 'utf8');
        console.log(data)
    }catch{
        console.log(error);
    }
  }

  //writefile 
  const writeFile=async()=>{
    try{
        await fs.writeFile('./test.txt', 'hi i am writing to this file')
        console.log('file written to')
  }catch{
    console.log(error)
  }}

  //append file

  
  writeFile();

  readFile();