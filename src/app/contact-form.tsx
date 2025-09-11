"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

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
          type="number"
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
      <div className="relative flex flex-col items-start justify-end gap-7 pt-2 sm:flex-row sm:items-center sm:pt-0">
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
        <div className="flex w-full items-center justify-between sm:w-auto sm:justify-end">
          <div className="flex flex-col gap-2 pt-3 text-white sm:max-w-[300px] sm:pt-0">
            <Link
              target="_blank"
              className="underline"
              href="https://maps.app.goo.gl/f61ncAKHrWq9t7jL7?g_st=aw"
            >
              Almafuerte 1480, Of. 5, <br /> Acassuso, Buenos Aires.
            </Link>
            <Link className="underline" href="tel:+5491130402600">
              <span className="font-medium">Teléfono:</span>11 3040 2600
            </Link>
          </div>
          <Link
            target="_blank"
            href="http://qr.afip.gob.ar/?qr=IqGnRnSYun3vu7NNWVhw5w,,"
            className="sm:absolute sm:right-0 sm:bottom-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg"
              alt="AFIP"
              className="h-16"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
