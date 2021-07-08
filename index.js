/* ENTRY POINT */
// This file is in charge of starting the application

const server = require("./server");

// define a port
const port = process.argv[2] || process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Code School 2021 Doge Viewer App`);
  console.log(`Server Running on port :${port}`);
});

// more comments
