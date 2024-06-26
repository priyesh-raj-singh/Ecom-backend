const http = require('http');
const PORT = 3000;

/* Http module contains a function called createServer
* this createServer function takes a callback as the input
*Now inside the callback, we got two arguments
* request -> the argument conatins all the details about incoming req
*response -> this argument contains functions using which we can prepare the response

the createServer function returns us the server object
*/

const server = http.createServer((req , res)=>{
console.log(req.method);
if(req.url == '/home'){
    res.end("Welcome to home");
}
else if(req.url == '/faq'){

    res.end("Ask your FAQs");
}
else{
    res.end("Hello World");
}

    // res.end("Hello World");

});

server.listen(PORT, function process(){
    //once the server is started this callback is executed
    console.log("Server started on port", PORT);
});