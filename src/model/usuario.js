import mongoose from "mongoose";


const usuarioSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome: {type: mongoose.Schema.Types.String},
    email: {type: mongoose.Schema.Types.String},
    senha: {type: mongoose.Schema.Types.String},
    perfil: {type: mongoose.Schema.Types.String}
}, {versionKey: false})


const usuario =  mongoose.model("usuarios", usuarioSchema)

export default usuario