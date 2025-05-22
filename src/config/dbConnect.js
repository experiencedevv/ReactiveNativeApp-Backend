import mongoose from "mongoose";




async function conectaNobanco(){
    // string de conexão, mongoose conecta o bancon de dados a aplicação
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.rwoeqnd.mongodb.net/learnplus?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}



export default conectaNobanco





