import "./style.css";

import React from "react";
import imgSlider01 from "../../assets/img/slider/slide1.jpg";
// import { Counter } from "./Counter.js";

export default function Page() {
  return (
    <main className="w-full h-full">
      <section className="relative w-full h-full">
        <div
          className="slider-bg flex place-items-center justify-center h-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${imgSlider01})` }}
        >
          <div className="flex flex-col w-[70%] place-items-center  text-center justify-center z-[2]">
            <h2 className="text-5xl leading-tight  text-own-white mb-5 text-title font-bold md:text-[53px]  md:mb-4 2xl:text-[56px] 2xl:mb-9">
              Protegemos lo que más valoras
            </h2>
            <p className="text-lg mb-[30px] text-own-white text-body font-medium w-[90%]  xl:text-[22px]">
              Somos un equipo de expertos en seguros comprometidos con tu bienestar. <br />
              Brindamos asesoría integral y te acompañamos en cada paso del proceso.
            </p>
            <div className="flex flex-col lg:flex-row">
              <a className="" href="/">
                Conoce más
              </a>
              <a
                className=""
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/+573142924296?text=Quiero%20saber%20sobre%20Protegemos%20lo%20que%20más%20valoras"
              >
                Contáctanos ahora
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </main>
  );
}
