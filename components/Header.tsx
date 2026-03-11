"use client";
import { useState, useEffect } from "react";
import Container from "./Container";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed transition-all top-0 w-full z-40 text-white animate-fade-down ${isScrolled ? "py-4  bg-linear-to-b from-primary to-transparent" : "py-8"}`}
      >
        <Container
          styles={`flex gap-x-4 items-center transition-all justify-between`}
        >
          <div className="pl-2 lg:pl-0">
            <button
              className="cursor-pointer"
              onClick={() => handleScroll("fh")}
            >
              <img
                src="/assets/logo.svg"
                alt="Logo FormHotel"
                className="h-16 -mb-1"
              />
            </button>
          </div>
          <div>
            <Nav handleScroll={handleScroll} />
          </div>
        </Container>
      </header>

      <NavMobile
        handleScroll={handleScroll}
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
    </>
  );
};

export default Header;
