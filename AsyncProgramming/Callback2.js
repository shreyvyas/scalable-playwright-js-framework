console.log("first statement");

function greet(){
    console.log("Hello Everyone");
}

setTimeout(greet, 2000);

console.log("please wait");

setTimeout(()=> {

    console.log("Lets Rock");

},3000);