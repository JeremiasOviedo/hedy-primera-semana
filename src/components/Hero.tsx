import {Link} from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:flex-1 items-center m-0 px-20">
      <div className="flex  m-0">
        <div className="flex flex-1 2xl:w-[720px] 2xl:h-[720px] sm:w-[500px] sm:h-[500px] w-[300px] justify-end mb-10 p-4">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1571193161738-deaba9b6cc26?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bookers"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 m-0 justify-self-center justify-center ">
        <span className="font-serif font-bold text-5xl text-gray-700 text-center m-1 ">
          <h1>Empieza tu viaje literario en</h1>
        </span>
        <span className="font-serif font-bold text-6xl text-center text-violet-500 mt-2">
          <h1>Bookers</h1>
        </span>

        <span className="font-serif font-light text-s  mt-20 text-gray-600 text-center">
          Únete a la comunidad de lectores más grande de Latinoamérica y
          descubre un mundo de posibilidades literarias. En Bookers, conectamos
          a apasionados de la lectura de toda la región, ofreciendo un espacio
          donde compartir, explorar y disfrutar de una amplia variedad de
          historias y conocimientos.
        </span>
        <span className="font-serif font-light text-s mb-14 text-gray-600 text-center">
          Desde clásicos de la literatura hasta las últimas tendencias, nuestra
          comunidad te invita a sumergirte en un viaje inigualable a través de
          las páginas de los libros. Únete hoy y forma parte de una comunidad
          vibrante y en constante crecimiento, donde el amor por la lectura nos
          une.
        </span>

        <p className = "self-center text-white bg-violet-500 w-48 font-bold py-2 px-4 rounded m-4 text-center hover:bg-transparent hover:text-violet-500 border-2 border-violet-500">
            <Link to="/events">Ver eventos</Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
