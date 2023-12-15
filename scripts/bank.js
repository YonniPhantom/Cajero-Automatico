const usuarios = [
    { nombre: "Itzel", password: "itzel123", saldo: 200 },
    { nombre: "Yoni", password: "yoni123", saldo: 200 },
    { nombre: "Jett", password: "jett123", saldo: 200 },
];
let currentUser = null;

function consulta() {
    alert(`Tu saldo es de: $${currentUser.saldo}`)
}

function depositar() {
    let amount = Number.parseInt(prompt("Ingresa la cantidad a depositar: "));
    console.log(amount + currentUser.saldo);
    if((amount + currentUser.saldo) > 990) {
        return alert("No puedes tener más de $990");
    }

    currentUser.saldo += amount;
    alert("Deposito exitoso! Nuevo saldo: $" + currentUser.saldo)
}

function retirar() {
    let amount = Number.parseInt(prompt("Ingresa la cantidad a retirar: "));
    console.log(amount + currentUser.saldo);
    if((currentUser.saldo - amount) < 10) {
        return alert("No puedes tener menos de $10");
    }

    currentUser.saldo -= amount;
    alert("Retiro exitoso! Nuevo saldo: $" + currentUser.saldo)
}

function login(user, password) {
    let error = document.querySelectorAll(".error");

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre == user) {
            console.log(usuarios[i].password);
            console.log(password)
            if (comprobarContraseña(password, usuarios[i].password)) {
                console.log("inicia sesion")
                currentUser = usuarios[i];
                document.getElementById("title").innerText = `Welcome ${currentUser.nombre}!`;
                document.getElementById("subtitle").innerText = `Select an Action`;
                document.getElementById("accounts").style.display = "none";
                document.getElementById("inicio").style.display = "block";
            } else {
                error.forEach(e => e.innerText = "Contraseña Incorrecta");
            }
        }
    }
}



function comprobarContraseña(ingresada, guardada) {
    return ingresada === guardada;
}