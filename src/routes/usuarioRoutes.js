import express from "express"
import UsuarioController from "../controllers/usuarioController.js"



const routes = express.Router()



routes.get("/usuario", UsuarioController.listarUsuario)
routes.get("/usuario/:id", UsuarioController.listarUsuarioPorId)
routes.post("/usuario", UsuarioController.cadastrarUsuario)
routes.put("/usuario/:id", UsuarioController.atualizarUsuario)
routes.delete("/usuario/:id", UsuarioController.excluirUsuario)



export default routes


