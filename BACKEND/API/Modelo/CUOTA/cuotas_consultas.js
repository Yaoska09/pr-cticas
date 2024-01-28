const get = "SELECT id,id_menor,id_categoria FROM CUOTAS";
const getById = "SELECT id,id_menor,id_categoria FROM CUOTAS WHERE id = $1";
const getById_menor = "SELECT id, id_menor,id_categoria FROM CUOTAS WHERE id_menor= $1";
const add = "INSERT INTO CUOTAS (id_menor,id_categoria) VALUES ($1, $2)";
const remove = "DELETE FROM CUOTAS WHERE id = $1";
const update = "UPDATE CUOTAS SET id_menor=$1,id_categoria=$2 WHERE id = $3";
//checked
module.exports = {
    get,
    getById,
    getById_menor,
    add,
    remove,
    update,
}
