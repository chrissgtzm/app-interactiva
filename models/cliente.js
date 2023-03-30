const { v4: uuidv4 } = require('uuid')
;
class Client{
    id = ''
    nombre = ''
    constructor(nombre){
        this.id = uuidv4
        this.nombre = nombre
    }
}

module.exports = {Client}
