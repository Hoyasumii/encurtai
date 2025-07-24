/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Button, Input } from "@/src/components";
import services from "@/src/services";
import { ArrowRight, Copy, Link } from "lucide-react";
import { Hanken_Grotesk } from "next/font/google";
import { type ChangeEvent, useState } from "react";
import { z } from "zod";

const HankenGroteskFF = Hanken_Grotesk({
  subsets: ["latin"],
});

export function ShortLink() {
  const [link, setLink] = useState<string>("");
  const [shortedLink, setShortedLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const sendToApi = async (target: string) => {
    setLoading(true);
    const request = await services.post("/link", {
      target,
    });
    setShortedLink(request.data);
    setLink("");
    setLoading(false);
  };

  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/\S*)?$/;

  return (
    <section className="bg-accent min-h-[30svh] w-full px-2 xl:px-44 text-slate-50 py-12 flex items-center flex-col gap-8">
      <h1
        className={`${HankenGroteskFF.className} flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent text-2xl font-bold uppercase`}
      >
        Encurte seus links
      </h1>
      <div className="w-full md:w-4/6 flex flex-col gap-2 flex-1 justify-center">
        <label htmlFor="my-link">Cole seu link aqui</label>
        <Input.Root name="my-link">
          <Input.Group className="rounded bg-blue-100 focus-within:ring-blue-800 w-full">
            <Input.Prefix icon={Link} className="text-slate-500" />
            <Input.Text
              className="text-xl text-slate-700"
              autoComplete="off"
              value={link as string}
              onChange={handleInput}
            />
          </Input.Group>
        </Input.Root>
        <div className="flex gap-4">
          <Button
            theme="default"
            className="flex items-center gap-2 w-fit mt-2 relative overflow-hidden text-orange-200 font-bold uppercase rounded"
            onClick={() => {
              sendToApi(link as string);
            }}
            disabled={
              loading || !z.string().regex(urlRegex).safeParse(link).success
            }
          >
            Encurte
            <ArrowRight />
          </Button>
          <div
            data-enabled={shortedLink.length > 0}
            className="opacity-0 data-[enabled=true]:opacity-100 data-[enabled=true]:animate-fade-in-scale w-full bg-blue-600/50 p-4 mt-2 rounded border border-blue-700 flex items-center justify-between flex-1"
          >
            <a
              href={`https://encurtai.com/${shortedLink}`}
              className="hover:underline text-orange-100"
            >
              https://encurtai.com/{shortedLink}
            </a>

            <Copy
              className="p-1 hover:bg-blue-600/30 active:bg-blue-600/15 transition-all duration-300 rounded text-slate-300 cursor-pointer"
              onClick={async () => {
                await navigator.clipboard.writeText(
                  `https://encurtai.com/${shortedLink}`
                );
                alert("O link foi salvo com sucesso!");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
