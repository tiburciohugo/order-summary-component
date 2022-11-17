import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
   <Html className="w-full bg-mobile md:bg-desktop bg-no-repeat bg-100% bg-top bg-very-pale-blue" lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
