"use client";
import { useInView } from "react-intersection-observer";

const Habitaciones = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section className="scroll-m-14" id="habitaciones" ref={ref}>
      <div
        className="w-screen aspect-square lg:h-screen bg-center bg-cover py-20 px-4 lg:px-20 relative"
        style={{
          backgroundImage: `url("/images/habitaciones-hero.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-transparent h-1/2"></div>
        <div
          className={`z-20 relative opacity-0 ${inView ? "animate-fade-right" : ""}`}
        >
          <h1 className="text-xl lg:text-3xl uppercase text-white border-l-2 border-r-2 px-12 border-white inline tracking-widest ">
            Habitaciones
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row" ref={ref2}>
        <div
          className={`lg:w-2/5 flex flex-col opacity-0 ${inView2 ? "animate-fade-right" : ""}`}
        >
          <img
            src="/images/habitaciones-1.jpg"
            alt="Habitación 1"
            className="w-full h-full object-cover aspect-[7/5]"
          />
          <img
            src="/images/habitaciones-2.jpg"
            alt="Habitación 2"
            className="w-full h-full object-cover aspect-[7/5]"
          />
        </div>
        <div
          className={`lg:w-3/5 opacity-0 flex flex-col gap-y-8 px-4 lg:px-20 py-8 lg:py-20 ${inView2 ? "animate-fade-left" : ""}`}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-18"
              viewBox="0 0 640 640"
            >
              <path d="M280 128C266.7 128 256 138.7 256 152C256 165.3 266.7 176 280 176L296 176L296 209.3C188.8 220.7 104.2 307.7 96.6 416L543.5 416C535.8 307.7 451.2 220.7 344 209.3L344 176L360 176C373.3 176 384 165.3 384 152C384 138.7 373.3 128 360 128L280 128zM88 464C74.7 464 64 474.7 64 488C64 501.3 74.7 512 88 512L552 512C565.3 512 576 501.3 576 488C576 474.7 565.3 464 552 464L88 464z" />
            </svg>
          </span>
          <h2 className="font-bold tracking-widest text-sm">
            NUESTRAS HABITACIONES, CON DISTINTAS CATEGORIAS, CUENTAS CON LOS
            SIGUIENTES SERVICIOS:
          </h2>
          <ul className="flex flex-col gap-y-2 ml-4 list-disc text-sm">
            <li>
              BAÑO PRIVADO COMPLETO, EQUIPADO CON BAÑERA Y SECADOR DE CABELLO
            </li>
            <li>COFRE DE SEGURIDAD ELECTRÓNICO INDIVIDUAL</li>
            <li>AIRE ACONDICIONADO FRÍO-CALOR</li>
            <li>TV LCD DE 32” SMART</li>

            <li>DESAYUNO BUFFET</li>
            <li>WI-FI EN TODO EL ESTABLECIMIENTO</li>
            <li>PERSONAL BILINGÜE</li>
            <li>SERVICIO DE RESTAURANTE, BAR Y CONFITERÍA</li>
            <li>
              SEGURIDAD MONITOREADA LAS 24 HORAS CON ALARMA Y CÁMARAS DE
              SEGURIDAD.
            </li>
            <li>SERVICIO DE EMERGENCIAS MÉDICAS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Habitaciones;
