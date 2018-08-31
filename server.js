const net = require('net');
const fs = require('fs');

HOST = '127.0.0.1';
PORT = 5100;


// Inicia o TCP Server
net.createServer (function (socket) {

  socket.name = HOST + ":" + socket.remotePort;
   
  console.log('\x1b[32m%s\x1b[0m', "\n"+ socket.name + " entrou no chat.\n");
  escreveArquivo( socket.name + " entrou no chat.");
  
  socket.on('data', function (data) {
    console.log(socket.name + "> " + data);
    escreveArquivo(socket.name + "> " + data);
  });

  // Trata a desconexao do cliente
  socket.on('end', function () {
    console.log("Conexão finalizada\n");
  });

  //Tratamento de erro de conexão
  socket.on("error", function () {
    console.log('\x1b[33m%s\x1b[0m', "\n Cliente " + socket.name + " desconectado.");
  });

      
}).listen(PORT);


console.log("Chat Server rodando na porta: " + PORT + "\n");


function escreveArquivo(msg){
  const CreateFiles = fs.createWriteStream('./historicoChatTCP.txt', {
      flags: 'a' 
  })
  CreateFiles.write( msg +'\r\n') //'\r\n at the end of each value
}
