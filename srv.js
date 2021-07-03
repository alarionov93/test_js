const http = require('http');
const fs = require('fs');
const express = require('express')

const app = express();

app.post("/users/new", function(request, response){ // TODO: change url
    // отправляем ответ
    console.log("post recieved");
    // request
    // console.log(request.body);
    response.send('{"response": "text"}');
    // TODO: sendFile of json
});

// TODO: add more app.get returning json files!

app.use("/static", express.static(__dirname));// use it

app.get("/", function(request, response){
    // отправляем ответ
    response.sendFile(__dirname + "/index.html");
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);

// const server = http.createServer((req, res) => {
// 	console.log(req.url);
// 	console.log(req.method);
// 	// const filePath = 'index.html';
// 	if (req.method == 'POST') {
// 		// res.statusCode = 200;
// 		// res.setHeader('Content-Type', 'text/plain');
// 		// res.end("OK");
// 		// console.log(req.body);
// 		req.on('data', function(data) {
// 			console.log(data);
// 		});
// 		console.log("action");
// 	}
// 	let filePath = req.url.split('/')[1];
// 	// console.log(filePath);
// 	fs.access(filePath, fs.constants.R_OK, err => {
//         if(err){
//             res.statusCode = 404;
//             res.end("Resourse not found!");
//         }
//         else {
//             fs.createReadStream(filePath).pipe(res);
//         }
//     });
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
