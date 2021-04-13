const express =require('express');
const app= express();
const server = require('http').Server(app);
const bodyParser = require("body-parser");
const ejs = require("ejs");
const {v4 : uuidv4 }= require("uuid");
const io = require("socket.io")(server);

const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true
});
//const { v4: uuidV4 } = require('uuid')

app.use('/peerjs', peerServer);

//const { reduce } = require('async');

//const server = require('http').Server(app);
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/',(req,res) => {
        console.log("hi");
        res.render("index");
    }
    );

server.listen(3000);