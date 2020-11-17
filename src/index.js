const express = require("express")
const app = express() //atribuimos as funções a variável

app.get("/projeto", (request, response) => {
    return response.json([
        "Projeto 1", 
        "Projeto 2"
    ])
})

app.post('/projeto', (request, response) =>{
    return response.json([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ])
})

app.put('/projeto/:id', (request, response) =>{
    return response.json([
        "Projeto 4",
        "Projeto 3",
        "Projeto 2"
    ])//http://localhost:3333/projeto/4
})

app.delete('/projeto/:id', (request, response) =>{
    return response.json([
        "Projeto 3",
        "Projeto 2"
    ])
})

app.listen(3333, () =>{
    console.log("Iniciando Back-end")
})