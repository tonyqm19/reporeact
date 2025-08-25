
import './App.css';
import Top from './componentes/top';
import Libro from './componentes/libros';

import itemTop1 from "../src/assets/imagenes/imagen_1.jpg";
import itemTop2 from "../src/assets/imagenes/imagen_2.jpg";
import itemTop3 from "../src/assets/imagenes/imagen_3.jpg";
import itemTop4 from "../src/assets/imagenes/imagen_4.jpg";
import itemTop5 from "../src/assets/imagenes/imagen_5.jpg";
import itemTop6 from "../src/assets/imagenes/imagen_6.jpg";
import itemTop7 from "../src/assets/imagenes/imagen_7.jpg";
import itemTop8 from "../src/assets/imagenes/imagen_8.jpg";

import itemLibro1 from "../src/assets/imagenes/imagen_6.jpg";
import itemLibro2 from "../src/assets/imagenes/imagen_7.jpg";
import itemLibro3 from "../src/assets/imagenes/imagen_9.jpg";
import itemLibro4 from "../src/assets/imagenes/imagen_10.jpg";
import itemLibro5 from "../src/assets/imagenes/imagen_11.jpg";
import itemLibro6 from "../src/assets/imagenes/imagen_12.jpg";
import { Layout } from './Layout';

const arrayTop = [
  {
    id: 1,
    numero: 1,
    tipo: "Top",
    image: itemTop1,
    cantidad : 0
  },
  {
    id: 2,
    numero: 2,
    tipo: "Top",
    image: itemTop2,
    cantidad : 0
  },
  {
    id: 3,
    numero: 3,
    tipo: "Top",
    image: itemTop3,
    cantidad : 0
  },
  {
    id: 4,
    numero: 4,
    tipo: "Top",
    image: itemTop4,
    cantidad : 0
  },
  {
    id: 5,
    numero: 5,
    tipo: "Top",
    image: itemTop5,
    cantidad : 0
  },
  {
    id: 6,
    numero: 6,
    tipo: "Top",
    image: itemTop6,
    cantidad : 0
  },
  {
    id: 7,
    numero: 7,
    tipo: "Top",
    image: itemTop7,
    cantidad : 0
  },
  {
    id: 8,
    numero: 8,
    tipo: "Top",
    image: itemTop8,
    cantidad : 0
  }
]


const arrayLibros = [
  {
    id: 1,
    name: "Spiderman",
    tipo: "Catalogo",
    edition: "Peter y Miles",
    sinopsis : "",
    stock: 30,
    rating: "5/5",
    price: 90,
    image: itemLibro1,
    cantidad : 0
  },
  {
    id: 2,
    name: "X-Men",
    tipo: "Catalogo",
    edition: "Edicion 90s",
    sinopsis : "",
    stock: 20,
    rating: "5/5",
    price: 70,
    image: itemLibro2,
    cantidad : 0
  },
  {
    id: 3,
    name: "Batman",
    tipo: "Catalogo",
    edition: "Dark Night Especial",
    sinopsis : "",
    stock: 10,
    rating: "4/5",
    price: 60,
    image: itemLibro3,
    cantidad : 0
  },
  {
    id: 4,
    name: "C.Marvel",
    tipo: "Catalogo",
    edition: "La Heriona mas Poderosa",
    sinopsis : "",
    stock: 15,
    rating: "3/5",
    price: 55,
    image: itemLibro4,
    cantidad : 0
  },
  {
    id: 5,
    name: "Thanos",
    tipo: "Catalogo",
    edition: "El Guantalete del Infinito",
    sinopsis : "",
    stock: 18,
    rating: "3/5",
    price: 65,
    image: itemLibro5,
    cantidad : 0
  },
  {
    id: 6,
    name: "M.Maravilla",
    tipo: "Catalogo",
    edition: "El Comienzo de una Era",
    sinopsis : "",
    stock: 22,
    rating: "2/5",
    price: 45,
    image: itemLibro6,
    cantidad : 0
  }
];


function App() {

  return (
    <Layout>
    <div className="" >

      <section className="p-3">
        <article className="rounded-2xl bg-gray-900 p-5 shadow-sm">

          <div className="flex items-center justify-between">
            <h3 className="text-[28px] font-bold text-[white]" > Top de los mas Vendidos </h3>
            <a className="font-medium text-[24px] text-[white]" href="javascript:alert('En construccion')"> Ver mas </a>
          </div>

          <div className="mt-6 gap-8 w-[full] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">

            {arrayTop.map((itemTop) => (

              <Top key={itemTop.id}
                   codigo={itemTop.id}
                   tipo={itemTop.tipo}
                   numero={itemTop.numero}
                   imagen={itemTop.image}
                   cantidad={itemTop.cantidad}
              />

            ))}

          </div>

        </article>
      </section>

      <section className="bg-gray-100 p-3 gap-13 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >

        {arrayLibros.map((itemLibro) => (

          <Libro key={itemLibro.id}
            codigo={itemLibro.id}
            nombre={itemLibro.name}
            tipo={itemLibro.tipo}
            edicion={itemLibro.edition}
            stock={itemLibro.stock}
            rating={itemLibro.rating}
            precio={itemLibro.price}
            imagen={itemLibro.image}
            sinopsis={itemLibro.sinopsis}
            cantidad={itemLibro.cantidad}
          />

        ))}

      </section>

    </div>
    </Layout>

  );


}

export default App
