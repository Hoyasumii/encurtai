import { Button, Input, Link as LinkComponent, Table } from "@/components";
import { Link, WandSparkles } from "lucide-react";

export default function Home() {
  const data: Array<{ name: string; age: number }> = [
    {
      name: "Alan",
      age: 1,
    },
    {
      name: "Zé",
      age: 2,
    },
    {
      name: "Alberto",
      age: 3,
    },
  ];

  return (
    <main className="flex-1 w-7/12 flex flex-col justify-between *:border-b *:border-b-slate-300">
      <section className="pb-4 flex flex-col items-center">
        <h3 className="font-semibold text-2xl/10">
          Encurte seus links facilmente
        </h3>
        <LinkComponent className="w-10/12 group">
          <Input.Root
            name="my-link"
            className="flex-1 rounded-e-none border-e-0"
          >
            <Input.Preffix icon={Link} />
            <Input.Text
              placeholder="Digite aqui o seu link"
              autoComplete="off"
            />
          </Input.Root>
          <Button className="rounded-s-none flex items-center gap-2 border border-slate-300 bg-slate-50 group-focus-within:border-rose-500 group-focus-within:ring-2 group-focus-within:ring-rose-50">
            <WandSparkles size={18} className="text-rose-600 fill-orange-300" />
          </Button>
        </LinkComponent>
      </section>

      <Table.Root
        data={data}
        className="border-collapse table-auto border border-slate-300"
      >
        <Table.Cell className="border border-slate-300" />
        <Table.Header />
        <Table.Body />
      </Table.Root>
    </main>
  );
}
