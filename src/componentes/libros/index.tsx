//-- import productImage from "../src/assets/imagenes/imagen_1.jpg"; //-- ESTA RUTA ACA NO FUNCIONA
//-- import productImage from "../../assets/imagenes/imagen_1.jpg";  //-- AQUI FUNCIONA
import { Link } from "react-router";

import { LibroProps } from "../../types/Libro";

  export default function Libro( { codigo, nombre, edicion, stock, rating, precio, imagen }: LibroProps) {
    return (
        <article className="h-[320px] w-[320px] rounded-2xl bg-white shadow-xl cursor-pointer hover:shadow-neutral-900 transition-all">
            
            <div className="text-center px-8 py-3" >
                <img src={imagen} className="mx-auto w-[180px] h-[180px] rounded-full object-cover" />
               
                <Link to={`/libro/${codigo}`}  className="mt-2 text-2xl font-bold" > 
                    {nombre} 
                </Link>
                
                <p className="mt-1 text-sm text-[gray] font-light" > {edicion} </p>
            </div>

            <div className="flex justify-center text-center items-center" >
                <div>
                    <h3 className="text-[20px] font-bold" > {stock} </h3>
                    <p className="text-xs font-light text-[gray]" > Stock </p>
                </div>

            
                    <hr className="mx-4 h-4 w-[1px] border-none bg-black/50" />
                
                    <div>
                        <h3 className="text-[20px] font-bold" > {rating} </h3>
                        <p className="text-xs font-light text-[gray]" > Rating </p>
                    </div>

                
                    <hr className="mx-4 h-4 w-[1px] border-none bg-black/50" />   

                    <div>
                        <h3 className="text-[20px] font-bold" > S/ {precio}</h3>
                        <p className="text-xs font-light text-[gray]" > Precio </p>
                    </div>
            </div>
            
        </article>
    );

}
