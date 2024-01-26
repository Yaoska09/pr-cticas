const express = require("express");
const cors = require('cors');

const personas = require('../API/Modelo/PERSONA/personas_rutas');
const funcionarios = require('../API/Modelo/FUNCIONARIO/funcionarios_rutas');
const admistradores = require('../API/Modelo/ADMINISTRADOR/administradores_rutas');
const aulas = require('../API/Modelo/AULA/aulas_rutas');
const categorias = require('../API/Modelo/CATEGORIA/categorias_rutas');
const controles_asistencias = require('../API/Modelo/CONTROL_ASISTENCIA/controles_asistencias._rutas');
const cuotas = require('../API/Modelo/CUOTA/cuotas_rutas');
const encargados= require('../API/Modelo/ENCARGADO/encargados_rutas');
const personas_menores = require('../API/Modelo/PERSONA_MENOR/personas_menores_rutas');
const proyectos = require('../API/Modelo/PROYECTO/proyectos_rutas');
const rendimientos = require('../API/Modelo/RENDIMIENTO/rendimientos_rutas');
const roles = require('../API/Modelo/ROL/roles_rutas');
const tamizajes = require('../API/Modelo/TAMIZAJE/tamizajes_rutas');
const telefonos = require('../API/Modelo/TELEFONO/telefonos_rutas');



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({origin:'*'}));    //acceso a todos los origenes, cualquier url


app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD"
  );
  next();
});


app.use('/api/personas', personas);
app.use('/api/funcionarios',funcionarios);
app.use('/api/administradores',admistradores);
app.use('/api/aulas',aulas);
app.use('/api/categorias',categorias);
app.use('/api/controles_asistencias',controles_asistencias);
app.use('/api/cuotas',cuotas);
app.use('/api/encargados',encargados);
app.use('/api/personas_menores',personas_menores);
app.use('/api/proyectos',proyectos);
app.use('/api/rendimientos',rendimientos);
app.use('/api/roles',roles);
app.use('/api/tamizajes',tamizajes);
app.use('/api/telefonos',telefonos);

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});

app.get('/', (consulta, respuesta) => {
  respuesta.send('Servidor iniciado');
});


