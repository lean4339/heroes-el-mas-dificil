const heroes = require("../modulos/leerjson")
let controlador = {
    mostrar: (req,res)=>{
        res.send(heroes)
    },
    agregarid:(req,res)=>{
        res.send("Por favor agrega un id luego de '/detalle'")
    },
    mostrarDetalle : (req,res)=>{
        let id = req.params.id;
        let heroe= null;
        for (let i = 0; i < heroes.length; i++){
            if(Number(id)== heroes[i].id){
                heroe= heroes[i] 
            }
        }
        if(heroe !== null){
            res.send(`Hola mi nombre es: ${heroe.nombre} y soy ${heroe.profesion}`)
        }
        else{
            res.send("El heroe no se encuentra en la lista")
        }
    },
    mostrarPorOk: (req,res)=>{
        let id = req.params.id;
        let heroe;
        let ok = req.params.ok;
        for (let i = 0; i < heroes.length; i++){
            if(Number(id)== heroes[i].id){
                heroe= heroes[i];
            }
        }
       
        switch(true){
            case heroe== null && ok == undefined:
                res.send("No se encuentra el heroe o la heroina");
                break;
            case heroe== null && ok == "ok":
                res.send("No se encuentra el heroe o la heroina");
                break;
            case heroe !== null && ok !== "ok":
                res.send(`Hola soy ${heroe.nombre} lamento que no desees saber mas de mi`);
                break;
            case heroe !== null && ok == "ok":
                res.send(`Hola soy ${heroe.nombre} y esta es mi historia ${heroe.resenia}`);
                break;
        }
    },
}

module.exports = controlador;