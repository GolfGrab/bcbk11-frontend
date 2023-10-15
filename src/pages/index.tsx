import About from "@/modules/About/About";
import Footer from "@/modules/Footer/Footer";
import Gallery from "@/modules/Gallery/Gallery";
import Hero from "@/modules/Hero/Hero";
import Navbar from "@/modules/Navbar/Navbar";
import Question from "@/modules/Question/Question";
import Schedule from "@/modules/Schedule/Schedule";
import Sponsor from "@/modules/Sponsor/Sponsor";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CustomHead />
      <main
        className={
          "min-h-screen overflow-hidden bg-[#262329] text-white " +
          inter.className
        }
      >
        <Navbar />
        <Hero />
        <Sponsor />
        <About />
        <Gallery />
        <Schedule />
        <Question />
        <Footer />
      </main>
    </>
  );
}

const CustomHead = () => {
  return (
    <Head>
      <title>Barcamp Bangkhen 11</title>
      <meta name="description" content="Barcamp Bangkhen 11" />
      <meta name="theme-color" content="#262329" />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#262329"
      />
      <meta name="msapplication-TileColor" content="#9f00a7" />
      <meta name="theme-color" content="#262329" />
    </Head>
  );
};
