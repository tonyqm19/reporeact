import { createContext, useState } from "react";
import { LibroProps } from "../types/Libro";
//import { ProductProps } from "../types/product";

interface ShoppingCartContextProps {
  cartProducts: LibroProps[];
  setCartProducts: React.Dispatch<React.SetStateAction<LibroProps[]>>;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<LibroProps[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};