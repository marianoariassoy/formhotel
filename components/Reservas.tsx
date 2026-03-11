"use client";
import Container from "./Container";
import { useInView } from "react-intersection-observer";

const Reservas = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="bg-primary text-white" id="reservas" ref={ref}>
      <Container styles="py-20 flex flex-col items-start lg:flex-row gap-x-20 gap-y-8">
        <div className={`opacity-0 ${inView ? "animate-fade-right" : ""}`}>
          <h1 className="px-8 py-6 border border-white text-semibold text-xl lg:text-2xl tracking-widest uppercase">
            Reservas
          </h1>
        </div>
        <div
          className={`opacity-0 text-sm flex flex-col gap-y-2 ${inView ? "animate-fade-left" : ""}`}
        >
          <p>28 habitaciones prolijamente decoradas.</p>
          <p>
            Flexibles y adaptables para transformarlas en habitaciones single,
            dobles o triples.
          </p>
          <p>60 plazas disponibles aproximadamente.</p>
          <p>
            Categoria 3 estrellas asignada por el Ministerio de Turismo de la
            Provincia de Buenos Aires.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Reservas;
