import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <Container styles="py-20 flex flex-col gap-y-8">
        <div className="flex justify-center border-b border-white pb-20">
          <img src="/assets/logo.svg" alt="Logo FormHotel" className="h-40 " />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between text-sm">
          <div className="flex flex-col">
            <a
              href="mailto:reservas@formhotel.com.ar"
              className="hover:underline"
            >
              reservas@formhotel.com.ar
            </a>
            <a href="mailto:info@formhotel.com.ar" className="hover:underline">
              info@formhotel.com.ar
            </a>
            <span>11-5422-8465 / 11-5422-8335</span>
          </div>
          <div className="flex flex-col lg:items-end gap-y-4 lg:text-right">
            <div className="flex flex-col">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Privaty Politics
              </a>
            </div>
            <hr className="w-40 border-white" />
            <span>2026 FORM HOTEL ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
