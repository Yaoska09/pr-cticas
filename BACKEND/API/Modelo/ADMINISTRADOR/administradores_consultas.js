const get = "SELECT id,id_persona,correo,clave FROM ADMINISTRADORES";
const getById = "SELECT id,id_persona,correo,clave FROM ADMINISTRADORES WHERE id = $1";
const getByCorreo = "SELECT id, id_persona,correo,clave FROM ADMINISTRADORES WHERE correo = $1";
const add = "INSERT INTO ADMINISTRADORES (id_persona,correo,clave) VALUES ($1, $2, $3)";
const remove = "DELETE FROM ADMINISTRADORES WHERE id = $1";
const update = "UPDATE ADMINISTRADORES SET id_persona=$1, correo=$2, clave=$3,  WHERE id = $4";

module.exports = {
    get,
    getById,
    getByCorreo,
    add,
    remove,
    update,
}
