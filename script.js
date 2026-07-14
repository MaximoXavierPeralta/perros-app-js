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

    estado.fotos = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kVwY6E3UkmCgzAWgtGomGiRCMrGr8ZeYqsWeQUCCgEcPTwYvWzjBTEZljwOScmdW0PuSYcVD5CWmP8WEY5MS_0g9ISItFLhQNXgDMx9XSw&s=10",
        "https://images.dog.ceo/breeds/labrador/n02099712_100.jpg",
        "https://images.dog.ceo/breeds/pug/n02110958_100.jpg"
    ];

    render();
});