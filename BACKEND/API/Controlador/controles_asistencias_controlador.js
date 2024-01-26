const pool = require("../conexion_BD");
const consultas = require('../Modelo/CONTROL_ASISTENCIA/controles_asistencias_consultas');

const get = (req, res) => {
    pool.query(consultas.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}


const add = (req, res) => {
    const { id_funcionario,id_menor,fecha,asistencia } = req.body;
    pool.query(consultas.getByCorreo, [correo], (error, results) => {//modificar siguiendo el archivo de consulta en  la carpeta MODELO
        if (results.rows.length) {
            res.json("ya existe");
	    return;
        }
        pool.query(consultas.add, [id_funcionario,id_menor,fecha,asistencia], (error, results) => {
            if (error) throw error;
            res.status(201).json('creado exitosamente');
        });
    });
};



const getById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(consultas.getById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getById_funcionario = (req, res) => {
    const correo = req.params.id_funcionario;
    pool.query(consultas.getById_funcionario, [id_funcionario], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const getById_menor = (req, res) => {
    const correo = req.params.id_menor;
    pool.query(consultas.getById_menor, [id_menor], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


const remove = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(consultas.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).send("No existe en la base de datos");
            return;
        }
        pool.query(consultas.remove, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Eliminado exitosamente");
        });
    });
};

const update = (req, res) => {
    const id = parseInt(req.params.id);
    const { id_funcionario,id_menor,fecha,asistencia} = req.body;
    pool.query(consultas.getById, [id], (error, results) => {//este no debo modificar exactamente getbyId
        const notFound = !results.rows.length;
        if (notFound) {
            res.status(404).send("No existe en la base de datos");
            return;
        }
        pool.query(consultas.update, [id_funcionario,id_menor,fecha,asistencia], (error, results) => {
            if (error) throw error;
            res.status(200).json("Actualizado exitosamente");
        });
    });
};


module.exports = {
    get,
    getById,
    getById_menor,
    getById_funcionario,
    add,
    remove,
    update,
}
