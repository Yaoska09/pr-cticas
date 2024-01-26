const get = "SELECT id,nombre,descrpcion FROM ROLES";
const getById = "SELECT id,nombre,descrpcion FROM ROLES WHERE id = $1";
const getByNombre = "SELECT id,nombre,descrpcion FROM ROLES WHERE nombre = $1";
const add = "INSERT INTO ROLES (nombre,descrpcion) VALUES ($1, $2)";
const remove = "DELETE FROM ROLES   WHERE id = $1";
const update = "UPDATE ROLES SET nombre=$1,descripcion=$2 WHERE id = $3";
//checked
module.exports = {
    get,
    getById,
    getByNombre,
    add,
    remove,
    update,
}