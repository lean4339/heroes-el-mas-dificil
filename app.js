// Require de Express
const express = require("express");

// Require de FS
const fs = require("fs");
const { hrtime } = require("process");

// Ejecución de Express
const app = express();

// requiriendo router
const mainRouter = require("./routes/main");
const heroeRouter = require("./routes/heroes");
const creditosRouter = require("./routes/creditos")




// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server corre en puerto 3030'));

// Leyendo y parseando (en array) el contenido de heroes.json


// Ruta Raíz / ➝ Home

app.use("/", mainRouter)// usando el router

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use("/heroes",heroeRouter)


// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
	// Acá lo primero será encontrar al héroe que corresponda
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado


// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado


// Ruta Créditos
app.use("/creditos", creditosRouter)

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});