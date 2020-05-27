import Anuncio from './entidad.js'
window.onload = function() {
   traerAnuncio();
  };

let btnGuardar = document.getElementById('btnGuardar');
let info = document.getElementById('divInfo');
let btnBaja= document.getElementById('btnBaja')

let img = document.createElement('img');
img.setAttribute('src','img/810.gif');
img.setAttribute('alt','spinner');

let formulario = document.forms[0];

btnGuardar.addEventListener('click',formulario);
btnBaja.addEventListener('click',Eliminar);

formulario.onsubmit=(e)=>{
    e.preventDefault();//cancelar el compaortamiento por defecto
    // console.log("Submit cancelado");
let transaccion;
let titulo = document.querySelector('#idTitulo').value;

(document.querySelector('#idVenta').checked) 
? transaccion = document.querySelector('#idVenta').value 
: transaccion = document.querySelector('#idAlquiler').value;

// let venta = document.querySelector('#idVenta').value;
// let alquiler = document.querySelector('#idAlquiler').value;
let descripcion = document.querySelector('#idDescripcion').value;
let precio = document.querySelector('#idPrecio').value;
let puertas = document.querySelector('#idpuertas').value;
let kilometros = document.querySelector('#idKm').value;
let potencia = document.querySelector('#idPotencia').value;

console.log(transaccion);
let nuevoAnuncio = new Anuncio(null, titulo, transaccion, descripcion, precio, puertas,kilometros,potencia);


altaAnuncio(nuevoAnuncio);
// crearTabla(nuevoAnuncio);

traerAnuncio();
}

/*function traerPersonaFetch(){
    fetch('http://localhost:3000/traer').then(res => res.text()).then(data=>console.log(data));
}*/
function traerAnuncio()
{
    //a la antigua
    let xhr = new XMLHttpRequest();
    //img.setAtri
    xhr.onreadystatechange= () =>{
        if(xhr.readyState == 4){
            info.removeChild(img);
            if(xhr.status == 200){
     let nuevoAnuncio= JSON.parse(xhr.responseText);
    //  console.log(nuevoAnuncio.data);
     console.log(JSON.parse(xhr.responseText));
     crearTabla(nuevoAnuncio.data);

            }
            else{
                console.log(xhr.status + " "+ xhr.statusText);
            }
        }
        else{
           info.appendChild(img);
        }
    };
    xhr.open('GET','http://localhost:3000/traer');
    xhr.send();
}




function altaAnuncio(anuncio)
{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        if(xhr.readyState == 4){
        info.removeChild(img);

         if(xhr.status == 200){
      
     console.log(JSON.parse(xhr.responseText));
           
        }else{
          console.log(xhr.status + " " + xhr.statusText);
            }
        }
        else{
            info.appendChild(img);
         }
    };
    xhr.open('POST','http://localhost:3000/alta')
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(anuncio));
    }

function crearTabla(anuncio) {
    // console.log('crear tabla');
    // console.log('datos de anuncio: ' + anuncio)
    //Obtener la referencia del elemento body.
    let tCuerpo = document.getElementById("tCuerpo");
    tCuerpo.innerHTML = "";
    for (let index = 0; index < anuncio.length; index++) {
        tCuerpo.innerHTML = tCuerpo.innerHTML +
        "<tr>"+
           "<td>" + anuncio[index].id + "</td>" +
            "<td>" + anuncio[index].titulo + "</td>" +
            "<td>" + anuncio[index].transaccion + "</td>" +
            "<td>" + anuncio[index].descripcion + "</td>" +
            "<td>" + anuncio[index].precio + "</td>" +
            "<td>" + anuncio[index].puertas +  "</td>" +
            "<td>" + anuncio[index].kilometros + "</td>" +
            "<td>" + anuncio[index].potencia + "</td>" +
      
            "</tr>";
    }
}
function Eliminar()
{
    let id=  parseInt(document.querySelector('#').value);
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange=()=>{

    }
    xhr.open('POST','http://localhost:3000/baja')
    xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded')
    xhr.send(`id${id}`);

}

