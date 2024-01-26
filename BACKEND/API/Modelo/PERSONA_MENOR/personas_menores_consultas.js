const get = "SELECT id,id_persona,id_encargado,autorizacion FROM PERSONAS_MENORES";
const getById = "SELECT id,id_persona,id_encargado,autorizacion FROM PERSONAS_MENORES WHERE id = $1";
const getById_persona = "SELECT id, id_persona,id_encargado,autorizacion FROM PERSONAS_MENORES WHERE id_persona = $1";
const getById_encargado = "SELECT id, id_persona,id_encargado,autorizacion FROM PERSONAS_MENORES WHERE id_encargado = $1";
const add = "INSERT INTO PERSONAS_MENORES (id_persona,id_encargado,autorizacion) VALUES ($1, $2,$3)";
const remove = "DELETE FROM PERSONAS_MENORES WHERE id = $1";
const update = "UPDATE PERSONAS_MENORES SET id_persona=$1, id_encargado=$2 autorizacion=$3  WHERE id = $4";

module.exports = {
    get,
    getById,
    getById_persona,
    getById_encargado,
    add,
    remove,
    update,
}
