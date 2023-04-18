const tabla = [
    { identificacion: "1234567", nombre: 'mara', apellido: 'gonzalez', genero: 'Femenino', edad: 12, direccion: 'calle 89', ciudad: 'Barranquilla', correo: 'mari@gmail.com' },
    { identificacion: "1234534", nombre: 'mara', apellido: 'gonzalez', genero: 'Femenino', edad: 12, direccion: 'calle 89', ciudad: 'Barranquilla', correo: 'matito@gmail.com' },
    { identificacion: "1223499", nombre: 'mara', apellido: 'gonzalez', genero: 'Femenino', edad: 12, direccion: 'calle 89', ciudad: 'Barranquilla', correo: 'aaaa@gmail.com' }
];
let i =1;
let cuerpotabla = document.getElementById('data');

const listar=()=>{
    let usuarios = ""; 
    for (let i = 0; i< tabla.length; i++) {
      usuarios+=`<tr><th scope="row">${i+1}</th><td>${tabla[i].identificacion}</td><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].genero}</td><td>${tabla[i].edad} años</td><td>${tabla[i].direccion}</td><td>${tabla[i].ciudad}</td><td>${tabla[i].correo}</td></tr>`
       
    }
    cuerpotabla.innerHTML=usuarios;
}

function validarNumero(input) {
    let texto = input.value;
    if (texto.length == 0) {
        alert("Debe llenar el campo");
        input.focus();
    } else {
        let num = parseInt(texto);
        if (isNaN(num)) {
            alert("Ingrese un Valor Numerico");
            input.focus();
        } else {
            return true;
            
        }
    }
}

function validarTexto(input) {
    let texto = input.value;
    if (texto.length ==0 || !isNaN(texto)) {
        alert("Debe Llenar el Campo con texto");
        input.focus();
    } else {
        return true; 
    }
}

function validarDireccion(input) {
    let dire = input.value;
    if (dire.length == 0) {
        alert("Debe Indicar la Direccion");
        input.focus();
    } else {
        return true;
    }
}

function validarGenero() {
    if (!document.querySelector('input[name="genero"]:checked')) {
        alert("Por favor seleccione el genero");
        return;
    } else {
        return true;
    }
}

function validarCorreo(correo) {
    if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.value))){
        alert("Por favor, ingrese un correo valido.")
        correo.focus()
        return false;
    } else {
        return true;
    }
}

function validar(input) {
    const id = tabla.find(item => item.identificacion === (input.value));
    if (id) {
        alert("La identificacion ya se encuentra registrada.")
        input.focus()
        return false;
    } else {
        return true;
    }
}

function validarExistencia(input) {
    const id = tabla.find(item => item.correo === (input.value));
    if (id) {
        alert("El Correo ya se encuentra registrado.")
        input.focus()
        return false;
    } else {
        return true;
    }
}

const registrar = () => {
    const identificacion = document.getElementById('identificacion');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const genero = document.querySelector('input[name="genero"]:checked');
    const edad = document.getElementById('edad');
    const direccion = document.getElementById('direccion');
    const ciudad = document.getElementById('ciudad');
    const correo = document.getElementById('correo');
    if (validarNumero(identificacion)&& validar(identificacion) && validarNumero(edad) && validarTexto(nombre)&& validarTexto(apellido) && validarTexto(ciudad) && validarDireccion(direccion) && validarGenero()&& validarCorreo(correo)&& validarExistencia(correo)) {
        cuerpotabla.innerHTML = "";
        cuerpotabla.innerHTML += `<tr><th scope="row">${i}</th><td>${identificacion.value}</td><td>${nombre.value}</td><td>${apellido.value}</td><td>${genero.value}</td><td>${edad.value}</td><td>${direccion.value}</td><td>${ciudad.value}</td><td>${correo.value}</td></tr>`
        i++;
        const nuevo = {identificacion:identificacion.value, nombre:nombre.value, apellido:apellido.value, genero:genero.value, edad:edad.value, direccion:direccion.value, ciudad:ciudad.value, correo:correo.value}
        tabla.push(nuevo);
        alert("Nuevo Registro");
    }
}
