const http =  require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to your home page!")
    }
    if(req.url === '/about'){
        res.end("Here is our short description")
    }
    res.end(
        `<h1>Oops!</h1>
        <p>we can't seem to find a page you are looking for</p>
        <a href="/">Back to the homepage</a>
        `
    )
})

server.listen(5000)