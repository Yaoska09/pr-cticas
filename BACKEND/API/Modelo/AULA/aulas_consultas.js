const get = "SELECT id,numero,descrpcion FROM AULA";
const getById = "SELECT id,numero,descrpcion FROM AULA WHERE id = $1";
const getByNumero = "SELECT id, numero,descrpcion FROM AULA WHERE numero = $1";
const add = "INSERT INTO AULA (numero,descrpcion) VALUES ($1, $2)";
const remove = "DELETE FROM AULA   WHERE id = $1";
const update = "UPDATE AULA  SET numero=$1,  descripcion=$2 WHERE id = $3";
//checked
module.exports = {
    get,
    getById,
    getByNumero,
    add,
    remove,
    update,
}