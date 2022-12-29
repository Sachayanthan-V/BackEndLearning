const http = require('http');
const fs = require('fs');
const port = 8000;


function requestHandler(req, res) {
    
    console.log(req.url);

    res.writeHead ( 200, {'content-type' : 'text/html'} );
    fs.readFile('./index.html', (err, data)=> {
        if (err) {
            console.log(err);
            return res.end('<h1>Error!.</h1>');
        }
        return res.end(data);
        

    })


    // res.end('<h1 style="color:green">Gotcha</h1>');

}

const server = http.createServer(requestHandler);

server.listen( port, (err)=> { 

    if (err) {
        console.log(err);
        return;
    }

    console.log('The sever is up and running in a port : ', port)

});