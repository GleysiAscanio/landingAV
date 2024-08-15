import "./style.css";

import "./tailwind.css";
import React, { useEffect, useState } from "react";
import logoUrl from "../assets/avanti-white.png";
import fondoShape from "../assets/slider-shape-1.png";
import { Link } from "../components/Link.js";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full m-auto">
      <Header></Header>
      <Content>{children}</Content>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" className="w-full  min-h-screen">
      {/* <div id="page-content" className="p-5 pb-12 "> */}
      {children}
      {/* </div> */}
    </div>
  );
}

function Logo() {
  return (
    <a href="/" className="self-center pb-3">
      <img
        src={logoUrl}
        height={64}
        width={64}
        alt="desktop-logo-avanti"
        className="w-full min-[900px]:max-w-[167px] lg:max-w-[204px] xl:max-w-[247px]  max-w-[255px] "
      />
    </a>
  );
}

interface SideBarProps {
  isMenuVisible: boolean | null;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const SideBar: React.FC<SideBarProps> = ({ isMenuVisible, setIsMenuVisible }) => {
  const [isMiniMenuOneVisible, setIsMiniMenuOneVisible] = useState<boolean>(false);
  const [isMiniMenuTwoVisible, setIsMiniMenuTwoVisible] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        id="sidebar"
        className={`justify-end right-0 absolute z-50 ${isMenuVisible === null && "hidden"} ${isMenuVisible ? "sidebar-principal-opened visible" : "sidebar-principal-closed"}`}
      >
        <div
          className="w-[330px] h-[100vh] flex flex-col gap-16 top-0 px-[30px] py-10 self-end bg-own-black bg-center bg-no-repeat bg-cover md:w-[400px]"
          style={{ backgroundImage: `url(${fondoShape})` }}
        >
          <div className="grid grid-cols-[70%_30%] place-items-center">
            <Logo />
            <div className="w-full flex justify-end">
              <button
                onClick={() => {
                  setIsMenuVisible(false);
                }}
                className="w-7 h-7 text-2xl text-white font-light opacity-20 flex self-end justify-end"
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10">
            {/* MENU */}
            <nav id="hidden-menu text-body">
              <ul className="flex flex-col w-full font-bold text-own-white text-sm   md:text-base ">
                <li className="w-full ">
                  <div className="py-[10px]">
                    <Link href="/" type={""}>
                      INICIO
                    </Link>
                  </div>
                </li>
                <li className="w-full border-t border-solid border-[#ffffff1a]">
                  <div className="relative flex flex-row justify-between py-[10px] place-items-center">
                    <Link href="/" type={""}>
                      NOSOTROS
                    </Link>
                    <button
                      onClick={() => setIsMiniMenuOneVisible(!isMiniMenuOneVisible)}
                      className="w-5 h-5 text-white font-light flex self-end justify-end place-items-center"
                    >
                      {!isMiniMenuOneVisible ? (
                        <i className="fa-solid fa-x text-sm"></i>
                      ) : (
                        <i className="fa-solid fa-plus text-base"></i>
                      )}
                    </button>
                  </div>
                  <ul className={`${isMiniMenuOneVisible && "mini-menu-opened"} mini-menu-one`}>
                    <li className="w-full px-[10%] border-t border-solid border-[#ffffff1a]">
                      <div className="py-2">
                        <Link href="/" type={""}>
                          SOBRE NOSOTROS
                        </Link>
                      </div>
                    </li>
                    <li className="w-full px-[10%] border-t border-solid border-[#ffffff1a]">
                      <div className="py-2">
                        <Link href="/" type={""}>
                          NUESTRO EQUIPO
                        </Link>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="w-full border-t border-solid border-[#ffffff1a]">
                  <div className=" flex flex-row justify-between py-[10px] place-items-center">
                    <Link href="/" type={""}>
                      SERVICIOS
                    </Link>
                    <button
                      onClick={() => setIsMiniMenuTwoVisible(!isMiniMenuTwoVisible)}
                      className="w-5 h-5 text-white font-light flex self-end justify-end place-items-center"
                    >
                      {!isMiniMenuTwoVisible ? (
                        <i className="fa-solid fa-x text-sm"></i>
                      ) : (
                        <i className="fa-solid fa-plus text-base"></i>
                      )}
                    </button>
                  </div>
                  <ul className={`${isMiniMenuTwoVisible && "mini-menu-opened"} mini-menu-one`}>
                    <li className="w-full px-[10%] border-t border-solid border-[#ffffff1a]">
                      <div className="py-2">
                        <Link href="/" type={""}>
                          SERVICIO
                        </Link>
                      </div>
                    </li>
                    <li className="w-full px-[10%] border-t border-solid border-[#ffffff1a]">
                      <div className="py-2">
                        <Link href="/" type={""}>
                          COTIZA EN LÍNEA
                        </Link>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="w-full border-t border-solid border-[#ffffff1a]">
                  <div className="py-[10px]">
                    <Link href="/" type={""}>
                      PORTAFOLÍO
                    </Link>
                  </div>
                </li>
                <li className="w-full border-t border-solid border-[#ffffff1a]">
                  <div className="py-[10px]">
                    <Link href="/" type={""}>
                      CONTÁCTANOS
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
            {/* SOCIAL MEDIA */}
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-lg text-own-white text-title md:text-2xl">Nuestras redes</h4>
              <div className="flex flex-row gap-7 text-own-white text-xl   md:text-2xl">
                <a href="https://www.facebook.com/avantiseguroscop">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/avantiseguroscop">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCzSy9rtRU-tOyxHvWlgoUMA">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/company/51611540/admin/dashboard/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuVisible ? "block" : "hidden"} fixed  z-40  top-0 right-0 w-full h-full bg-[#000000b3] transition-[0.3s]`}
      ></div>
    </div>
  );
};

