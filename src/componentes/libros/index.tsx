//-- import productImage from "../src/assets/imagenes/imagen_1.jpg"; //-- ESTA RUTA ACA NO FUNCIONA
//-- import productImage from "../../assets/imagenes/imagen_1.jpg";  //-- AQUI FUNCIONA

interface LibroProps {
    codigo : number;
    nombre: string;
    precio: number;
    imagen: string;
  }

export default function Libro( { codigo, nombre, precio, imagen }: LibroProps) {
    return (
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
            <div>
                <img src={imagen} className="size-48 shadow-xl rounded-md" />
            </div>
            <div className="flex items-center md:items-start">
                <span className="text-2xl font-stretch-50%"> {nombre}</span>
                <span className="font-medium text-sky-500">Hola</span>

                <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span>No. {codigo}</span>
                    <span>·</span>
                    <span>S/ {precio}</span>
                </span>

            </div>
        </div>
    );
}