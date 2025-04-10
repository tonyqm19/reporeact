import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
//import { ProductProps } from "../../types/Products";
import { Layout } from "../../Layout";
import { LibroProps } from "../../types/Libro";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function LibroDetallePage(){
    const { tipo, codigo } = useParams();
    console.log( codigo + " - " + tipo );
    const context = useContext(ShoppingCartContext);

    const {
        data: libroData,
        loading,
        error
      } = useFetch<LibroProps>(`https://bk.eagroup.eanet-latam.com/proyectoempresa/Libro/buscarLibroPorId/${tipo}/${codigo}`);

      const addToCart = (libro : LibroProps) => {
        
        const montoTotal = parseFloat(context.cartProducts.reduce((acc, item) => acc + item.precio, 0).toFixed(2));
        const nuevoItemPrecio = libro.precio;
        console.log("Carrito con monto del Item agregado: " + (montoTotal + nuevoItemPrecio));
        //logica de validacion
        if(context.cartProducts.length >= 4) {
           alert("Maximo se podra agregar 4 Comics al carrito");
        }else if( (montoTotal  + nuevoItemPrecio) > 200) {
          alert("Solo Maximo S/ 200 por compra  => Precio Total (" + montoTotal +") + Nuevo Item (" + nuevoItemPrecio +" ) = (" + (montoTotal  + nuevoItemPrecio) + ")");
        }else{
          context.setCartProducts([...context.cartProducts, libro]);
        }

      };

      //-- useFetch<ProductProps>(`https://fakestoreapi.com/products/${codigo}`);
      //-- = useFetch<LibroProps>(`http://localhost:8080/Libro/buscarLibroPorId/{codigo}`);
    
      if (loading) {
        return <p>Cargando Comics...</p> ;
      }
    
      if (error) {
        return <p>Ocurrio un error</p>;
      }

      return (
        <Layout>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
            <div className="image">
              <img
                src={libroData?.imagen}
                alt={libroData?.nombre}
                className="max-w-[650px]"
              />
            </div>
            <div className="information">
              <h1 className="text-4xl font-bold underline mb-4">{libroData?.nombre}</h1>
              <p className="text-2xl font-bold mb-2"> Edicion : {libroData?.edicion}</p>
              <p className="text-2xl font-bold mb-2"> Precio : S/ {libroData?.precio}</p>
              <p className="text-2xl font-bold mb-2"> Rating : {libroData?.rating}</p>
              <p className="text-2xl font-bold mb-2"> Stock : {libroData?.stock}</p>
              <p className="text-gray-500">{libroData?.sinopsis}</p>
              <div className="my-6">
                <button
                  className="bg-black text-white px-4 py-2 rounded-full cursor-pointer"
                  onClick={() => libroData && addToCart(libroData)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
          </Layout>
      );  

    //-- return <h1> Pagina Detalle del Libro</h1>
}