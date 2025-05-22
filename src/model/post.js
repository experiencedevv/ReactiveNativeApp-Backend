import mongoose from "mongoose";

//schema aqui vc vai definir quais sao as prorpiredades do de um posy

const postSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, require: true},
    descricao: {type: String, require: true},
},{versionKey: false}) 

// posts é a coleção, modelo é um objeto que representa uma coleção e segue as regras do schema
const post = mongoose.model("posts", postSchema)


export default post