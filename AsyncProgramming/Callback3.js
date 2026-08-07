function login(){
    console.log("login");
}

function getUsers(){
    console.log("Getting Users");
}

function getOrders(){
    console.log("Getting Orders");
}

// login();
// getUsers();
// getOrders();

//now new requirement, getUser should be called once login is completed

function login1(callback){

    console.log("login done");

    callback();

}

function getUsers1(callback){

    console.log("Users rtrvng");

    callback();

}


//login1(getUsers1);

login1(function(){                         //instead of it use arrow fn

    getUsers1(getOrders);

})

