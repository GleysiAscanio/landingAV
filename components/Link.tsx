import React, { useState } from "react";
import { usePageContext } from "vike-react/usePageContext";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  type: string;
}

export function Link({ href, children, type }: LinkProps) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const [isActiveDesktop, setIsActiveDesktop] = useState<boolean | null>(false);
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  return (
    <a
      href={href}
      onMouseEnter={() => {
        if (type !== "miniMenu") {
          setIsActiveDesktop(true);
        }
      }}
      onMouseLeave={() => {
        if (type !== "miniMenu") {
          setIsActiveDesktop(false);
        }
      }}
      className={`${isActive ? "is-active" : "text-own-theme-2"} ${isActiveDesktop ? "options-menu-open" : "options-menu-closed"} ${type === "miniMenu" && "hover:text-own-theme-1"} h-full content-center relative text-body`}
    >
      {children}
    </a>
  );
}
