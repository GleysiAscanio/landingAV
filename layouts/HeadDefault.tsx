import React from "react";
import logoUrl from "../assets/favicon.png";

// Default <head> (can be overridden by pages)

export default function HeadDefault() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <script src="https://kit.fontawesome.com/4f42d3a865.js"></script>
      <link rel="icon" href={logoUrl} />
      <link rel="shortcut icon" type="image/x-icon" href={logoUrl} />
    </>
  );
}
