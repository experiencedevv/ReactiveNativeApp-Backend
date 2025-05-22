 import express from "express"
 import conectaNobanco from "./config/dbConnect.js"
 import routes from "./routes/index.js"
 import cors from "cors"
 

 const conexao = await conectaNobanco()

 //evento de  conexão de erro
 conexao.on("error",(erro) =>{
  console.error("erro de conexão", erro)
 })

 // conexão aberta
  conexao.once("open", () =>{
    console.log("conexão com o banco feita com sucesso")
  })


 const app = express()
 app.use(cors())
 routes(app)

 export default app