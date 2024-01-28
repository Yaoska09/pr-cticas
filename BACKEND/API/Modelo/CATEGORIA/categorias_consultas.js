const get = "SELECT id,dinero,descripcion FROM CATEGORIAS";
const getById = "SELECT id,dinero,descripcion FROM CATEGORIAS WHERE id = $1";
const add = "INSERT INTO CATEGORIAS (dinero,descripcion) VALUES ($1, $2)";
const remove = "DELETE FROM CATEGORIAS   WHERE id = $1";
const update = "UPDATE CATEGORIAS  SET dinero=$1,  descripcion=$2 WHERE id = $3";
//checked
module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}