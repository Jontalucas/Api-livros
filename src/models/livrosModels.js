import { Schema, model } from "mongoose";
//Modelo de dados dos livros
const livrosSchema = new Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anoPublicacao: { type: Number, required: true },
    genero: { type: String, required: true },
})

export default model("Livros", livrosSchema);