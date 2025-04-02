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
      <div className="grid grid-cols-1 gap-4">
        {context.cartProducts.map((item) => (
          <div className="flex gap-4 items-center" key={item.codigo}>
            <div>
              <img
                src={item.imagen}
                alt={item.nombre}
                className="max-w-[100px]"
              />
            </div>
            <div className="flex  gap-2">
              <p>{item.nombre}</p>
              <p className="font-bold"> S/ {item.precio}</p>
              <button
                className="text-red-500 cursor-pointer"
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
          {context.cartProducts
            .reduce((acc, item) => acc + item.precio, 0)
            .toFixed(2)}
        </p>
        <div className="flex justify-end">
          <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
}