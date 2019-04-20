var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

var ip = "localhost"
var port = 3001

// Serve up public/ftp folder
var serve = serveStatic('public', {
  'index': ['index.html', 'index.htm']
})

// Create server
var server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(port)
server.addListener('listening', () => {
  console.log(`Start server on http://${ip}:${port}`);
})