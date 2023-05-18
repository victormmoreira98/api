const app = require("express")()
const cors = require("cors")

app.get("/fatorial", (req, res)=> {    //nome de onde eu vou entrar
                                       //req = pedido do usuario        res = resposta
    let n = parseInt(req.query.n)
    let resultado = 1

   

    for(let i = 0;i<n;i++){

        resultado = resultado *( n - i )
    
    }

    res.status(200).send({
        resposta : resultado.toString()
    })

})                     

app.use(cors())


app.get("/superfatorial", (req, res)=> {

    let n = parseInt(req.query.n)

    res.status(200).send({
        resposta : superFactorial(n).toString()
    })
})

app.listen(8080)



function factorial(x){
    if(x<=1){
        return 1
    }
    else{
        return x * factorial(x-1)
    }
}


//calculate superfactorial using recursion
function superFactorial(x){
    if(x<=1){
        return 1
    }
    else{
        return x * factorial(x-1) * superFactorial(x-1)
    }
}