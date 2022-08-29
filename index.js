const express = require("express"); 
const {Server:HttpServer} = require("http"); 
const {Server:IOServer} = require("socket.io"); 
const PORT = 8080; 

const app = express(); 
const httpServer = new HttpServer(app); 
const io = new IOServer(httpServer); 

app.use(express.static("public")); 


//HandleBars SetUp
const {engine} = require("express-handlebars"); 
app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./views")

app.get("/", (req,res)=> { 
   res.render("home.handlebars")
})

const server = httpServer.listen(PORT, () => { 
    console.log("Usando el puerto: " + PORT)
})

server.on("error", (err)=> { 
    console.log(err)
} )