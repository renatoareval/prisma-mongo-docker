import db from "../config/dbConect.js";
import usuarios from "./usuariosSeed.js";

db.on("error", console.log.bind(console, "Conexão com o banco falhou!"));
db.once("open", () => {
    console.log("Conexão com o banco estabelecida!");
});


await usuarios(20)

db.close((err) => {
    err ? console.log(err) : console.log("Conexão com o banco encerrada!");
});

