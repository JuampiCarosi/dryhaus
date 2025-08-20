"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

export default function ContactForm({
  sendToCliengo,
}: {
  sendToCliengo: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => Promise<{ success: boolean; message: string }>;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="grid grid-cols-1 rounded-2xl bg-[#58585A] p-5 sm:grid-cols-2 sm:p-10">
      <div className="flex flex-col space-y-5">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md bg-[#8A8A8B]/90 px-3 py-2 text-white placeholder:font-light placeholder:text-white"
        />
        <input
          type="tel"
          placeholder="Teléfono (Codigo de area + 8 numeros)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-md bg-[#8A8A8B]/90 px-3 py-2 text-white placeholder:font-light placeholder:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md bg-[#8A8A8B]/90 px-3 py-2 text-white placeholder:font-light placeholder:text-white"
        />
        <textarea
          placeholder="Escribe tu consulta"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-40 rounded-md bg-[#8A8A8B]/90 px-3 py-2 text-white placeholder:font-light placeholder:text-white"
        />
        <div>
          <button
            onClick={async () => {
              const response = await sendToCliengo({
                name,
                email,
                phone,
                message,
              });
              console.log(response);
              if (response.success) {
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                toast.success(response.message);
              } else {
                toast.error(response.message);
              }
            }}
            className="w-full rounded-md bg-[#8A8A8B]/90 px-3 py-2 font-light tracking-wide text-white hover:bg-[#8A8A8B] sm:w-fit"
          >
            Enviar ahora
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center pt-2 sm:pt-0">
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
      </div>
    </div>
  );
}
