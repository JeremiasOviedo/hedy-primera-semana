import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "nombre"),
  email: z.string().email().min(1, "email"),
  message: z.string().min(1, "mensaje"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const [alert, setAlert] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setAlert(
      "Muchas gracias " +
        data.name +
        ", el equipo de Bookers se estará contactando contigo."
    );

    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col lg:py-24 sm:py-4 py-2 items-center">
      <p className="font-serif font-bold text-5xl text-gray-700 text-center">
        Contacta con el equipo de
      </p>
      <span className="font-serif font-bold text-6xl text-violet-500 text-center mb-10">
        Bookers
      </span>

      {alert === "" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-6 ">
            <div className="col-span-1">
              <input
                type="text"
                id="nombre"
                placeholder="Nombre"
                {...register("name")}
                className="focus:outline-none border-b w-full pb-2 border-violet-400 placeholder-gray-500 rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
                className="focus:outline-none border-b w-full pb-2 border-violet-400 placeholder-gray-500 rounded-lg"
              />
            </div>
            <button
              className="col-span-1 bg-gradient-to-r from-violet-400  to-violet-500 text-white rounded-lg shadow-md"
              type="submit"
            >
              Enviar
            </button>
            <div className="col-span-3">
              <textarea
                id="mensaje"
                placeholder="Escribe tu mensaje"
                {...register("message")}
                className="focus:outline-none border-b w-full pb-2 border-violet-400 placeholder-gray-500 rounded-lg"
                rows="4"
              />
            </div>
          </div>
        </form>
      ) : (
        <div>
          {alert !== "" && <div className="text-violet-500 text-xl font-sans font-semibold bg-white p-6 round-lg shadow-md rounded-lg">{alert}</div>}
        </div>
      )}
      {(errors.name || errors.email || errors.message) && (
        <div className="text-red-500">Por favor completa todos los campos.</div>
      )}
    </div>
  );
};

export default ContactForm;
