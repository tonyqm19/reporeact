import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
//import { ProductProps } from "../../types/Products";
import { Layout } from "../../Layout";
import { LibroProps } from "../../types/Libro";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function LibroDetallePage() {
  const { tipo, codigo } = useParams();
  //-- console.log( codigo + " - " + tipo );
  const context = useContext(ShoppingCartContext);

  const {
    data: libroData,
    loading,
    error
  } = useFetch<LibroProps>(`http://localhost:8080/Libro/buscarLibroPorId/${tipo}/${codigo}`);

  //-- = useFetch<ProductProps>(`https://fakestoreapi.com/products/${codigo}`);
  //-- = useFetch<LibroProps>(`https://bk.eagroup.eanet-latam.com/proyectoempresa/Libro/buscarLibroPorId/${tipo}/${codigo}`);
  //-- = useFetch<LibroProps>(`http://localhost:8080/Libro/buscarLibroPorId/${tipo}/${codigo}`);
  //-- = useFetch<LibroProps>(`http://localhost:8080/Libro/buscarLibroPorId/Catalogo/1`);

  //---------------------------------------
  //-- AGREGAR y ACTUALIZAR item al Carrito
  const addyUpdateItemtoCart = (libro: LibroProps) => {

    const itemFound = context.cartProducts.find((item) => item.codigo === libro.codigo);
    //-- 1.- Si el item existe, entonces se ACTUALIZARA
    if (itemFound) {
      //-- Actualizar el item
      updateToCart(libro);
    }else {
      //-- Agregar al Carrito 
      addToCart(libro);
    }

  };

  //------------------------
  //-- Agregar al Carrito
  const addToCart = (libro: LibroProps) => {
    libro.cantidad = libro.cantidad + 1; //-- 1 = 0 + 1  
    context.setCartProducts([...context.cartProducts, libro]);
  };

  //------------------------
  //-- Actualizar al Carrito 
  const updateToCart = (libro: LibroProps) => {

    context.setCartProducts(
      context.cartProducts.map((item) => {
        if (item.codigo === libro.codigo) {
          return { ...item, cantidad: item.cantidad + 1 };
        } else {
          return item
        }
      })
    )

  };


  /*
      //-- Agregar al Carrito
      const addToCart = (libro : LibroProps) => {
          
          const montoTotal = parseFloat(context.cartProducts.reduce((acc, item) => acc + item.precio, 0).toFixed(2));
          const nuevoItemPrecio = libro.precio;
          console.log("Carrito con monto del Item agregado: " + (montoTotal + nuevoItemPrecio));
          //logica de validacion
          if(context.cartProducts.length >= 6) {
             alert("Maximo se podra agregar 6 Comics al carrito");
          }else if( (montoTotal  + nuevoItemPrecio) > 500) {
            alert("Solo Maximo S/ 500 por compra  => Precio Total (" + montoTotal +") + Nuevo Item (" + nuevoItemPrecio +" ) = (" + (montoTotal  + nuevoItemPrecio) + ")");
          }else{
            
            console.log("=== Insertar al carrito ===");
            console.log(" libro.cantidad (antes): " + libro.cantidad);
            libro.cantidad = libro.cantidad + 1;
            console.log(" libro.cantidad (despues): " + libro.cantidad);
  
            //-- libro.cantidad = 0 + 1;
            context.setCartProducts([...context.cartProducts, libro]);
          }
  
      };
  
    */

  if (loading) {
    return <p>Cargando Comics...</p>;
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
              onClick={() => libroData && addyUpdateItemtoCart(libroData)}
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