import { Link } from "react-router";
import CartItem from "../CartItem";
import { ShoppingCartContext } from "../context";
import { useContext } from "react";

export default function Navbar() {
  
  const context = useContext(ShoppingCartContext);
  
  return (
    <nav className="mt-3 mr-1 border-b border-gray-200">
      <ul className="flex gap-6 justify-center">
        
        <div className="text-[24px] font-bold" >
            <p> "EL RINCON DEL COMIC" </p>
        </div>

          <Link to="/">  <span className="text-[24px]" > Home</span> </Link>
          {/* <Link to="/products">Libros</Link> */}
          <Link to="/cart" className="relative">
            <CartItem />
            <span className="bg-red-400 text-white px-2 py-1 rounded-full text-[11px] absolute -top-3 -right-3">
              {
                //-- Longitud del carrito 
                //-- context.cartProducts.length
                
                //-- La cantidad Total
                context.cartProducts.reduce((acc, item) => acc + item.cantidad , 0)
              }
            </span>
          </Link>

      </ul>
    </nav>
  );
}