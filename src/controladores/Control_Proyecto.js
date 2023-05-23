const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const json_information = fs.readFileSync('src/base_datos/Proyecto.json', 'utf-8');
let inst = JSON.parse(json_information);

exports.viewProyect = async (req, res) =>{
    res.send(inst);
}

exports.createProyect = async (req, res) =>{
    const {Nombre, Descripcion, id_Estudiante}  = req.body;

    inst.push({
        id: uuidv4(),
        Nombre,
        Descripcion,
        id_Estudiante
    });

    const json_information2 = JSON.stringify(inst);
    fs.writeFileSync('src/base_datos/Proyecto.json', json_information2, 'utf-8');
    res.send(inst);
}

exports.deleteProyect = async (req, res) =>{
    inst = inst.filter(inst => inst.id != req.params.id);
    const json_information = JSON.stringify(inst);
    fs.writeFileSync('src/base_datos/Proyecto.json', json_information, 'utf-8');
    res.send('¡Eliminado!')
}