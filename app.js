function sayHello() {
    let nombre = document.getElementById('NombreCompleto')
    console.log(nombre)
    alert('Hola ' + nombre.value)
}
function getDataForm() {
    let nombre = document.getElementById('NombreCompleto')
    console.log(nombre.value)



    if (!verifyInterests()) {
        alert('Debe seleccionar al menos un interes')
    }

    if (nombre.value == '') {
        alert('El campo "Nombre" es obligatorio')
        nombre.setAttribute('style', 'border-color:red')
        nombre.setAttribute('placeholder', 'Escriba el nombre aqui')
        return
    }

    alert('Hola ' + nombre.value)
    let email = document.getElementById('Email')
    console.log(email.value)
    let fecha = document.getElementById('Fecha')
    console.log(fecha.value)
    let sexo = document.getElementById('Sexo')
    console.log(sexo.value)
    let caja = document.querySelectorAll('Caja')

    const datosFormulario = {
        nombre: nombre.value,
        fecha: fecha.value,
        email: email.value,
        sexo: sexo.value,
        caja: caja.value,
    }
    console.log(datosFormulario)

    users.push(datosFormulario)


    fetch('http://localhost/api-php/index.php', { 
        method: 'POST', body: JSON.stringify(datosFormulario) 
    })
        .then(response => result = response.json())
        .then(data => phpUsers = data)

        .catch(error => console.log(error))


    alert('Usted se ha registrado satidfactoriamente')
    
    showListUsers(datosFormulario);
    
}

function showListUsers(datosFormulario) {
    const table = document.getElementById('table-users')
    const row = document.createElement('tr')

    for (let prop in datosFormulario) {
        const col = document.createElement('td')

        if (prop == 'sexo') {

            col.innerHTML = datosFormulario[prop] == 1 ? 'Varon' : 'Mujer'
        } else {
            col.innerHTML = datosFormulario[prop]
        }
        row.appendChild(col)
    }
    table.appendChild(row)
}



function verifyRequired(element) {



    if (element.value == '') {
        element.setAttribute('style', 'border-color: red')
    } else {
        element.setAttribute('style', 'border-color:black')
    }
}
function verifyInterests() {
    const caja = document.querySelectorAll('#Caja')
    console.log(caja)
    for (let i = 0; i < caja.length; i++) {
        if (caja[i].checked) {
            return true
        }
    }
    return false
}



