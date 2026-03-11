const Hero = () => {
  return (
    <section className="w-screen h-screen relative" id="fh">
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 flex flex-col items-center justify-center gap-y-8 text-white z-20 opacity-0 animate-scale-in delay-300 ">
        <span>
          <img src="/assets/logo.svg" alt="Logo FormHotel" className="h-60 " />
        </span>
        <h2 className="font-medium text-xl uppercase tracking-widest text-center">
          Ciudad de Zarate
        </h2>
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover fade-in"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
