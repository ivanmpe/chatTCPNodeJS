const net = require('net');
const readlineSync = require('readline-sync');

const HOST = '127.0.0.1';
const PORT = 5100;

var client = new net.Socket();

	
client.connect(PORT, HOST, function() {
	
	console.log('_________________Chat TCP_________________\n\n');

	console.log('Voce se conectou em: ' + HOST + ':' + PORT);
	console.log('Basta Ctrl + C para encerrar a conexão.');


	while (true) {
  		var command = readlineSync.prompt();
  		client.write(command);
  	}
});

client.on('end', function () {
	console.log('\nConexão encerrada. ');
});


client.on('error', function () {
   console.log("\n Error na conexao. ");
   client.end();
});
