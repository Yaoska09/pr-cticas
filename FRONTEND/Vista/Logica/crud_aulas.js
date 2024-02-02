const aulas_url = 'http://localhost:3000/api/aulas';


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



// Función para agregar una aula
async function agregarAula() {
    const numero = document.getElementById('numero').value;
    const descripcion = document.getElementById('descripcion').value;
    

    if (!numero || !descripcion) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const aula = { numero,descripcion };

    try {
        await create(aulas_url, aula);
        alert('Agregado con éxito');
        limpiarFormulario();
        await actualizarLista();
        llenarSelect();
    } catch (error) {
        console.error('Error al agregar aula:', error);
        alert('Error al agregar aula. Consulta la consola para más detalles.');
    }
}



// Función para eliminar una aula
async function eliminarAula() {
    const selectedId = document.getElementById('selectAula').value;

    if (!selectedId) {
        alert('Por favor, seleccione una aula para eliminar.');
        return;
    }

    try {
        await eliminate(aulas_url, selectedId);
        alert('Eliminado con éxito');
        limpiarFormulario();
        await actualizarLista();
        llenarSelect();
    } catch (error) {
        console.error(`Error al eliminar para el ID: ${selectedId}`, error);
        alert(`Error al eliminar para el ID: ${selectedId}. Consulta la consola para más detalles.`);
    }
}



// Función para editar una aula
async function editarAula() {
    const selectedId = document.getElementById('selectAula').value;
    const numero = document.getElementById('numeroEditar').value;
    const descripcion = document.getElementById('descripcionEditar').value;
    

    if (!selectedId || !numero || !descripcion) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const objetoEditado = {
        numero,
        descripcion
    };

    try {
        await update(`${aulas_url}/${selectedId}`, objetoEditado);
        alert('Editado con éxito');
        limpiarFormulario();
        await actualizarLista();
        llenarSelect();
    } catch (error) {
        console.error('Error al editar aula:', error);
        alert('Error al editar aula. Consulta la consola para más detalles.');
    }
}

// Función para llenar opciones de select
function llenarSelect() {
    const selectAula = document.getElementById('selectAula');

    // Obtener la lista de aulas almacenada en el localStorage
    get(aulas_url)
        .then(aulas => {
            // Verificar si aulas es un array antes de usar forEach
            if (!Array.isArray(aulas)) {
                console.error('Error: La respuesta no es un array de aulas');
                return;
            }

            // Limpiar opciones actuales
            selectAula.innerHTML = '<option value="">Seleccionar</option>';

            // Llenar opciones con los nombres de las aulas
            aulas.forEach(aula => {
                const option = document.createElement('option');
                option.value = aula.id;
                option.textContent = `${aula.id}:  ${aula.numero}  ${aula.descripcion}`;
                selectAula.appendChild(option);
            });

            // Agregar evento change al selectAula
            selectAula.addEventListener('change', function () {
                const selectedId = this.value;

                // Obtener la información de la aula seleccionada
                const aulaSeleccionada = aulas.find(aula => aula.id == selectedId);

                if (aulaSeleccionada) {
                    document.getElementById('numeroEditar').value = aulaSeleccionada.numero;
                    document.getElementById('descripcionEditar').value = aulaSeleccionada.descripcion;
                    
                } else {
                    // Limpiar campos de texto si la aula seleccionada no está definida
                    limpiarFormulario();
                }
            });
        })
        .catch(error => {
            console.error('Error al obtener la lista de aulas:', error);
            alert(error);
        });
}


// Función para actualizar la lista de aulas en la tabla
function actualizarLista() {
    const aulasList = document.getElementById('aulasList');

    // Obtener la lista de aulas almacenada en el localStorage
    get(aulas_url)
        .then(aulas => {
            // Verificar si aulas es un array antes de usar forEach
            if (!Array.isArray(aulas)) {
                console.error('Error: La respuesta no es un array de aulas');
                return;
            }

            // Limpiar la tabla
            aulasList.innerHTML = '';

            // Llenar la tabla con los datos de las aulas
            aulas.forEach(aula => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${aula.id}</td>
                    <td>${aula.numero}</td>
                    <td>${aula.descripcion}</td>
                                    `;
                aulasList.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error al obtener la lista de aulas:', error);
            alert(error);
        });
}

// Función para limpiar los campos del formulario
function limpiarFormulario() {
    document.getElementById('numero').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('selectAula').value = '';
    document.getElementById('numeroEditar').value = '';
    document.getElementById('descripcionEditar').value = '';
   
}


document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a elementos del DOM
    const btnAgregar = document.getElementById('btnAgregar');
    const btnEditar = document.getElementById('btnEditar');
    const btnEliminar = document.getElementById('btnEliminar');
    const selectAula = document.getElementById('selectAula');
    const numeroEditar = document.getElementById('numeroEditar');
    const descripcionEditar = document.getElementById('descripcionEditar');
    const aulaList = document.getElementById('aulasList');

    // Escuchar clic en botón "Agregar"
    btnAgregar.addEventListener('click', function () {
        agregarAula();
    });

    // Escuchar clic en botón "Editar"
    btnEditar.addEventListener('click', function () {
        editarAula();
    });

    // Escuchar clic en botón "Eliminar"
    btnEliminar.addEventListener('click', function () {
        eliminarAula();
    });

    // Llenar opciones de select al cargar la página
    llenarSelect();

    // Llenar lista de personas al cargar la página
    actualizarLista();
});
