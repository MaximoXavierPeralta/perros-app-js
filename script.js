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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdne3UjrWnimqr5ZFRBk48RZTlM33gOSeA8SCPiiN4g&s=10",
        "https://www.lanacion.com.ar/resizer/v2/el-american-pitbull-terrier-es-equilibrado-CIIZKVMQ4JGHJBLCWAK4PY4XIA.jpg?auth=15967ac158f1b3e1076f7a45e2a07a24602e230834a376e2a7d37f1702d8ab05&width=420&height=686&quality=70&smart=true"
    ];

    render();
});