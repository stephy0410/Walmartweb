let product = [
   { Nombre: "Manzana granny smith por kilo",
     Precio: "$57.00/kg",
     url: "./img/580b57fbd9996e24bc43c116.png",
     etiqueta:"fruta"
    },
    {
        Nombre: "Zanahoria por kilo",
        Precio: "$10.90/kg",
        url:"./img/carrot.png",
        etiqueta:"verdura"
    },
    {
        Nombre: "Pechuga de pollo con hueso y piel 900 g aprox",
        Precio: "$124.00/kg",
        url:"./img/pollo.png",
        etiqueta:"carne"
    },
    {
        Nombre: "Fresas 454 g",
        Precio: "$99.00/kg",
        url:"./img/fresas.png",
        etiqueta:"fruta"
    },
    {
        Nombre: "Pasta Barilla spaguetti N°5 de 500 g",
        Precio: "$21.50/kg",
        url:"./img/pasta.webp",
        etiqueta:"pasta"
    },
];
addLi(product);
function addLi(arreglo) {
    let contenido = "";
    let contenido2 = "";
    let url = "";
    for (i = 0; i <arreglo.length; i++) {
        //asignar variables
        let li = document.createElement("li");
        let p = document.createElement("p");
        let p2 = document.createElement("p");
        let div = document.createElement("div");
        let button = document.createElement("button");
        let img = document.createElement("img");
        let br= document.createElement("br");
//console.log(p);

//Lo de adentro de las etiquetas p
        contenido =arreglo[i].Nombre ;
        contenido2 =arreglo[i].Precio;
        url =arreglo[i].url
       // console.log(url);
//le asigna las variables a las etiquetas
        p.appendChild(document.createTextNode(contenido));
        p2.appendChild(document.createTextNode(contenido2));
        button.appendChild(document.createTextNode("Agregar"));
        img.src= url;
        img.alt=arreglo[i].Nombre;
        p.className="texto"
        p2.className="jke"
        button.className="boton"
        li.className="borde"
        img.className="imagenes"


//Imprime
let htmlLI = document.querySelector("#card").appendChild(li)
        htmlLI.appendChild(img) 

        htmlLI.appendChild(p)

        htmlLI.appendChild(p2)
        
        htmlLI.appendChild(div).appendChild(button);
    }
};


 function myFunction(peramsEtiqueta){
   let productosFiltrados = []   
   

   let elements = document.querySelectorAll('.borde');

   for (i = 0; i < elements.length; i++) {
    elements[i].remove()
   }


   for (i = 0; i <product.length; i++) {

    if (product[i].etiqueta == peramsEtiqueta){

        productosFiltrados.push(product[i])
    }
   }
   addLi(productosFiltrados)

}

