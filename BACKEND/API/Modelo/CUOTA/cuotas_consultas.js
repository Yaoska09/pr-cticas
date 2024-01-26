const get = "SELECT id,id_menor,id_categoria FROM CUOTA";
const getById = "SELECT id,id_menor,id_categoria FROM CUOTA WHERE id = $1";
const getById_menor = "SELECT id, id_menor,id_categoria FROM CUOTA WHERE id_menor= $1";
const add = "INSERT INTO CUOTA (id_menor,id_categoria) VALUES ($1, $2)";
const remove = "DELETE FROM CUOTA WHERE id = $1";
const update = "UPDATE CUOTA SET id_menor=$1,id_categoria=$2 WHERE id = $3";

module.exports = {
    get,
    getById,
    getById_menor,
    add,
    remove,
    update,
}
