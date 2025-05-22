import express from "express"
import PostController from "../controllers/postControllers.js"



const routes = express.Router()



routes.get("/posts", PostController.listarPost)
routes.get("/posts/:id", PostController.listarPostPorId)
routes.post("/posts", PostController.cadastrarPost)
routes.put("/posts/:id", PostController.atualizarPost)
routes.delete("/posts/:id", PostController.excluirPost )



export default routes


