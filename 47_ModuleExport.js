/*
module export and import

any file structure is called module.
export: will make data sharable.
import: will make data read the exported other file.

*/

export let browserName="chrome";

//function
export function getMessage(){
    console.log("Hello All ");
    
}

export class productData{
    pid;
    pname;

    constructor(pid,pname){
        this.pid=pid;
        this.pname=pname;
    }

    getData(){
        console.log(this.pid);
        console.log(this.pname);
        
    }
}