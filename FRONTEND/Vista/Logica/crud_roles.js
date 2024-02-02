// crud_aulas.js

const aulas_url = 'http://localhost:3000/api/roles';

function get(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
}

function create(url, data) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    // Realiza la solicitud POST a la API
    return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`La solicitud no se pudo completar correctamente. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta de la API:', data);
            return data;
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
            throw error;
        });
}

function update(url, data) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Convierte el objeto de datos a formato JSON
    };
    // Realiza la solicitud PUT a la API
    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no se pudo completar correctamente');
            }
            return response.json(); // Parsea la respuesta JSON si la hay
        })
        .then(data => {
            console.log('Respuesta de la API:', data);
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
}

function eliminate(url, id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Realiza la solicitud DELETE a la API
    return fetch(`${url}/${id}`, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no se pudo completar correctamente');
            }
            console.log(`Eliminado con éxito para el ID: ${id}`);
        })
        .catch((error) => {
            console.error(`Error al eliminar para el ID: ${id}`, error);
            throw error;
        });
}
// Función para agregar una rol
async function agregarRol() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    

    if (!nombre || !descripcion) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const rol = { nombre,descripcion };

    try {
        await create(roles_url, rol);
        alert('Agregado con éxito');
        limpiarFormulario();
        await actualizarLista();
        llenarSelect();
    } catch (error) {
        console.error('Error al agregar rol:', error);
        alert('Error al agregar rol. Consulta la consola para más detalles.');
    }
}

// Función para eliminar una rol
async function eliminarRol() {
    const selectedId = document.getElementById('selectRol').value;

    if (!selectedId) {
        alert('Por favor, seleccione un rol para eliminar.');
        return;
    }

    try {
        await eliminate(roles_url, selectedId);
        alert('Eliminado con éxito');
        limpiarFormulario();
        await actualizarLista();
        llenarSelect();
    } catch (error) {
        console.error(`Error al eliminar para el ID: ${selectedId}`, error);
        alert(`Error al eliminar para el ID: ${selectedId}. Consulta la consola para más detalles.`);
    }
}

// Función para editar una rol
async function editarRol() {
    const selectedId = document.getElementById('selectRol').value;
    const nombre = document.getElementById('nombreEditar').value;
    const descripcion = document.getElementById('descripcionEditar').value;
    

    if (!selectedId || !nombre || !descripcion) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const objetoEditado = {
        nombre,
        descripcion
    };

    try {
        await update(`${roles_url}/${selectedId}`, objetoEditado);
        alert('Editado con éxito');
        limpiarFormulario();
        await actualizarLista();
        llenarSelect();
    } catch (error) {
        console.error('Error al editar rol:', error);
        alert('Error al editar rol. Consulta la consola para más detalles.');
    }
}
// Función para llenar opciones de select
function llenarSelect() {
    const selectRol = document.getElementById('selectRol');

    // Obtener la lista de roles almacenada en el localStorage
    get(roles_url)
        .then(roles => {
            // Verificar si roles es un array antes de usar forEach
            if (!Array.isArray(roles)) {
                console.error('Error: La respuesta no es un array de roles');
                return;
            }

            // Limpiar opciones actuales
            selectRol.innerHTML = '<option value="">Seleccionar</option>';

            // Llenar opciones con los nombres de las roles
            roles.forEach(rol => {
                const option = document.createElement('option');
                option.value = rol.id;
                option.textContent = `${rol.id}:  ${rol.nombre}  ${rol.descripcion}`;
                selectAula.appendChild(option);
            });

            // Agregar evento change al selectRol
            selectRol.addEventListener('change', function () {
                const selectedId = this.value;

                // Obtener la información del rol seleccionada
                const rolSeleccionada = roles.find(rol => rol.id == selectedId);

                if (rolSeleccionada) {
                    document.getElementById('nombreEditar').value = rolSeleccionada.nombre;
                    document.getElementById('descripcionEditar').value = rolSeleccionada.descripcion;
                    
                } else {
                    // Limpiar campos de texto si el rol seleccionada no está definida
                    limpiarFormulario();
                }
            });
        })
        .catch(error => {
            console.error('Error al obtener la lista de roles:', error);
            alert(error);
        });
}

// Función para actualizar la lista de roles en la tabla
function actualizarLista() {
    const rolesList = document.getElementById('rolesList');

    // Obtener la lista de roles almacenada en el localStorage
    get(roles_url)
        .then(roles => {
            // Verificar si roles es un array antes de usar forEach
            if (!Array.isArray(roles)) {
                console.error('Error: La respuesta no es un array de roles');
                return;
            }

            // Limpiar la tabla
            rolesList.innerHTML = '';

            // Llenar la tabla con los datos de los roles
            roles.forEach(rol=> {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${rol.id}</td>
                    <td>${rol.nombre}</td>
                    <td>${rol.descripcion}</td>
                                    `;
                rolesList.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error al obtener la lista de roles:', error);
            alert(error);
        });
}

