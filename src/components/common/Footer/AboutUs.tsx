export default function AboutUs() {
  return (
    <div className="w-full min-w-[210px] max-w-[223px] text-center h-auto grid gird-cols-1 auto-rows-max justify-items-center gap-[10px]">
      <p className="w-full max-w-max h-auto font-orbitron font-bold text-paragraph">
        Sobre nosotros
      </p>
      <a
        href="mailto:aventuramansion@gmail.com"
        className="w-full max-w-max h-auto text-paragraphMobile cursor-pointer hover:underline"
      >
        Contáctanos
      </a>
      <a
        href="https://maps.app.goo.gl/YXkswfJyzJr52kzE9"
        target="_blank"
        className="w-full max-w-max h-auto text-paragraphMobile cursor-pointer hover:underline"
      >
        Ubicación
      </a>
      <a
        href="tel:+5492616955777"
        className="w-full max-w-max h-auto text-paragraphMobile cursor-pointer hover:underline"
      >
        Número de teléfono
      </a>
      <a
        href="/documents/Bases_y_condiciones.pdf"
        download="Mansion_Aventura_Bases_y_condiciones.pdf"
        target="_blank"
        className="w-full max-w-max h-auto text-paragraphMobile cursor-pointer hover:underline"
      >
        Bases y condiciones
      </a>
    </div>
  );
}
