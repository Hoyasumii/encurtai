import { Tag } from "@/components";
import { Hanken_Grotesk } from "next/font/google";
import { ShortLink } from "./ShortLink";

const HankenGroteskFF = Hanken_Grotesk({
  subsets: ["latin"],
});

export default function Home() {
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
      <section>
        <p>
          Encurte seus Links<Tag className="inline">novo</Tag>
        </p>
        <p>
          Crie QR Codes <Tag className="inline">demo 2</Tag>
        </p>
        <p>
          Crie e monitore suas Campanhas<Tag className="inline">demo 2</Tag>
        </p>
        <p>
          API inclusa<Tag className="inline">novo</Tag>
        </p>
      </section>
    </main>
  );
}
