function dev(){
    console.log("function development is done");
    test();
}

function test(){
    console.log("function testing is done");
    dev();
}
dev();
test();

//RangeError: Maximum call stack size exceeded