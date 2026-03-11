import { menu } from "@/lib/data";

interface Props {
  handleScroll: (id: string) => void;
}

const Nav = ({ handleScroll }: Props) => {
  return (
    <nav className="items-center gap-x-8 text-sm hidden lg:flex">
      <ul className="flex items-center gap-x-8 uppercase [&>li:last-child]:border-0 [&>li:last-child]:pr-0 font-medium">
        {menu.map((item) => (
          <li key={item.name} className="pr-4 border-r border-white">
            <button
              className="hover:underline underline-offset-4 decoration-2 cursor-pointer"
              onClick={() => handleScroll(item.name.toLowerCase())}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-primary p-3 text-sm font-medium uppercase hover:bg-black/80 transition-colors"
      >
        Reservas
      </a>
    </nav>
  );
};

export default Nav;
