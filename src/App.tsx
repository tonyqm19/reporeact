
import './App.css';
import Libro from './componentes/libros';
import itemLibro1 from "../src/assets/imagenes/imagen_6.jpg";
import itemLibro2 from "../src/assets/imagenes/imagen_7.jpg";
import itemLibro3 from "../src/assets/imagenes/imagen_9.jpg";

const arrayLibros = [
  {
    id: 1,
    name: "Spiderman",
    edition: "1era Edicion 2025",
    stock: 30,
    rating: "5/5",
    price: 90,
    image: itemLibro1
  },
  {
    id: 2,
    name: "X-Men",
    edition: "Edicion 90s",
    stock: 20,
    rating: "4/5",
    price: 70,
    image: itemLibro2
  },
  {
    id: 3,
    name: "Batman",
    edition: "Dark Night Especial",
    stock: 10,
    rating: "3/5",
    price: 60,
    image: itemLibro3
  }
];

function App() {

  return (

    <section className="bg-gray-100 p-5 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >

      {arrayLibros.map((itemLibro) => (

        <Libro key={itemLibro.id}
          codigo={itemLibro.id}
          nombre={itemLibro.name}
          edicion={itemLibro.edition}
          stock={itemLibro.stock}
          rating={itemLibro.rating}
          precio={itemLibro.price}
          imagen={itemLibro.image}
        />

      ))}

    </section>

  );
}

export default App
