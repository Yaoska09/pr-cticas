const get = "SELECT id,id_persona,direccion FROM ENCARGADO";
const getById = "SELECT id,id_persona,direccion FROM ENCARGADO WHERE id = $1";
const getById_persona = "SELECT id, id_persona,direccion FROM ENCARGADO WHERE id_persona = $1";
const add = "INSERT INTO ENCARGADO (id_persona,direccion) VALUES ($1, $2)";
const remove = "DELETE FROM ENCARGADO WHERE id = $1";
const update = "UPDATE ENCARGADO SET id_persona=$1, direccion=$2  WHERE id = $3";
//checked
module.exports = {
    get,
    getById,
    getById_persona,
    add,
    remove,
    update,
}
