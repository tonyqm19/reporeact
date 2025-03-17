
import './App.css';
import Libro from './componentes/libros';
import itemLibro1 from "../src/assets/imagenes/imagen_1.jpg";
import itemLibro2 from "../src/assets/imagenes/imagen_2.jpg";
import itemLibro3 from "../src/assets/imagenes/imagen_3.jpg";

const arrayLibros = [
  {
    id: 0,
    name: "Libro 01",
    price: 60,
    image : itemLibro1
  },
  {
    id: 1,
    name: "Libro 02",
    price: 20,
    image : itemLibro2
  },
  {
    id: 2,
    name: "Libro 03",
    price: 140,
    image : itemLibro3
  }
];

function App() {

  return (
    <main>
      <section className="new-arrivals" >
        <h2> Comics </h2>
        <div className="list">

        {arrayLibros.map((itemLibro) => (

          <Libro key={itemLibro.id}
                 nombre={itemLibro.name}
                 precio={itemLibro.price} 
                 imagen={itemLibro.image}
                 />

        ))}         

        </div>
      </section>
    </main>
  );
}

export default App
