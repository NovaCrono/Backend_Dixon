const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const json_information = fs.readFileSync('src/base_datos/Correcciones.json', 'utf-8');
let inst = JSON.parse(json_information);

exports.viewCorrection = async (req, res) =>{
    res.send(inst);
}

exports.createCorrection = async (req, res) =>{
    const {item, Contenido, Fecha, id_Estudiante} = req.body;
    inst.push({
        id: uuidv4(),
        item, 
        Contenido,
        Fecha,
        id_Estudiante
    });

    const json_information = JSON.stringify(inst);
    fs.writeFileSync('src/base_datos/Correcciones.json', json_information, 'utf-8');
    res.send(inst);
}