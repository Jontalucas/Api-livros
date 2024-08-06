import livrosModels from "../models/livrosModels.js"
//Função para adicionar livros
export const postLivros = async (req, res) => {
    try {
        const body = req.body
        await livrosModels.create(body)
        return res.status(201).json({message: "Livro cadastrado com sucesso!"});
    } catch (error) {
        return res.status(500).json({message:"Erro ao cadastrar o livro! "+ error})
    }
}
//Função para listar todos os livros
export const getLivros = async (req, res) => {
    try {
        const livros = await livrosModels.find()
        return res.status(200).json(livros);
    } catch (error) {
        return res.status(500).json({message:"Erro ao buscar os dados dos livros! "+ error})
    }
}
//Função para buscar livro por ID
export const getLivroById = async (req, res) => {
    try {
        const id  = req.params.id
        const livro = await livrosModels.findById(id)
        if (!livro){
            return res.status(404).json({message: "Livro não encontrado!"})
        }
        return res.status(200).json(livro);
    } catch (error) {
        return res.status(500).json({message:"Erro ao encontrar o livro! "+ error})
    }
}
//Função para a alteração dos livros
export const putLivro = async (req, res) => {
    try {
        const id  = req.params.id
        const body = req.body
        const livro = await livrosModels.findById(id)
        if (!livro){
            return res.status(404).json({message: "Livro não encontrado!"})
        }
        await livrosModels.findByIdAndUpdate(id, body)
        return res.status(200).json({mensagem: "Dados do livro alterados com sucesso!"});
    } catch (error) {
        return res.status(500).json({message:"Erro ao encontrar o livro! "+ error})
    }
}
//Função para deletar um livro
export const deleteLivro = async (req, res) => {
    try {
        const id  = req.params.id
        const body = req.body
        const livro = await livrosModels.findById(id)
        if (!livro){
            return res.status(404).json({message: "Livro não encontrado!"})
        }
        await livrosModels.findByIdAndDelete(id, body)
        return res.status(200).json({mensagem: "Livro deletado com sucesso!"});
    } catch (error) {
        return res.status(500).json({message:"Erro ao encontrar o livro! "+ error})
    }
}