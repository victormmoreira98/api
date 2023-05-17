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



app.listen(8080)
