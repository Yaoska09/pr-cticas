const get = "SELECT id,nombre,descripcion,fecha FROM PROYECTOS";
const getById = "SELECT id,nombre,descripcion,fecha FROM PROYECTOS WHERE id = $1";
const getByFecha = "SELECT id, nombre,descripcion,fecha FROM PROYECTOS WHERE fecha= $1";
const add = "INSERT INTO PROYECTOS (nombre,descripcion,fecha) VALUES ($1, $2, $3)";
const remove = "DELETE FROM PROYECTOS WHERE id = $1";
const update = "UPDATE PROYECTOS SET nombre=$1,descripcion=$2,fecha=$3 WHERE id = $4";

module.exports = {
    get,
    getById,
    getByFecha,   
    add,
    remove,
    update,
}
