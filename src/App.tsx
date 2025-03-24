
import './App.css';
import Top from './componentes/top';
import Libro from './componentes/libros';

import itemLibro1 from "../src/assets/imagenes/imagen_6.jpg";
import itemLibro2 from "../src/assets/imagenes/imagen_7.jpg";
import itemLibro3 from "../src/assets/imagenes/imagen_9.jpg";

import itemTop1 from "../src/assets/imagenes/imagen_1.jpg";
import itemTop2 from "../src/assets/imagenes/imagen_2.jpg";
import itemTop3 from "../src/assets/imagenes/imagen_3.jpg";
import itemTop4 from "../src/assets/imagenes/imagen_4.jpg";
import itemTop5 from "../src/assets/imagenes/imagen_5.jpg";
import itemTop6 from "../src/assets/imagenes/imagen_6.jpg";
import itemTop7 from "../src/assets/imagenes/imagen_7.jpg";
import itemTop8 from "../src/assets/imagenes/imagen_8.jpg";

const arrayTop = [
  {
    id: 1,
    numero: 1,
    image: itemTop1
  },
  {
    id: 2,
    numero: 2,
    image: itemTop2
  },
  {
    id: 3,
    numero: 3,
    image: itemTop3
  },
  {
    id: 4,
    numero: 4,
    image: itemTop4
  },
  {
    id: 5,
    numero: 5,
    image: itemTop5
  },
  {
    id: 6,
    numero: 6,
    image: itemTop6
  },
  {
    id: 7,
    numero: 7,
    image: itemTop7
  },
  {
    id: 8,
    numero: 8,
    image: itemTop8
  }
]


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
    <div className="max-w-[1110px]" >

      <section className="p-4">
        <article className="rounded-2xl bg-gray-900 p-8 shadow-sm">

          <div className="flex items-center justify-between">
            <h3 className="text-[20px] font-bold text-[white]" > Top de los mas Vendidos </h3>
            <a className="font-medium text-[white]" href="javascript:alert('En construccion')"> Ver mas </a>
          </div>

          <div className="mt-6 gap-8 w-[full] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">

            {arrayTop.map((itemTop) => (

              <Top key={itemTop.id}
                   codigo={itemTop.id}
                   numero={itemTop.numero}
                   imagen={itemTop.image}
              />

            ))}

          </div>

        </article>
      </section>

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

    </div>

  );


}

export default App
