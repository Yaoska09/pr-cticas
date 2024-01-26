const get = "SELECT id,dinero,descrpcion FROM CATEGORIA";
const getById = "SELECT id,dinero,descrpcion FROM CATEGORIA WHERE id = $1";
const add = "INSERT INTO CATEGORIA (dinero,descrpcion) VALUES ($1, $2)";
const remove = "DELETE FROM CATEGORIA   WHERE id = $1";
const update = "UPDATE CATEGORIA  SET dinero=$1,  descripcion=$2 WHERE id = $3";
//checked
module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}