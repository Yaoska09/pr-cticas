const get = "SELECT id,id_funcionario,id_menor,fecha,asistencia FROM CONTROLES_ASISTENCIAS";
const getById = "SELECT id,id_funcionario,id_menor,fecha,asistencia FROM CONTROLES_ASISTENCIAS WHERE id = $1";
const getById_menor = "SELECT id, id_funcionario,id_menor,fecha,asistencia FROM CONTROLES_ASISTENCIAS WHERE id_menor= $1";
const getById_funcionario = "SELECT id, id_funcionario,id_menor,fecha,asistencia FROM CONTROLES_ASISTENCIAS WHERE id_funcionario = $1";
const add = "INSERT INTO CONTROLES_ASISTENCIAS (id_funcionario,id_menor,fecha,asistencia) VALUES ($1, $2, $3,$4)";
const remove = "DELETE FROM CONTROLES_ASISTENCIAS WHERE id = $1";
const update = "UPDATE CONTROLES_ASISTENCIAS SET id_funcionario=$1,id_menor=$2,fecha=$3,asistencia=$4  WHERE id = $5";
//checked
module.exports = {
    get,
    getById,
    getById_menor,
    getById_funcionario,
    add,
    remove,
    update,
}
