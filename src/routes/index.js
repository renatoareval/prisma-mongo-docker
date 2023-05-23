import usuariosRoutes from "./usuarioRoutes.js"


const routes = (app) => {

    app.route('/').get((req,res) =>{
        res.status(200)
        res.send({resposta: 'Testando prisma'})
    })

    app.use(usuariosRoutes) //express.json(),

}

export default routes;