function Header() {
  const [scroll, setScroll] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState<boolean | null>(null);
  const [isMiniMenuOneVisible, setIsMiniMenuOneVisible] = useState<boolean | null>(null);
  const [isMiniMenuTwoVisible, setIsMiniMenuTwoVisible] = useState<boolean | null>(null);

  const toggleMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsMenuVisible(true);
  };

  useEffect(() => {
    const handleAnimation = () => {
      if (typeof window !== "undefined") {
        setScroll(document.documentElement.scrollTop > 80);
      }
      // document.documentElement.scrollTop > 80 ? setScroll(true) : setScroll(false);
      // document.documentElement.scrollTop > 390 && setFeatures("features-div-animation");
      // document.documentElement.scrollTop > 800 && setScrollAboutUs({img: "about-us-div-img", text:"about-us-div-text"});
      // document.documentElement.scrollTop > 2600 && setScrollProcess({img: "process-div-img", text:"process-div-text"});
    };

    window.onscroll = () => handleAnimation();
  }, []);

  return (
    <header
      className={`flex justify-between fixed z-50 w-full h-70 border-solid border-b border-b-[rgba(255,255,255,0.16)] header ${scroll ? "scroll-header" : "normal-header"} lg:justify-center `}
    >
      <div className="flex justify-between w-full max-h-[105px] py-5 px-3 md:max-h-[150px] md:px-7  min-[900px]:px-5 min-[900px]:py-0 lg:max-h-[90px]  lg:px-10  2xl:max-w-[1600px]">
        {/* MENU MOBILE */}
        <div className="grid grid-cols-2 w-full min-[900px]:hidden">
          <Logo />
          <div className="flex place-items-center justify-end md:gap-[30px]">
            <a
              href="https://wa.me/+573142924296?text=Quiero%20Asesoría"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex text-body place-items-center h-[50px] px-[30px] text-[14px] text-own-white bg-own-theme-1 font-bold text-center rounded-[35px]"
            >
              QUIERO ASESORÍA
            </a>
            <a
              href="#"
              onClick={toggleMenu}
              id="menu-toggle"
              className="w-[50px] h-[50px] rounded-lg flex justify-center place-items-center bg-own-theme-1 text-own-white"
            >
              <i id="menuMobile" className="fa-solid fa-bars fa-xl self-center icon-menu"></i>
            </a>
          </div>
        </div>
        {/* MENU DESKTOP */}
        <div className="hidden min-[900px]:grid grid-cols-[65%_35%] justify-between w-full min-[900px]:gap-5 lg:gap-7">
          <div className="grid grid-cols-[30%_70%]">
            <Logo />
            <nav className="relative flex place-items-center text-[13px] text-center font-semibold text-body text-white 2xl:text-lg">
              <ul className="flex flex-row justify-evenly w-full h-full place-items-center">
                <li className="h-full flex place-items-center">
                  <Link href="/" type={""}>
                    INICIO
                  </Link>
                </li>
                <li
                  className="h-full flex place-items-center relative gap-1"
                  onMouseEnter={() => setIsMiniMenuOneVisible(true)}
                  onMouseLeave={() => setIsMiniMenuOneVisible(false)}
                >
                  <Link href="/" type={""}>
                    NOSOTROS
                  </Link>
                  <div className="icon-dropdown">
                    <i className="fa-solid fa-angle-right top-0"></i>
                  </div>
                  <ul
                    onMouseEnter={() => setIsMiniMenuOneVisible(true)}
                    onMouseLeave={() => setIsMiniMenuOneVisible(false)}
                    className={`${isMiniMenuOneVisible === null && "hidden"} ${isMiniMenuOneVisible ? "mini-menu-desktop-open" : "mini-menu-desktop-close"} w-[180px] pl-[30px] py-4 text-left bg-own-white text-own-black text-xs absolute top-[100%]`}
                  >
                    <li className="w-full py-2">
                      <Link href="/" type={"miniMenu"}>
                        SOBRE NOSOTROS
                      </Link>
                    </li>
                    <li className="w-full py-2">
                      <Link href="/" type={"miniMenu"}>
                        NUESTRO EQUIPO
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="h-full flex place-items-center relative gap-1"
                  onMouseEnter={() => setIsMiniMenuTwoVisible(true)}
                  onMouseLeave={() => setIsMiniMenuTwoVisible(false)}
                >
                  <Link href="/" type={""}>
                    SERVICIOS
                  </Link>
                  <div className="icon-dropdown">
                    <i className="fa-solid fa-angle-right top-0"></i>
                  </div>
                  <ul
                    className={`${isMiniMenuTwoVisible === null && "hidden"} ${isMiniMenuTwoVisible ? "mini-menu-desktop-open" : "mini-menu-desktop-close"} w-[180px] pl-[20px] py-4 text-left bg-own-white text-own-black text-xs absolute top-[100%]`}
                  >
                    <li className="w-full px-[10%] border-t border-solid border-[#ffffff1a] py-2">
                      <Link href="/" type={"miniMenu"}>
                        SERVICIO
                      </Link>
                    </li>
                    <li className="w-full px-[10%] border-t border-solid border-[#ffffff1a] py-2">
                      <Link href="/" type={"miniMenu"}>
                        COTIZA EN LÍNEA
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`h-full flex place-items-center`}>
                  <Link href="/" type={""}>
                    PORTAFOLÍO
                  </Link>
                </li>
                <li className={`h-full flex place-items-center`}>
                  <Link href="/" type={""}>
                    CONTÁCTANOS
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-end lg:pr-8 ">
            <a
              href="https://wa.me/+573142924296?text=Quiero%20Asesoría"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex text-body place-items-center self-center justify-center h-[50px] w-44 px-[15px] text-xs text-own-white bg-own-theme-1 font-bold text-center rounded-[35px] hover:bg-own-theme-2 "
            >
              QUIERO ASESORÍA
            </a>
          </div>
        </div>
      </div>
      <SideBar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
    </header>
  );
}
