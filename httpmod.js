const http = require('http');

const server = http.createServer((req,res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write('welcome to the World of Node.js');
    // res.end();
    // if(req.url === '/') {
    //     res.write('Home Page');
    // }
    // else if (req.url === '/about') {
    //     res.write('About Page');
    // } else if (req.url === '/contact') {
    //     res.write('Contact Page');
    // } else {
    //     res.write('404 Page');
    // }
    // res.end();

    if(req.url === '/') {
        res.end('Home Page');
    }
    else if (req.url === '/about') {
        res.end('About Page');
    } else if (req.url === '/contact') {
        res.end('Contact Page');
    } else {
        res.end(
            `<h1>Page not found</h1>
            <p>The page you are looking for is not found.</p>
            also you can try <a href="/">Home Page</a>`
        );
    }
})

server.listen(8080);