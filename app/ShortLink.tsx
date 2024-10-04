/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Input, Switch } from "@/components";
import { Image, Link } from "lucide-react";
import { Hanken_Grotesk } from "next/font/google";
import { useState } from "react";

const HankenGroteskFF = Hanken_Grotesk({
  subsets: ["latin"],
});

export function ShortLink() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <section className="bg-accent min-h-[40svh] w-full px-2 xl:px-44 text-slate-50 py-12 flex items-center flex-col gap-4">
      <div className="flex justify-center w-full relative items-center">
        <h1
          className={`${HankenGroteskFF.className} text-yellow-600 text-2xl font-normal uppercase flex gap-1`}
        >
          {active ? "Encurte suas Imagens" : "Encurte seus Links"}
        </h1>
        <div className="flex gap-2 items-center absolute right-0">
          <Link
            data-active={!active}
            className="transition-all duration-300 text-yellow-600 opacity-0 data-[active=true]:opacity-100"
          />
          <Switch active={active} setActive={setActive} />
          <Image
            data-active={active}
            className="text-yellow-600 fill-yellow-50 opacity-0 data-[active=true]:opacity-100 transition-all duration-300"
          />
        </div>
      </div>
      <h3 className="text-blue-50 text-3xl xl:text-4xl font-bold">
        Não Precisa de Cadastro
      </h3>
      <Input.Root name="teste">
        <Input.Text />
      </Input.Root>
    </section>
  );
}
