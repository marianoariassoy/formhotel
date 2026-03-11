"use client";
import { useInView } from "react-intersection-observer";

const Servicios = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="scroll-m-14" id="servicios" ref={ref}>
      <div className="bg-primary w-full">
        <img
          src="/assets/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover min-h-20"
        />
      </div>
      <div
        className="w-screen relative aspect-square lg:h-screen bg-center bg-cover py-20 px-4 lg:px-20"
        style={{
          backgroundImage: `url("/images/image5.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-transparent h-1/2"></div>
        <div
          className={`z-10 relative opacity-0 ${inView ? "animate-fade-right" : ""}`}
        >
          <h1 className="text-xl lg:text-4xl uppercase font-semibold border-l-2 border-r-2 px-12 border-white inline tracking-widest text-white">
            Servicios
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row" ref={ref2}>
        <div
          className={`lg:w-2/5 flex flex-col opacity-0 ${inView2 ? "animate-fade-right" : ""}`}
        >
          <img
            src="/images/image6.jpg"
            alt="Habitación 1"
            className="w-full h-full object-cover aspect-square lg:aspect-[5/7]"
          />
        </div>
        <div
          className={`lg:w-3/5 flex flex-col opacity-0 ${inView2 ? "animate-fade-left" : ""}`}
        >
          <div className="flex flex-col gap-y-8 px-4 lg:px-20 py-8 lg:py-20">
            <h2 className="font-bold tracking-widest">
              OFRECEMOS SERVICIO DE ALMUERZO O CENA CON MENÚ DE 3 PASOS BEBIDA
              SIN ALCOHOL . INCLUYE ENTRADA, PLATO PRINCIPAL, POSTRE.
            </h2>
            <p className="font-semibold">
              Contamos con personal altamente calificado, que recibirá a
              vuestros pasajeros con una atención sumamente personalizada.
            </p>
          </div>
          <img
            src="/images/image7.jpg"
            alt="Habitación 1"
            className="w-full h-full object-cover aspect-square lg:aspect-[7/5]"
          />
        </div>
      </div>
    </section>
  );
};

export default Servicios;
