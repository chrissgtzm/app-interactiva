const colors = require('colors');

//integrar archivos diferentes para que jale ala información
const {menu} = require('./helpers/menu')
const {leerInput} =require('.helpers/input');
const Clients = require('./models/clientes');

const main = async () => {
    //console.log('hola mundo'.rainbow)
   let opt = '';
    do{
        //le decimos al menu que este esperando unaopción
        opt = await menu ();
        switch(op){
            case '1':
            const nombre = await leerInput('Nombre del cliente:')
            Clientes.crearCliente(nombre);
            break
        }
        await pausa();
        //console.log(opt);
    } while (opt !== '0')
   

}

main();