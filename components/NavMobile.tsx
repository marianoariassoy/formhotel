import { menu } from "@/lib/data";

interface Props {
  handleScroll: (id: string) => void;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
}

const Nav = ({ handleScroll, setMenuOpen, menuOpen }: Props) => {
  return (
    <>
      <div className="fixed top-9 right-4 z-50 lg:hidden">
        <button
          className={`hamburger transition-transform ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed left-0 top-0 w-screen h-screen lg:hidden z-30 backdrop-blur-md bg-primary/50 fade-in">
          <nav
            className={` absolute flex flex-col gap-y-8 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
          >
            <ul className="flex flex-col items-center gap-y-6 uppercase font-medium text-white">
              {menu.map((item) => (
                <li key={item.name}>
                  <button onClick={() => handleScroll(item.name.toLowerCase())}>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-primary p-3 text-sm font-medium uppercase hover:bg-black/80 transition-colors"
            >
              Reservas
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Nav;
