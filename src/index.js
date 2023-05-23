const app = require('./app');

async function main(){
    await app.listen(app.get('port'));
    console.log('Conectado a http://localhost:'+app.get('port'));
}

main();