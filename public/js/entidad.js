export default class Anuncio
{
    id;
    titulo;
    transa;
    descripcion;
    precio;
    puertas;
    kilometros;
    potencia;

    constructor (id,titulo,transaccion ,descripcion,precio,puertas,kilometros,potencia)
    {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.puertas = puertas;
        this.kilometros = kilometros;
        this.potencia = potencia;

    }

  
}