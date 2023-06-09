
const alumnos = [
    {
        nombre: "Miguel",
        apellido: "Bautista",
        edad: 24
    },
    {
        nombre: "Alejandro",
        apellido: "Tito",
        edad: 45
    },
    {
        nombre: "Abel",
        apellido: "Paz",
        edad: 28
    },
    {
        nombre: "Diego",
        apellido: "Maidana",
        edad: 24
    },
    {
        nombre: "Juan",
        apellido: "Rodriguez",
        edad: 31
    },
    {
        nombre: "Lionel",
        apellido: "Messi",
        edad: 28
    },
    {
        nombre: "Pedro",
        apellido: "Ortiz",
        edad: 24
    },
    {
        nombre: "Jesica",
        apellido: "Rossi",
        edad: 31
    },
    {
        nombre: "Walter",
        apellido: "Batista",
        edad: 31
    },
    {
        nombre: "Karim",
        apellido: "Benzema",
        edad: 28
    },
    {
        nombre: "Pedro",
        apellido: "Ortiz",
        edad: 24
    },
    {
        nombre: "Debora",
        apellido: "Flores",
        edad: 31
    },
]

let nom = prompt("Ingrese su nombre: ")
let ape = prompt("Ingrese su apellido: ")
let ed = prompt("Ingrese su edad: ")

const alumno = {
    nombre: nom,
    apellido: ape,
    edad: ed
}

alumnos.push(alumno)
console.log(alumnos)

const caja1 = document.getElementById("caja1")
for(const a of alumnos){
    caja1.innerHTML += `<div class="card">
                            <div class="card-img"></div>
                            <h3>Nombre: ${a.nombre}</h3>
                            <h3>Apellido: ${a.apellido}</h3>
                            <h3>Edad: ${a.edad}</h3>
                        </div>`
}
