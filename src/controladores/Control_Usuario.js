const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const json_information = fs.readFileSync('src/base_datos/Usuarios.json', 'utf-8');
let inst = JSON.parse(json_information);
let confirm = 1;

exports.viewUser = async (req, res) =>{
    res.send(inst);
}

exports.login = async (res, req)=>{
    const {User, Password} = req.body;
    for(let i=0; i<inst.lenght; i++){
        if(inst[i].User === User && inst[i].Password === Password){
            confirm = 2;
        }
    }
    if(confirm===2){
        console.log('Encontrado');
    }else{
        console.log('No Encontrado');
    }
}