import express from "express"

import usuarioController from "../controllers/UsuarioController.js"


const usuariosRoutes = express.Router()


usuariosRoutes
    .get('/usuarios', usuarioController.listar)
    .get('/usuarios/:id',usuarioController.listarPorId)
    .post('/usuarios', usuarioController.criar)
    .put('/usuarios/:id', usuarioController.alterar)
    .delete('/usuarios/:id',usuarioController.deletar)



export default usuariosRoutes