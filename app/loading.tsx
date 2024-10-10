import { LoaderCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center bg-white backdrop-blur">
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