// Función para limpiar los campos del formulario
function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('selectRol').value = '';
    document.getElementById('nombreEditar').value = '';
    document.getElementById('descripcionEditar').value = '';
   
}



// Resto del código que ya tienes...

// Lógica de autocompletado
var autocompleteInput = document.getElementById("autocompleteInput");
var selectRol = document.getElementById("selectRol");

// Extiende la función llenarSelect para incluir autocompletado
function llenarSelectAutocompletado(sugerencias) {
    // Limpiar opciones actuales
    selectRol.innerHTML = "<option value=''>Seleccionar</option>";

    // Agregar sugerencias al menú desplegable
    sugerencias.forEach(function (sugerencia) {
        var option = document.createElement("option");
        option.value = sugerencia.id; // Ajusta esto según la estructura de tus datos
        option.textContent = `${sugerencia.id}:  ${sugerencia.nombre}  ${sugerencia.descripcion}`;
        selectRol.appendChild(option);
    });

    // Agregar evento change al selectRol
    selectRol.addEventListener("change", function () {
        var selectedId = this.value;

        // Obtener la información del rol seleccionado
        var rolSeleccionada = sugerencias.find(function (rol) {
            return rol.id == selectedId;
        });

        if (rolSeleccionada) {
            document.getElementById("nombreEditar").value = rolSeleccionada.nombre;
            document.getElementById("descripcionEditar").value = rolSeleccionada.descripcion;
        } else {
            // Limpiar campos de texto si la aula seleccionada no está definida
            limpiarFormulario();
        }
    });
}

autocompleteInput.addEventListener("input", function () {
    var input = this.value.toLowerCase();

    // Aquí puedes realizar una solicitud al servidor para obtener las sugerencias
    // Puedes utilizar fetch, XMLHttpRequest o cualquier otra forma de hacer solicitudes AJAX

    // Ejemplo: solicitar sugerencias al servidor
    get(roles_url)
        .then(function (roles) {
            // Filtrar aulas basadas en la entrada del usuario
            var sugerencias = roles.filter(function (rol) {
                return rol.nombre.toLowerCase().includes(input) || rol.descripcion.toLowerCase().includes(input);
            });

            // Llenar el select y mostrar las sugerencias
            llenarSelectAutocompletado(sugerencias);
        })
        .catch(function (error) {
            console.error("Error al obtener la lista de aulas:", error);
            alert(error);
        });
});


// Resto del código que ya tienes...

// Obtener referencias a elementos del DOM
document.addEventListener('DOMContentLoaded', function () {
  const btnAgregar = document.getElementById('btnAgregar');
  const btnEditar = document.getElementById('btnEditar');
  const btnEliminar = document.getElementById('btnEliminar');
  const selectRol = document.getElementById('selectRol');
  const nombreEditar = document.getElementById('nombreEditar');
  const descripcionEditar = document.getElementById('descripcionEditar');
  const rolList = document.getElementById('rolesList');

  // Escuchar clic en botón "Agregar"
  btnAgregar.addEventListener('click', function () {
    agregarRol(); 
  });

  // Escuchar clic en botón "Editar"
  btnEditar.addEventListener('click', function () {
    editarRol();
  });

  // Escuchar clic en botón "Eliminar"
  btnEliminar.addEventListener('click', function () {
    eliminarRol();
  });

  // Llenar opciones de select al cargar la página
  llenarSelect();

  // Llenar lista de personas al cargar la página
  actualizarLista();

});
