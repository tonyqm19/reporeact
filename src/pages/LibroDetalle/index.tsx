import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
//import { ProductProps } from "../../types/Products";
import { Layout } from "../../Layout";
import { LibroProps } from "../../types/Libro";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function LibroDetallePage(){
    const { codigo } = useParams();
    console.log(codigo);
    const context = useContext(ShoppingCartContext);

    const {
        data: libroData,
        loading,
        error,
      } = useFetch<LibroProps>(`http://localhost:8080/Libro/buscarLibroPorId/${codigo}`);

      const addToCart = (libro : LibroProps) => {
        //logica de validacion
        context.setCartProducts([...context.cartProducts, libro]);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="image">
              <img
                src={libroData?.imagen}
                alt={libroData?.nombre}
                className="max-w-[400px]"
              />
            </div>
            <div className="information">
              <h1 className="text-4xl font-bold mb-6">{libroData?.nombre}</h1>
              <p className="text-3xl font-bold mb-6">S/ {libroData?.precio}</p>
              <p className="text-gray-500">{libroData?.sinopsis}</p>
              <div className="my-6">
                <button
                  className="bg-black text-white px-4 py-2 rounded-full cursor-pointer"
                  onClick={() => libroData && addToCart(libroData)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          </Layout>
      );  

    //-- return <h1> Pagina Detalle del Libro</h1>
}