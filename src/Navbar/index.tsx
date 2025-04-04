import { Link } from "react-router";
import CartItem from "../CartItem";
import { ShoppingCartContext } from "../context";
import { useContext } from "react";

export default function Navbar() {
  
  const context = useContext(ShoppingCartContext);
  
  return (
    <nav className="mt-3 mr-1 border-b border-gray-200">
      <ul className="flex gap-6 justify-center">
        
        <div className="text-[16px] font-bold" >
            <p> "EL RINCON DEL COMIC" </p>
        </div>

          <Link to="/">Home</Link>
          {/* <Link to="/products">Libros</Link> */}
          <Link to="/cart" className="relative">
            <CartItem />
            <span className="bg-red-400 text-white px-2 py-1 rounded-full text-[8px] absolute -top-3 -right-3">
              {context.cartProducts.length}
            </span>
          </Link>

      </ul>
    </nav>
  );
}