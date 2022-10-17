var express = require('express');
var app = express();
var cors = require('cors');
const fileUpload = require('express-fileupload');
var porta = 4000;

var {campus} = require('./models');
var {curso} = require('./models');
var {matricula} = require('./models');
var {discente} = require('./models');
var {docente} = require('./models');
var {pesquisa} = require('./models');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(fileUpload());

app.set('view engine', 'ejs');

// Rota "/"

app.get("/", async function(req, res){
    res.render("index")
})

//Campus

app.get("/campus", async function(req, res){
    var mostrar = await campus.findAll();
    res.json(mostrar);
})

app.get("/campus/:id", async function(req, res){
    try {
        var mostrar = await campus.findByPk(req.params.id);
        res.json(mostrar)
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.get("/campus/:id/cursos", async function(req, res){
    var mostrar = await campus.findByPk(req.params.id, {include :  'cursos'})
    res.json(mostrar)
})

app.post("/campus", async function(req, res){
    try {
    var adicionar = await campus.create(req.body);
    res.json(adicionar);
    } catch (error) {
    res.status(500);
    res.json("Erro: " + error) 
    }
})

app.put("/campus/:id", async function(req, res){
    try {
        var atualizar = await campus.update(req.body, {where: {id:req.params.id}});
        res.json(atualizar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.delete("/campus/:id", async function(req, res){
    try {
        var apagar = await campus.destroy({where: {id:req.params.id}});
        res.json(apagar);
    } catch (error) {
        res.status(500)
        res.json("Erro" + error)
    }
})

//Curso

app.get("/curso", async function(req, res){
    var mostrar = await curso.findAll();
    res.json(mostrar);
})

app.get("/curso/:id", async function(req, res){
    try {
        var mostrar = await curso.findByPk(req.params.id)
        res.json(mostrar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.post("/curso", async function(req, res){
    try {
        var adicionar = await curso.create(req.body);
        res.json(adicionar);
    } catch (error) {
        res.status(500);
        res.json('Erro: ' + error)
    }
})

app.put("/curso/:id", async function(req, res){
    try {
        var atualizar = await curso.update(req.body, {where: {id:req.params.id}});
        res.json(atualizar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.delete("/curso/:id", async function(req, res){
    try {
        var apagar = await curso.destroy({where: {id:req.params.id}})
        res.json(apagar)
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

//Matricula

app.get("/matricula", async function(req, res){
    var mostrar = await matricula.findAll();
    res.json(mostrar);
})

app.get("/matricula/:id", async function(req, res){
    try {
        var mostrar = await matricula.findByPk(req.params.id);
        res.json(mostrar)
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.post("/matricula", async function(req, res){
    try {
    var adicionar = await matricula.create(req.body);
    res.json(adicionar);
    } catch (error) {
    res.status(500);
    res.json("Erro: " + error)    
    }
})

app.put("/matricula/:id", async function(req, res){
    try {
        var atualizar = await matricula.update(req.body, {where: {id:req.params.id}});
        res.json(atualizar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.delete("/matricula/:id", async function(req, res){
    try {
        var apagar = await matricula.destroy({where: {id:req.params.id}});
        res.json(apagar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

//Discente

app.get("/discente", async function(req, res){
    var mostrar = await discente.findAll();
    res.json(mostrar);
})

app.get("/discente/:id", async function(req, res){
    try {
        var mostrar = await discente.findByPk(req.params.id);
        res.json(mostrar)
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.post("/discente", async function(req, res){
    try {
    var adicionar = await discente.create(req.body);
    res.json(adicionar);
    } catch (error) {
        res.status(500);
        res.json("Erro: " + error)
    }
})

app.put("/discente/:id", async function(req, res){
    try {
        var atualizar = await discente.update(req.body, {where: {id:req.params.id}});
        res.json(atualizar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.delete("/discente/:id", async function(req, res){
    try {
        var apagar = await discente.destroy({where: {id:req.params.id}});
        res.json(apagar);
    } catch (error) {
        res.status(500)
        res.json("Erro:" + error)
    }
})

//Docente

app.get("/docente", async function(req, res){
    var mostrar = await docente.findAll();
    res.json(mostrar);
})

app.get("/docente/:id", async function(req, res){
    try {
        var mostrar = await docente.findByPk(req.params.id);
        res.json(mostrar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.post("/docente", async function(req, res){
    try {
    var adicionar = await docente.create(req.body);
    res.json(adicionar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.put("/docente/:id", async function(req, res){
    try {
        var atualizar = await docente.update(req.body, {where: {id:req.params.id}});
        res.json(atualizar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.delete("/docente/:id", async function(req, res){
    try {
        var apagar = await docente.destroy({where: {id:req.params.id}});
        res.json(apagar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

//Pesquisa

app.get("/pesquisa", async function(req, res){
    var mostrar = await pesquisa.findAll();
    res.json(mostrar);
})

app.get("/pesquisa/:id", async function(req, res){
    try {
        var mostrar = await pesquisa.findByPk(req.params.id);
        res.json(mostrar)
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

app.post("/pesquisa", async function(req, res){
    try {
    var adicionar = await pesquisa.create(req.body);
    res.json(adicionar);

    const files = req.files.pesquisaFile
    files.name = req.body.url_download + ".pdf";
    const uploadPath = __dirname + '/uploads/' + files.name

    files.mv(uploadPath)
        
    } catch (error) {
        res.status(500);
        res.json("Erro: " + error)
    }
})

app.put("/pesquisa/:id", async function(req, res){
    try {
        var atualizar = await pesquisa.update(req.body, {where: {id:req.params.id}});
        res.json(atualizar);
    } catch (error) {
        res.status(500)
    }
})

app.delete("/pesquisa/:id", async function(req, res){
    try {
        var apagar = await pesquisa.destroy({where: {id:req.params.id}});
        res.json(apagar);
    } catch (error) {
        res.status(500)
        res.json("Erro: " + error)
    }
})

//Download Pesquisa 

app.get("/pesquisa/download/:id", async function(req, res){
    try {
    var pegar = await pesquisa.findOne({where: {id: req.params.id}})
    filedownload = __dirname + "/uploads/" + pegar.url_download + ".pdf"
    res.download(filedownload)
    res.status(200)
    } catch (error) {
    res.status(404)
    res.json("ID inexistente, " + "erro: " + error)
    }
    
})

//Listen

app.listen(porta, function(){
    console.log("O servidor está rodando na porta http://localhost:" + porta)
})