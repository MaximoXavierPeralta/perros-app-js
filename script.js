const estado = { raza: '', fotos: [] };
const input = document.getElementById("raza");
const boton = document.getElementById("buttonSearch");
const contenedor = document.getElementById("contenedor-resultados");

function render() {

    contenedor.innerHTML = "";

    const imagenes = estado.fotos.map((foto) => {
        const img = document.createElement("img");
        img.src = foto;
        return img;
    });

    contenedor.append(...imagenes);
}

boton.addEventListener("click", () => {

    estado.raza = input.value;

    buscarPerros();
});

function buscarPerros() {

    fetch(`https://dog.ceo/api/breed/${estado.raza}/images`)
        .then((response) => {

            if (!response.ok) {
                throw new Error("Raza no encontrada");
            }

            return response.json();
        })
        .then((datos) => {

            estado.fotos = datos.message.slice(0, 5);

            render();
        })
        .catch((error) => {

            console.error("Error al buscar perros:", error);

    });

}