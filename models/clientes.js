


class Clientes{
    // hash
    _clients ={};
    constructor(){
        this._clientes = {}
    }

    crearCliente(name =''){
        const client= new Cliente(name);
        this._clientes[client.id] = client;
    }
}

module.exports = Clientes;