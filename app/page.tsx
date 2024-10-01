import { Input } from "@/components";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center">
      <h3 className="font-semibold text-2xl">Encurte seus links facilmente</h3>
      <Input.Root name="my-link">
        <Input.Preffix icon={Link} />
        <Input.Text placeholder="Digite aqui o seu link" />
      </Input.Root>
    </main>
  );
}
