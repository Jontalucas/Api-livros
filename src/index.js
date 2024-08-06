import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postLivros, getLivros, getLivroById, putLivro, deleteLivro } from "./controller/livrosController.js";
//Configurações iniciais
dotenv.config();
const app = express();
mongoose.connect(process.env.DB_CONNECTION ? process.env.DB_CONNECTION : "")
app.use(express.json());
app.listen(process.env.PORT, ()=> console.log("Servidor iniciado!"))

//Rota para adicionar livro
app.post("/livros", postLivros);

//Rota para listar livros
app.get("/livros", getLivros);

//Rota para buscar livro por id
app.get("/livros/:id", getLivroById);

//Rota para alterar um livro
app.put("/livros/:id", putLivro)

//Rota para deletar um livro
app.delete("/livros/:id", deleteLivro)