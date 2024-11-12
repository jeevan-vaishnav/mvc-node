const Server = require("./server");

const port = 3000;

const app = new Server(port);
app.start();

