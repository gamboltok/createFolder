'use strict';
const path = require('path');
const fs = require('fs');

console.log('wait, i create new folder');

const timerFolder = setTimeout(()=>{
   createNewFolder('notes');  
}, 1000);

const timerFile = setTimeout(()=>{
    createNewFile('boss', 'notes', 'js', "my message");  
}, 3000);

function createNewFolder(name){
    fs.mkdir(
        path.join(__dirname, name),
        err=>{
            console.log(`Folder ${name.toUpperCase()} created.`);
            console.log(`a new file is created inside the folder ${name.toUpperCase()}`); 
        }
    );
}

function createNewFile(name, folder, format, message){
    fs.writeFile(
        path.join(__dirname, folder, name + '.' + format),
        message,
        err=>{
            if(err) throw err;
            console.log(`file ${name.toUpperCase() + '.' + format.toUpperCase()} created.`);
        }
    );
}
