import mongoose from "mongoose"
import * as dotenv from 'dotenv'

dotenv.config()
const URL = process.env.DATABASE_URL

await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(response => console.log("MongoDB conectado!"))
    .catch(response => console.log("Erro na conexão com o MongoDB"));

let db = mongoose.connection;

export default db;