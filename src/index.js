const express = require("express")
const app = express() //atribuimos as funções a variável
app.use(express.json())

//query params(parâmetros get => filtrar, listar as informações)
//route params(identificar recursos => atualiza e deleta)
//request body()

app.get("/projeto", (request, response) => {
    const {title, dev} = request.query
    console.log(title)
    console.log(dev)

    return response.json([
        "Projeto 1", 
        "Projeto 2"
    ])
})

app.post('/projeto', (request, response) =>{
    const body = request.body
    console.log(body)

    return response.json([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ])
})

app.put('/projeto/:id', (request, response) =>{
    const params = request.params
    console.log(params)
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