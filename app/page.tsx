import { Tag } from "@/components";
import { Hanken_Grotesk } from "next/font/google";
import { ShortLink } from "./ShortLink";
import { ReactElement } from "react";
import { Code, Link, Megaphone, QrCode } from "lucide-react";

const HankenGroteskFF = Hanken_Grotesk({
  subsets: ["latin"],
});

export default function Home() {
  const features: Array<{
    description: string;
    icon: ReactElement;
    tag?: string;
  }> = [
    {
      description: "Encurte seus Links",
      icon: <Link className="text-white" size={30} />,
      tag: "Novo",
    },
    {
      description: "API do Desenvolvedor",
      icon: <Code className="text-white" size={30} />,
      tag: "Novo",
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
    <main className="flex-1 w-full flex flex-col gap-4 items-center">
      <section className="w-9/12 grid grid-cols-2 gap-2 min-h-[55svh]">
        <div className="space-y-1 py-32">
          <h1 className="text-5xl tracking-wider font-bold text-blue-950">
            Monitore suas campanhas
          </h1>
          <p
            className={`${HankenGroteskFF.className} text-xl font-medium text-slate-600`}
          >
            Encurte links e imagens facilmente e tenha acesso a um monitoramento
            de outro nível!
          </p>
        </div>
      </section>
      <ShortLink />
      <section className="w-9/12 py-20 flex flex-col gap-8 items-center">
        <div className="space-y-2">
          <h1 className="text-5xl tracking-wider font-bold text-blue-950 text-center">
            Use e Abuse!
          </h1>
          <p
            className={`${HankenGroteskFF.className} text-xl font-medium text-slate-600`}
          >
            O Encurtaí é a ferramenta ideal para monitorar e dar identidade ao
            seu negócio
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-8 px-4 w-9/12">
          {features.map((feature, index) => (
            <li
              className="list-none flex gap-2 items-center"
              key={`list-${feature.description}-${index}`}
            >
              <div className="bg-blue-600 p-1 rounded-xl h-12 aspect-square flex items-center justify-center">
                {feature.icon}
              </div>
              {feature.description}
              {feature.tag && <Tag className="h-fit -mt-3">{feature.tag}</Tag>}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
