function greet(name){

    console.log("hello " +name)

}

greet("Shrey");


function processUser(callback){

    callback("anagh");

}

processUser(greet);