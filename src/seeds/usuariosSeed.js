import { prisma } from '../config/prismaClient.js'
import { faker } from '@faker-js/faker';


const usuarios = async (qtd) => {

    await prisma.user.deleteMany()

    for (let i = 0; i < qtd; i++) {

        await prisma.user.createMany(
            {
                data: {
                    id: faker.string.uuid(),
                    name: faker.internet.userName(),
                    email: faker.internet.email()
                }
            }
        )

    }


    console.log("Usuarios seed executado com sucesso!");
}

export default usuarios
