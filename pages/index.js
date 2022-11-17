import Head from "next/head";
import Order from "../Components/Order";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Order Summary Component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="grid content-center w-screen h-screen">
        <Order />
      </main>
    </div>
  );
}
