const tabla = [
    { identificacion: 1234567, nombre: 'mara', apellido: 'gonzalez', genero: 'Femenino', edad: 12, direccion: 'calle 89', ciudad: 'Barranquilla', correo: 'mari@gmail.com' },
    { identificacion: 1234534, nombre: 'mara', apellido: 'gonzalez', genero: 'Femenino', edad: 12, direccion: 'calle 89', ciudad: 'Barranquilla', correo: 'mari@gmail.com' },
    { identificacion: 1223499, nombre: 'mara', apellido: 'gonzalez', genero: 'Femenino', edad: 12, direccion: 'calle 89', ciudad: 'Barranquilla', correo: 'mari@gmail.com' }
];

const listar = () => {
    let tbody = document.getElementById("data");
    let reg = "";
    for (let i = 0; i < tabla.length; i++) {
        reg += `<tr>
        <td class='text-center'>${i + 1}</td>
        <td class='text-center'>
            <b>${tabla[i].identificacion}</b>
        </td>
        <td>${tabla[i].nombre}</td>
        <td>${tabla[i].apellido}</td>
        <td>${tabla[i].genero}</td>
        <td>${tabla[i].edad}</td>
        <td>${tabla[i].direccion}</td>
        <td>${tabla[i].ciudad}</td>
        <td>${tabla[i].correo}</td>
        </tr>
        `;
    }
    tbody.innerHTML = reg;
}
const validar = ({ identificacion, nombre, apellido, edad, direccion, ciudad, correo }) => {
    const id = tabla.find(item => item.identificacion === parseInt(identificacion.value));
    const email = tabla.find(item => item.correo === correo.value);

    if (id) {
        alert("La identificacion ya se encuentra registrada.")
        identificacion.focus()
        return false;
    } else if (email) {
        alert("El correo ya se encuentra registrada.")
        correo.focus()
        return false;
    }
    else if (!identificacion.value.trim()) {
        alert("Por favor, ingrese su número de identificacion")
        identificacion.focus()
        return false;
    } else if (!nombre.value.trim()) {
        alert("Por favor ingrese su nombre")
        nombre.focus()
        return false;
    } else if (!apellido.value.trim()) {
        alert("Por favor ingrese su apellido")
        apellido.focus()
        return false;
    } else if (!document.querySelector('input[name="genero"]:checked')) {
        alert("Por favor seleccione el genero")
        return false;
    } else if (!edad.value.trim()) {
        alert("Por favor ingrese su edad")
        edad.focus()
        return false;
    } else if (edad.value.length != 2) {
        alert("Por favor ingrese una edad valida")
        edad.focus()
        return false;
    } else if (!direccion.value.trim()) {
        alert("Por favor ingrese su dirección")
        direccion.focus()
        return false;
    } else if (!ciudad.value.trim()) {
        alert("Por favor ingrese su Ciudad")
        ciudad.focus()
        return false;
    } else if (!correo.value.trim()) {
        alert("Por favor ingrese su correo")
        correo.focus()
        return false;
    }else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.value))){
        alert("Por favor, ingrese un correo valido.")
        correo.focus()
        return false;
    } 
    return true;
};

const registrar = () => {
    const identificacion = document.getElementById('identificacion')
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const edad = document.getElementById('edad')
    const direccion = document.getElementById('direccion')
    const ciudad = document.getElementById('ciudad')
    const correo = document.getElementById('correo')

    if (validar({ identificacion, nombre, apellido, edad, direccion, ciudad, correo })) {
        const genero = document.querySelector('input[name="genero"]:checked').value
        const nuevo = {
            identificacion: identificacion.value,
            nombre: nombre.value,
            apellido: apellido.value,
            genero: genero,
            edad: edad.value,
            direccion: direccion.value,
            ciudad: ciudad.value,
            correo: correo.value,
        }
        tabla.push(nuevo);
        listar();
    }
}
