var net = require('net');
var readlineSync = require('readline-sync');

//const readline = require('readline');

var HOST = '127.0.0.1';
var PORT = 5000;

var client = new net.Socket();
//	const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

	
client.connect(PORT, HOST, function() {
	console.log('CONNECTED TO: ' + HOST + ':' + PORT);

var readlineSync = require('readline-sync');

	while (true) {
  		command = readlineSync.prompt();
  		client.write(command);
	}
});






/*rl.question(':', (mensagem ) => {	
 //console.log('Thank you for your valuable feedback:', mensagem );
	if( mensagem =='exit'){
		console.log(mensagem);
	} else {
		client.write(mensagem);		
	}
});
*/

