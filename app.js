const claveNombre = 'localStorage_explicacion_nombre';

const formulario = document.getElementById('formulario');
const nombreGuardar = document.getElementById('nombreGuardar');
const resultado = document.getElementById('resultado');
const nombreError = document.getElementById('errorNombre');

const formMostrar = document.getElementById('formMostrar');
const resultadoMostrar = document.getElementById('resultadoMostrar');

const formEditar = document.getElementById('formEditar');
const nombreEditar = document.getElementById('nombreEditar');
const resultadoEditar = document.getElementById('resultadoEditar');

const formEliminar = document.getElementById('formEliminar');
const resultadoEliminar = document.getElementById('resultadoEliminar');

const formMascota = document.getElementById('formMascota');
const mascota = document.getElementById('mascota');
const raza = document.getElementById('raza');
const edad = document.getElementById('edad');
const resultadoMascota = document.getElementById('resultadoMascota');

nombreGuardar.addEventListener('input', validarNombre);

function validarNombre(){
  nombre = nombreGuardar.value.trim();
  if(nombre === '' || nombre.length < 3){
    nombreError.textContent = 'Por favor ingrese un nombre válido';
    nombreError.style.color = 'red';
    return;
  } else{
    nombreError.textContent = '';
  }
}

formulario.addEventListener('submit', registrarNombre);

function registrarNombre(event){
  event.preventDefault();

  validarNombre();
  localStorage.setItem('Nombre Guardado', nombreGuardar.value);
  resultado.textContent = 'Nombre guardado correctamente';
  formulario.reset;
}

formMostrar.addEventListener('submit', mostrarNombre);

function mostrarNombre(event){
  event.preventDefault();

  const nombreGuardado = localStorage.getItem('Nombre Guardado');

  resultadoMostrar.textContent = nombreGuardado === null ? 'No hay un nombre guardado' : "Nombre guardado: " + nombreGuardado;
}

formEditar.addEventListener('submit', editarNombre);

function editarNombre(event){
  event.preventDefault();

  let nombre = NombreEditar.value;
  localStorage.setItem('Nombre Guardado', nombre);
  resultadoEditar.textContent = 'Nombre actualizado';
  formEditar.reset;
}

formEliminar.addEventListener('submit', eliminarNombre);

function eliminarNombre(event){
  event.preventDefault();

  localStorage.removeItem('Nombre Guardado');
  resultadoEliminar.textContent = 'Nombre eliminado';
}

formMascota.addEventListener('submit', guardarMascota);

function guardarMascota(event){
  event.preventDefault();

  const objetoMascota = {
    nombre: mascota.value,
    raza: raza.value,
    edad: edad.value
  };
  localStorage.setItem('Mascota', JSON.stringify(objetoMascota));
  formMascota.reset;
  resultadoMascota.textContent = 'Mascota guardada';
}