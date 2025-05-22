import usuario from "../model/usuario.js";
import bcrypt from 'bcrypt'


class UsuarioController{

    static async listarUsuario(req, res){
        const listaPosts = await usuario.find({})
        res.status(200).json(listaPosts)

    }


    static async listarUsuarioPorId(req, res){
        const id = req.params.id
        const livroEncontrado = await usuario.findById(id)
        res.status(200).json(livroEncontrado)

    }


    static async cadastrarUsuario(req,res){
        const novoUsuario =  await usuario.create(req.body)
        res.status(201).send({message: "criado com sucesso", usuario: novoUsuario})


    }

    static async atualizarUsuario(req, res){
        const id = req.params.id
        await usuario.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "Post atualizado"})

    }
 
    static async excluirUsuario(req, res){
        const id = req.params.id
        await usuario.findByIdAndDelete(id)
        res.status(200).json({message: "Post excluido"})

    } 
}



export default UsuarioController