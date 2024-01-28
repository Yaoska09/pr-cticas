const get = "SELECT id,id_persona,direccion FROM ENCARGADOS";
const getById = "SELECT id,id_persona,direccion FROM ENCARGADOS WHERE id = $1";
const getById_persona = "SELECT id, id_persona,direccion FROM ENCARGADOS WHERE id_persona = $1";
const add = "INSERT INTO ENCARGADOS (id_persona,direccion) VALUES ($1, $2)";
const remove = "DELETE FROM ENCARGADOS WHERE id = $1";
const update = "UPDATE ENCARGADOS SET id_persona=$1, direccion=$2  WHERE id = $3";
//checked
module.exports = {
    get,
    getById,
    getById_persona,
    add,
    remove,
    update,
}
