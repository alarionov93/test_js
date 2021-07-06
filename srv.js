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
    // вычисление, вставка в шаблон, генерация ответа клиенту
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
