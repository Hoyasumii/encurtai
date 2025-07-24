import { LoaderCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center bg-slate-50 dark:bg-stone-900">
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
