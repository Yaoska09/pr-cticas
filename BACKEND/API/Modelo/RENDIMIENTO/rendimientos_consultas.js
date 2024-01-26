const get = "SELECT id,id_menor,id_proyecto,nota FROM RENDIMIENTOS";
const getById = "SELECT id,id_menor,id_proyecto,nota FROM RENDIMIENTOS WHERE id = $1";
const getByFecha = "SELECT id, id_menor,id_proyecto,nota FROM RENDIMIENTOS WHERE fecha= $1";
const add = "INSERT INTO RENDIMIENTOS (id_menor,id_proyecto,nota) VALUES ($1, $2, $3)";
const remove = "DELETE FROM RENDIMIENTOS WHERE id = $1";
const update = "UPDATE RENDIMIENTOS SET id_menor=$1,id_proyecto=$2,nota=$3 WHERE id = $4";
//checked
module.exports = {
    get,
    getById,
    getByFecha,   
    add,
    remove,
    update,
}
