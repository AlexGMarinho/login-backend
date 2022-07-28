import express from 'express';

const app = express();
app.use(express.json());
let pessoa = {
    nome: 'teste',
    email: 'teste@teste.com',
    password: '123456',
};

app.post('/login', function (request, response) {
    console.log(request.body.email === pessoa.email && request.body.password === pessoa.password);
    if (request.body.email === pessoa.email && request.body.password === pessoa.password) {
        return response.send({ sucesso: true });
    }
    return response.send({ sucesso: false });
});
app.listen(3500);
