const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>Docker Web Server</h1>
        <p>A simple web server running in Docker.</p>
        <p>Status: Running</p>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Web server running on port ${PORT}`);
});