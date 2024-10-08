import {
  Button,
  Dialog,
  Features,
  Footer,
  Header,
  Heading,
  Paragraph,
} from "@/components";
import { ShortLink } from "./ShortLink";
import { Code, Link, Megaphone, QrCode } from "lucide-react";
import React from "react";

export default function Home() {
  const features = [
    {
      description: "Encurte seus Links",
      icon: <Link className="text-white" size={30} />,
    },
    {
      description: "API do Desenvolvedor",
      icon: <Code className="text-white" size={30} />,
    },
    {
      description: "Crie e monitore suas Campanhas",
      icon: <Megaphone className="text-white" size={30} />,
      tag: "Breve",
    },
    {
      description: "Gerador de Código QR",
      icon: <QrCode className="text-white" size={30} />,
      tag: "Breve",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col gap-4 items-center">
        <section className="w-11/12 xl:w-2/4 py-32 flex flex-col items-center gap-2 min-h-[55svh]">
          <Heading className="text-center">
            Muito mais que um Encurtador de Link
          </Heading>
          <Paragraph className="text-center w-11/12 xl:w-4/5">
            Encurte links e imagens facilmente e tenha acesso a um monitoramento
            de outro nível!
          </Paragraph>
        </section>
        <ShortLink />
        <section className="w-9/12 py-20 flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <Heading>Use e Abuse!</Heading>
            <Paragraph>
              O Encurtaí é a ferramenta ideal para monitorar e dar identidade ao
              seu negócio
            </Paragraph>
          </div>
          <Features
            items={features}
            className="pt-4 grid grid-cols-2 gap-8 px-4 w-9/12"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
