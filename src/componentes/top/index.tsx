import { Link } from "react-router";
import { TopProps } from "../../types/Top";

export default function Top( { codigo, tipo, numero, imagen }: TopProps) {
    
    return (
      <Link to={`/libro/${tipo}/${codigo}`}  className="" > 
        <div style={{ "--bg-image": `url(${imagen})` } as React.CSSProperties}
          className="bg-[url:var(--bg-image)] relative h-[125px] w-[125px] bg-center bg-cover rounded-full cursor-pointer shadow-xl hover:shadow-neutral-50 transition-all" >
          <div>
            <span className="absolute bg-[green] h-8 w-8 rounded-full text-white text-2xl flex justify-center items-center bottom-0 right-0 border-[2px] border-white" >
              {numero}
            </span>
          </div>
        </div>
      </Link>
    );

}