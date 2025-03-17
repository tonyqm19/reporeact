//-- import productImage from "../src/assets/imagenes/imagen_1.jpg"; //-- ESTA RUTA ACA NO FUNCIONA
//-- import productImage from "../../assets/imagenes/imagen_1.jpg";  //-- AQUI FUNCIONA

interface LibroProps {
    nombre: string;
    precio: number;
    imagen: string;
  }

export default function Libro( { nombre, precio, imagen }: LibroProps) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={imagen} alt="Imagen del Libro" width="154" height="252" />
            </div>
            <div className="product-information">
                <h3> {nombre} </h3>
                <p> S/ {precio} </p>
            </div>
        </div>
    );
}