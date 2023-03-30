require ('colors');

const menu = ()=> {

    //Las promesas resulven un valor que se procesa y un error
    return new Promise (resolve =>{
        console.clear()
    console.log('============='.green)
    console.log('     MENU    '.green)
    console.log('=============\n'.green)

    console.log(`(1). Crear cliente`)
    console.log(`(2). Lista de clientes`)
    console.log(`(0). Salir`)

//Uso de std
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
//Ejecuta un callback, cuando el usuario introduce la opcion

readline.question(`Seleccione una opción:`,(opt) =>{
//imprime opcion seleccionada
//console.log(opt)
	readline.close();
	resolve(opt);
});
    })
}

const  pausa = ()=> {

        return new Promise (resolve =>{
        //Uso de std
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        //Ejecuta un callback, cuando el usuario introduce la opcion
        
        readline.question(`Presiona ENTER para continuar:`,() =>{
        //imprime opcion seleccionada
        //console.log(opt)
            readline.close();
            resolve();
        })
            });
        }



module.exports ={menu}

menu();