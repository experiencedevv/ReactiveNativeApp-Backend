import usuario from "../model/usuario.js";
//import bcrypt from bcrypt
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";



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
        //const novoUsuario =  await usuario.create(req.body)
        const {nome,email, senha, perfil} =  req.body
        if(!email || !senha){
            return res.status(400).json({message: "Email e senha são obrigatórios"})
        }



        try{
            const extingerUser = await usuario.findOne({email})
            if(extingerUser){
                return res.status(400).json({message: "Usuário já existe"})
            }

            const salt =await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(senha,salt)

            const novoUsuario =  await usuario.create({nome,email, senha: hashedPassword ,perfil})
            return res.status(201).send({message: "criado com sucesso", usuario: novoUsuario, status: res.status})


        } catch(error){
            console.error("Erro ao registrar o usuário:", error)
            res.status(500).json({message:"Erro ao registrar usuário", error: error.message})

        }

        


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

    static async login(req,res){
        //const novoUsuario =  await usuario.create(req.body)
        const {email, senha,id} =  req.body
        if(!email || !senha){
            return res.status(400).json({message: "Email e senha são obrigatórios"})
        }

        try{
            const user = await usuario.findOne({email})
            if(!user){
                return res.status(400).json({message: "Usuário não encontrado"})
            }

            const isMatch = await bcrypt.compare(senha, user.senha)
            if(!isMatch){
                return res.status(400).json({message: "Senha incorreto"})
            }

            const token = jsonwebtoken.sign(
                {id: user.id, usuario: user.email},
                process.env.JWT_SECRET,
                {expiresIn: "1h"}


            )

            res.status(200).json({
                message: "Login bem sucedido",
                token,
                usuario: user.email,
                perfil: user.perfil
            })


        } catch(error){
            console.error("Erro ao registrar o usuário:", error)
            res.status(500).json({message:"Erro no login", error: error.message})

        }

        


    }

}



export default UsuarioController