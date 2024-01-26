const get = "SELECT id,id_persona, rol,aula,correo,clave FROM FUNCIONARIOS";
const getById = "SELECT id,id_persona, rol,aula,correo,clave FROM FUNCIONARIOS WHERE id = $1";
const getByCorreo = "SELECT id, id_persona, rol,aula,correo,clave FROM FUNCIONARIOS WHERE correo = $1";
const add = "INSERT INTO FUNCIONARIOS (id_persona, rol,aula,correo,clave) VALUES ($1, $2, $3, $4, $5)";
const remove = "DELETE FROM FUNCIONARIOS WHERE id = $1";
const update = "UPDATE FUNCIONARIOS SET id_persona=$1, rol=$2, aula=$3, coreo=$4, clave=$5 WHERE id = $6";
//checked
module.exports = {
    get,
    getById,
    getByCorreo,
    add,
    remove,
    update,
}
