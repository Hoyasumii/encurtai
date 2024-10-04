import { Loader } from "lucide-react";

export default function Page() {
  return (
    <div className="absolute top-0 w-svw h-svh flex justify-center items-center bg-white backdrop-blur">
      <Loader className="animate-spin" />
    </div>
  );
}
