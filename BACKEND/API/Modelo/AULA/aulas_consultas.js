const get = "SELECT id,numero,descripcion FROM AULAS";
const getById = "SELECT id,numero,descripcion FROM AULAS WHERE id = $1";
const getByNumero = "SELECT id, numero,descripcion FROM AULAS WHERE numero = $1";
const add = "INSERT INTO AULAS (numero,descripcion) VALUES ($1, $2)";
const remove = "DELETE FROM AULAS   WHERE id = $1";
const update = "UPDATE AULAS  SET numero=$1,  descripcion=$2 WHERE id = $3";
//checked
module.exports = {
    get,
    getById,
    getByNumero,
    add,
    remove,
    update,
}