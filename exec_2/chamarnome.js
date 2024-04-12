var http = require("http");

var info = require('./dadoaluno');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("___Nome do Aluno: "+ primeironome + " ___ Sobrenome: " + sobrenome + " ___ RGM: " + info.rgm);
    res.end();
}).listen(8092, ()=> {
    console.log('Se dar certo, aparece');
});