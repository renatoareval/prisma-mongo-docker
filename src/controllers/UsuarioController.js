import express from 'express'
import { prisma } from '../config/prismaClient.js'


const listar = async (req, res) => {

    const result = await prisma.user.findMany();
    return res.send(result)


}

const listarPorId = async (req, res) => {
    try {
        const { id } = req.params

        const user = await prisma.user.findFirst({
            where: {
                id
            }
        })

        if (!user) {
            res.send({ msg: "Id não encontrado" })
        }
        return res.json(user)


    } catch (error) {
        return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
    }
}


const criar = async (req, res) => {
    try {
        const { name, email } = req.body

        const userExist = await prisma.user.findFirst({
            where: {
                email
            }
        })
        if (!userExist) {
            const users = await prisma.user.create({
                data: {
                    name,
                    email
                }
            })
            return res.status(200).json(users)
        }else{
            return res.send("Usuário já existe")
        }

    } catch (err) {
        return res.status(500).json([{ error: true, code: 500, message: "Erro interno do Servidor" }])
    }

}
const alterar = async (req, res) => {
    const { id } = req.params

    const user = await prisma.user.update({
        where: {
            id
        }, data: {
            name: req.body.name,
            email: req.body.email
        }
    })

    return res.status(200).json(user)
}

const deletar = async (req, res) => {
    const { id } = req.params

    const user = await prisma.user.delete({
        where: {
            id
        }
    })
    if (id != null) {
        res.send({
            message: "Usuário deletado com sucesso!",
            user: user
        })
    } else {
        res.send({ message: "Usuário não encontrado!" })
    }

}


const usuarioController = {
    listar,
    listarPorId,
    criar,
    alterar,
    deletar
}

export default usuarioController