const http = require('http');

// Create HTTP Server
const server = http.createServer();

// Run Server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server berjalan pada http://localhost:${PORT}`);
});
