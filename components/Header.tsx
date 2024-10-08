import Button from "./Button";
import Logo from "./Logo";

export function Header() {
  return (
    <header className="w-full py-6 px-2 xl:px-44 flex items-center justify-between bg-transparent">
      <Logo />

      <Button theme="outline" disabled>
        Dashboard
      </Button>
    </header>
  );
}
