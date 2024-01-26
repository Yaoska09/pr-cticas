const get = "SELECT id,id_menor,periodo,resultado FROM TAMIZAJES";
const getById = "SELECT id,id_menor,periodo,resultado FROM TAMIZAJES WHERE id = $1";
const getById_menor = "SELECT id, id_menor,periodo,resultado FROM TAMIZAJES WHERE id_menor = $1";
const add = "INSERT INTO TAMIZAJES (id_menor,periodo,resultado) VALUES ($1,$2,$3)";
const remove = "DELETE FROM TAMIZAJES WHERE id = $1";
const update = "UPDATE TAMIZAJES SET id_menor=$1,periodo=$2,resultado=$3 WHERE id = $4";
//checked
module.exports = {
    get,
    getById,
    getById_menor,
    add,
    remove,
    update,
}
