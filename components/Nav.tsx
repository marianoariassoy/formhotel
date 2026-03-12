import { menu } from "@/lib/data";

interface Props {
  handleScroll: (id: string) => void;
}

const Nav = ({ handleScroll }: Props) => {
  return (
    <nav className="items-center gap-x-8 text-sm hidden lg:flex">
      <ul className="flex items-center gap-x-8 [&>li:last-child]:border-0 [&>li:last-child]:pr-0 font-medium">
        {menu.map((item) => (
          <li key={item.name} className="pr-4 border-r border-white">
            {item.name === "Ubicación" ? (
              <a
                href="https://maps.app.goo.gl/Z1R2GZamCczbqsyn8"
                target="_blank"
                rel="noreferrer"
                className="hover:underline underline-offset-4 decoration-2 cursor-pointer"
              >
                {item.name}
              </a>
            ) : (
              <button
                className="hover:underline underline-offset-4 decoration-2 cursor-pointer"
                onClick={() => handleScroll(item.name.toLowerCase())}
              >
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        className="text-white border border-white p-3 text-xs font-medium uppercase  transition-colors cursor-pointer hover:text-black/90 hover:border-black/90"
        onClick={() => handleScroll("form")}
      >
        Reservas
      </button>
    </nav>
  );
};

export default Nav;
