import Logo from "./Logo";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-4 justify-between bg-accent w-full text-slate-50 p-8">
      <Logo theme="dark" />
      <a
        href={`${process.env.API_HOST}/swagger`}
        className="font-medium hover:text-blue-100 hover:underline"
        target="_blank"
      >
        Documentação da API
      </a>
    </footer>
  );
}
export default Footer;
