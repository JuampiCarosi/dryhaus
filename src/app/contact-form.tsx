"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="grid grid-cols-2 rounded-2xl bg-[#58585A] p-10">
      <div className="flex flex-col space-y-5">
        <input
          type="text"
          placeholder="Nombre"
          className="rounded-md bg-[#8A8A8B]/90 px-3 py-2 text-white placeholder:font-light placeholder:text-white"
        />
        <input
          type="tel"
          placeholder="Teléfono (Codigo de area + 8 numeros)"
          className="rounded-md bg-[#8A8A8B]/90 px-3 py-2 text-white placeholder:font-light placeholder:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-md bg-[#8A8A8B]/90 px-3 py-2 text-white placeholder:font-light placeholder:text-white"
        />
        <textarea
          placeholder="Escribe tu consulta"
          className="h-40 rounded-md bg-[#8A8A8B]/90 px-3 py-2 text-white placeholder:font-light placeholder:text-white"
        />
        <div>
          <button className="rounded-md bg-[#8A8A8B]/90 px-3 py-2 font-light tracking-wide text-white">
            Enviar ahora
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
      </div>
    </div>
  );
}
