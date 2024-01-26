const get = "SELECT id,id_persona,numero,descrpcion FROM TELEFONOS";
const getById = "SELECT id,id_persona,numero,descrpcionFROM TELEFONOS WHERE id = $1";
const getByNumero = "SELECT id,id_persona, numero,descrpcion FROM TELEFONOS WHERE numero = $1";
const getById_persona = "SELECT id,id_persona, numero,descrpcion FROM TELEFONOS WHERE id_persona = $1";
const add = "INSERT INTO TELEFONOS (id_persona,numero,descrpcion ) VALUES ($1,$2,$3)";
const remove = "DELETE FROM TELEFONOS   WHERE id = $1";
const update = "UPDATE TELEFONOS  SET id_persona=$1,numero=$2,  descripcion=$3 WHERE id = $4";

module.exports = {
    get,
    getById,
    getByNumero,
    getById_persona,
    add,
    remove,
    update,
}