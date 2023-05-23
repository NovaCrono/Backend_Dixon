const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const json_information = fs.readFileSync('src/base_datos/AnteProyecto.json', 'utf-8');
let inst = JSON.parse(json_information);

exports.viewAnteProyect = async (req, res) =>{
    res.send(inst);
}

exports.createAnteProyect = async (req, res) =>{
    const {DescripcionProblem, PlanteamientoProblem, Hipotesis, ObjetivoGeneral, TituloTentativo, Justificacion} = req.body;
    inst.push({
        id: uuidv4(),
        DescripcionProblem, 
        PlanteamientoProblem, 
        Hipotesis, 
        ObjetivoGeneral, 
        TituloTentativo, 
        Justificacion,
        id_Estudiante
    });

    const json_information = JSON.stringify(inst);
    fs.writeFileSync('src/base_datos/Proyecto.json', json_information, 'utf-8');
    res.send(inst);
}

exports.deleteAnteProyect = async (req, res) =>{
    inst = inst.filter(inst => inst.id != req.params.id);
    const json_information = JSON.stringify(inst);
    fs.writeFileSync('src/base_datos/AnteProyecto.json', json_information, 'utf-8');
    res.send('¡Eliminado!')
}

exports.editAnteProyect = async (req, res) =>{
    var {Nombre, Descripcion, DescripcionProblem, PlanteamientoProblem, Hipotesis, ObjetivoGeneral, TituloTentativo, Justificacion} = req.body;

    var index = inst.findIndex(insta => insta.id == req.params.id);

    inst[index] = {
        ...inst[index],
        DescripcionProblem: DescripcionProblem, 
        PlanteamientoProblem: PlanteamientoProblem, 
        Hipotesis: Hipotesis, 
        ObjetivoGeneral: ObjetivoGeneral, 
        TituloTentativo: TituloTentativo, 
        Justificacion: Justificacion
    }

    const json_information = JSON.stringify(inst[index]);
    fs.writeFileSync('src/base_datos/Proyecto.json', json_information, 'utf-8');
    res.send(json_information+'Actualizado')
}