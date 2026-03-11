import Hero from "@/components/Hero";
import Habitaciones from "@/components/Habitaciones";
import Reservas from "@/components/Reservas";
import Servicios from "@/components/Servicios";
// import Ubicacion from "@/components/Ubicacion";
import Contacto from "@/components/Contacto";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Hero />
      <Reservas />
      <Habitaciones />
      <Servicios />
      {/* <Ubicacion /> */}
      <Contacto />
      <Form />
    </>
  );
}
