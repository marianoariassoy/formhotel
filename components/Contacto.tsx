"use client";
import { useInView } from "react-intersection-observer";

const Contacto = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      className="bg-primary text-white grid grid-cols-1 lg:grid-cols-2 scroll-m-14"
      id="contacto"
      ref={ref}
    >
      <div className="flex justify-end">
        <div
          className={`px-4 opacity-0 lg:px-0 py-20 w-full max-w-124 flex flex-col items-start gap-y-8 lg:pr-12 ${inView ? "animate-fade-right" : ""}`}
        >
          <h1 className="text-xl lg:text-4xl uppercase font-semibold border-l-2 border-r-2 px-12 border-white tracking-widest inline mb-8">
            Contacto
          </h1>
          <h2 className="font-bold tracking-widest text-sm lg:text-base">
            INFORMAMOS ADEMÁS QUE ANTE NECESIDADES ESPECIALES O CUALQUIER
            SOLICITUD ADICIONAL QUE REQUIERAN, PUEDEN COMUNICARSE DIRECTAMENTE
            CON:
          </h2>
          <div className="flex flex-col gap-y-4 text-sm">
            <div>
              <h3 className="font-bold">MARCELO EL SHAMI</h3>
              Gerente - Contador
            </div>
            <p>
              <a
                href="mailto:GERENCIA@FORMHOTEL.COM.AR"
                className="font-bold block hover:underline"
              >
                GERENCIA@FORMHOTEL.COM.AR
              </a>
              011-21698209.-
            </p>
          </div>
          <div>
            <h3 className="mb-4">Para más información</h3>
            <ul className="space-y-2 max-w-xl">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 text-sm lg:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                    height="1.8em"
                  >
                    <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
                  </svg>
                </div>
                <div className="leading-relaxed">
                  <p>
                    <a
                      href="mailto:reservas@formhotel.com.ar"
                      className="hover:underline"
                    >
                      reservas@formhotel.com.ar
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@formhotel.com.ar"
                      className="hover:underline"
                    >
                      info@formhotel.com.ar
                    </a>
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-8 h-8 shrink-0 text-sm lg:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 640 640"
                    height="1.8em"
                  >
                    <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                  </svg>
                </div>

                <p>11-5422-8465 / 11-5422-8335</p>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-8 h-8 shrink-0 text-sm lg:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 640 640"
                    height="1.8em"
                  >
                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                  </svg>
                </div>

                <p className="uppercase tracking-wider">Zarate</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`opacity-0 ${inView ? "animate-fade-left" : ""}`}>
        <img
          src="/images/image8.jpg"
          alt="Habitación 1"
          className="w-full h-full object-cover aspect-square lg:aspect-auto"
        />
      </div>
    </section>
  );
};

export default Contacto;
