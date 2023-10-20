"use client";
import Image from "next/image";
import Link from "next/link";

// components
import Nav from "../components/Nav";
import RandomPattern from "../components/RandomPattern";
import MouseFollowPattern from "../components/MouseFollowPattern";
import StickyIcons from "../components/StickyIcons";
import Footer from "../components/Footer";

// pages
import Contact from "./contact/page";
import About from "./about/page";
import Creative from "./creative/page";
import Project from "./project/page";
import Art from "./art/page";

export default function Home() {
  const resumeDownload = () => {
    const resumeUrl = `https://github.com/SushantChhetry/leet-code-problems/raw/main/Sushant%20Chhetry%20-%20Software%20Engineer.pdf`;

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank";
    link.download = "Sushant Chhetry - Software Engineer.pdf";

    link.click();
  };
  return (
    <main className=" h-screen cursor-none">
      <div className="hidden md:block">
        {/* Content to be displayed on larger screens (windows) */}
        <MouseFollowPattern />
      </div>

      {/* <StickyIcons /> */}

      <Nav />
      <div className="h-screen flex md:flex-wrap justify-center items-center text-center flex-col mb-5">
        <div className="flex flex-1 flex-col gap-3 justify-center items-center">
          <div className="md:flex gap-5">
            <div className="flex flex-col flex-1 justify-center items-center">
              <h1 className="text-6xl md:text-8xl	font-extrabold transition duration-500 hover:text-blue-600 mt-5">
                Sushant
              </h1>
              <h1 className=" text-6xl md:text-8xl	 font-extrabold my-2">
                Chhetry
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/code.gif" alt="art" width={400} height={400} />
            </div>
          </div>
          <span className="flex gap-9 justify-center items-center">
            <button
              className="relative text-2xl transition duration-300 after:content-[''] after:absolute after:w-0 after:h-0 after:border-b-2 after:border-blue-600 after:left-1/2 after:bottom-0 after:-translate-x-1/2 hover:after:w-full hover:opacity-100"
              onClick={resumeDownload}
            >
              resume.
            </button>
            <button className="relative text-2xl transition duration-300 after:content-[''] after:absolute after:w-0 after:h-0 after:border-b-2 after:border-blue-600 after:left-1/2 after:bottom-0 after:-translate-x-1/2 hover:after:w-full hover:opacity-100">
              <Link href="#hire">hire me.</Link>
            </button>
          </span>
          <p className="md:p-10 text-center text-xl md:text-2xl md:m-8 md:px-32 px-10">
            I&apos;m a creative software engineer who builds delightful web
            experiences and applications.
          </p>
        </div>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="hire">
        <Contact />
      </section>
      <section id="posts">
        <Creative />
      </section>
      <section id="art">
        <Art />
      </section>
      <Footer />
    </main>
  );
}
