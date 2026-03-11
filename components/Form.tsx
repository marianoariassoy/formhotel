"use client";
import { useState } from "react";
import Container from "./Container";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Input from "./input";
import Loader from "./loader";
import { FieldError } from "react-hook-form";
import { useInView } from "react-intersection-observer";

interface Form {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <div className="mt-2 text-red-500 text-sm">{error.message}</div>;
};

const Form = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    setSending(true);
    const sender = {
      to: "info@alfajoresguaymallen.com.ar",
      from: "no-reply@alfajoresguaymallen.com.ar",
      from_name: "Alfajores Guaymallen",
      subject: "Contacto",
    };

    try {
      const response = await axios.post("", { ...data, ...sender });
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const errorMessage = "Completa este dato por favor.";

  return (
    <section id="form" ref={ref}>
      <Container styles="py-20 flex flex-col lg:items-center gap-y-20">
        <div className={`opacity-0 ${inView ? "animate-fade-right" : ""}`}>
          <h1 className="px-8 py-6 border border-primary text-semibold text-xl lg:text-3xl tracking-widest uppercase inline">
            Reservas / Consultas
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`flex flex-col gap-y-4 w-full max-w-3xl mx-auto ${inView ? "animate-fade-right" : ""}`}
        >
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="uppercase font-bold text-sm lg:text-base tracking-widest w-1/3">
              Nombre
            </div>
            <div className="lg:w-2/3">
              <Input
                type="text"
                placeholder=""
                register={register("name", { required: errorMessage })}
              />
              <Error error={errors.name} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="uppercase font-bold text-sm lg:text-base tracking-widest w-1/3">
              Mail
            </div>
            <div className="lg:w-2/3">
              <Input
                type="email"
                placeholder=""
                register={register("email", {
                  required: errorMessage,
                  maxLength: 50,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Dirección de correo electrónico inválida",
                  },
                })}
              />
              <Error error={errors.email} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="uppercase font-bold text-sm lg:text-base tracking-widest w-1/3">
              Teléfono
            </div>
            <div className="lg:w-2/3">
              <Input
                type="text"
                placeholder=""
                register={register("phone", {
                  required: errorMessage,
                  maxLength: 20,
                })}
              />
              <Error error={errors.phone} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="uppercase font-bold text-sm lg:text-base tracking-widest w-1/3">
              Mensaje
            </div>
            <div className="lg:w-2/3">
              <textarea
                className="h-30 border border-primary px-6 py-4 focus:outline-none focus:ring-0 w-full"
                placeholder=""
                id="message"
                {...register("message", { required: errorMessage })}
              ></textarea>
              <Error error={errors.message} />
            </div>
          </div>
          <div className="flex items-center justify-end">
            {sending ? (
              <Loader />
            ) : (
              <button className="uppercase font-medium tracking-widest text-sm lg:text-base bg-primary text-white px-6 py-4 hover:bg-black/80 transition-colors cursor-pointer">
                Enviar
              </button>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Form;
