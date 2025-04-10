//-- import productImage from "../src/assets/imagenes/imagen_1.jpg"; //-- ESTA RUTA ACA NO FUNCIONA
//-- import productImage from "../../assets/imagenes/imagen_1.jpg";  //-- AQUI FUNCIONA
import { Link } from "react-router";

import { LibroProps } from "../../types/Libro";

  export default function Libro( { codigo, nombre, tipo, edicion, stock, rating, precio, imagen, sinopsis }: LibroProps) {
    console.log(sinopsis);
    return (
        <Link to={`/libro/${tipo}/${codigo}`}  className="mx-auto" > 
            <article className="w-[330px] h-[480px] rounded-2xl bg-white shadow-xl cursor-pointer hover:shadow-neutral-950 transition-all">

                <div className="text-center px-8 py-3" >
                    <img src={imagen} className="mx-auto w-[280px] h-[280px] rounded-full object-cover" />

                    <p className="mt-2 text-4xl font-bold" > {nombre} </p>

                    <p className="mt-1 text-2xl text-[gray] font-light" > {edicion} </p>
                </div>

                <div className="flex justify-center text-center items-center" >
                    <div>
                        <h3 className="text-[28px] font-bold" > {stock} </h3>
                        <p className="text-[18px] font-light text-[gray]" > Stock </p>
                    </div>


                    <hr className="mx-4 h-4 w-[1px] border-none bg-black/50" />

                    <div>
                        <h3 className="text-[28px] font-bold" > {rating} </h3>
                        <p className="text-[18px] font-light text-[gray]" > Rating </p>
                    </div>


                    <hr className="mx-4 h-4 w-[1px] border-none bg-black/50" />

                    <div>
                        <h3 className="text-[28px] font-bold" > S/ {precio}</h3>
                        <p className="text-[18px] font-light text-[gray]" > Precio </p>
                    </div>
                </div>

            </article>
        </Link>
    );

}
