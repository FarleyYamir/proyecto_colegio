import Express from 'express'
import path from 'path'

const app = Express()
const dir = path.resolve()
const dir_front = "frontend/build"

app.use(Express.static(dir_front))

app.listen('5000', function(){
    console.log("Server has started")
})

app.get('/', function(req, res){
    res.sendFile(dir + "/" + dir_front + "index.html")
})

app.get("/home", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get("/eventos_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get("/reglas_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get("/inscripcion_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get("/resultados_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get("/galeria_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/"+ "index.html")
})

app.get("/nosotros_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/" + "index.html")
})

