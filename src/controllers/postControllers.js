import post from "../model/post.js";


class PostController{

    static async listarPost(req, res){
        const listaPosts = await post.find({})
        res.status(200).json(listaPosts)

    }


    static async listarPostPorId(req, res){
        const id = req.params.id
        const livroEncontrado = await post.findById(id)
        res.status(200).json(livroEncontrado)

    }


    static async cadastrarPost(req,res){
        const novoLivro =  await post.create(req.body)
        res.status(201).send({message: "criado com sucesso", post: novoLivro})


    }

    static async atualizarPost(req, res){
        const id = req.params.id
        await post.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "Post atualizado"})

    }
 
    static async excluirPost(req, res){
        const id = req.params.id
        await post.findByIdAndDelete(id)
        res.status(200).json({message: "Post excluido"})

    } 
}



export default PostController

