const get = "SELECT id,id_funcionario,id_menor,fecha,asistencia FROM CONTROL_ASISTENCIA";
const getById = "SELECT id,id_funcionario,id_menor,fecha,asistencia FROM CONTROL_ASISTENCIA WHERE id = $1";
const getById_menor = "SELECT id, id_funcionario,id_menor,fecha,asistencia FROM CONTROL_ASISTENCIA WHERE id_menor= $1";
const getById_funcionario = "SELECT id, id_funcionario,id_menor,fecha,asistencia FROM CONTROL_ASISTENCIA WHERE id_funcionario = $1";
const add = "INSERT INTO CONTROL_ASISTENCIA (id_funcionario,id_menor,fecha,asistencia) VALUES ($1, $2, $3,$4)";
const remove = "DELETE FROM CONTROL_ASISTENCIA WHERE id = $1";
const update = "UPDATE CONTROL_ASISTENCIA SET id_funcionario=$1,id_menor=$2,fecha=$3,asistencia=$4  WHERE id = $5";

module.exports = {
    get,
    getById,
    getById_menor,
    getById_funcionario,
    add,
    remove,
    update,
}
