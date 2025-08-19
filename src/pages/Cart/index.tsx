import { Layout } from "../../Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function Cart() {
  const context = useContext(ShoppingCartContext);

  if (context.cartProducts.length === 0) {
    return (
      <Layout>
        <p>No hay productos en el carrito</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-1.5 text-[22px]" >
        <p className="underline font-bold"> Condiciones Generales : </p>
        <p> <b>1.-</b> Solo <b> 4 </b> items permitidos en el carrito </p>
        <p> <b>2.-</b> Maximo <b> S/200 </b> por compra </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {context.cartProducts.map((item) => (
          <div className="flex gap-4 items-center" key={item.codigo}>
            <div>
              <img
                src={item.imagen}
                alt={item.nombre}
                className="max-w-[250px] max-h-[250px]"
              />
            </div>
            <div className="flex  gap-2">
              <p>{item.nombre}</p>
              <p className="font-bold"> S/ {item.precio}</p>
              <button
                className="text-red-500 cursor-pointer"
                //-- 1.- ELIMINAR de un arreglo con FILTER
                //-- filter: filtrara todos los items que sea diferente al codigo seleccionado (item.codigo).
                //--         Ya que quiero eliminar ese item (item.codigo), entonces no debe incluirlo en el nuevo arreglo.
                //--         Retorna el nuevo arreglo sin ese codigo seleccionado (item.codigo). 
                onClick={() =>
                  context.setCartProducts(
                    context.cartProducts.filter(
                      (libroItem) => libroItem.codigo !== item.codigo
                    )
                  )
                }
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        
        <p className="font-bold flex justify-end">
          Total: S/
          { 
          //-- 2.- SUMAR los valores de un arreglo con el metodo REDUCE
          //-- let arr_nuevo = arreglo.reduce( (sum, item) => sum + item, 0 )
          //--                          (acumulador, item) => sum + item , valor de inicializacion del "acumulador"(0) )
          context.cartProducts
            .reduce((acc, item) => acc + item.precio, 0)
            .toFixed(2)}
        </p>
        <div className="flex justify-end">
          <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer" >
            Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
}