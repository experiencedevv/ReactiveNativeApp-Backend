import express from "express"
import rotasPosts from "./postRoutes.js"
import rotasUsuario from "./usuarioRoutes.js"


const routes = (app) =>{

    app.route("/").get((req, res) => res.status(200).send("Teste de envio"))

    //middleware
    app.use(express.json(),rotasPosts)
    app.use(express.json(),rotasUsuario)

}

export default routes