import { Features, Header, Heading, Paragraph } from "@/components";
import { ShortLink } from "./ShortLink";
import { ReactElement } from "react";
import { Code, Link, Megaphone, QrCode } from "lucide-react";
import React from "react";

export default function Home() {
  const features: Array<{
    description: string;
    icon: ReactElement;
    tag?: string;
  }> = [
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
        <section className="w-9/12 grid grid-cols-2 gap-2 min-h-[55svh]">
          <div className="space-y-1 py-32">
            <Heading>Muito mais que um Encurtador de Link</Heading>
            <Paragraph>
              Encurte links e imagens facilmente e tenha acesso a um
              monitoramento de outro nível!
            </Paragraph>
          </div>
        </section>
        <ShortLink />
        <section className="w-9/12 py-20 flex flex-col gap-8 items-center">
          <div className="space-y-2">
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
    </>
  );
}
