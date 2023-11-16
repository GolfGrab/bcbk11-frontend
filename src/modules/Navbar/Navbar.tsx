import React from "react";
import { sections } from "../components/Section";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <style jsx>{`
        .navbar {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
      <div className="navbar fixed left-0 top-0 z-[100] flex h-20 w-full items-center justify-between bg-[#2623294D] p-5 lg:px-12 lg:py-6">
        <a href={`#${sections.hero.id}`} className="text-[28px]">
          <Image
            src="/images/bcbk11_small_logo.png"
            alt="Barcamp Bangkhen"
            width={500}
            height={400}
            className="h-20 w-20  object-contain"
          />
        </a>
        <div className=" flex justify-between gap-[4vw] text-[min(4vw,_28px)] md:gap-20 md:text-[28px] ">
          {Object.values(sections)
            .slice(1)
            .map(({ id, title }) => (
              <a
                href={`#${id}`}
                key={id}
                className=" font-semibold hover:text-gray-300 active:text-gray-400"
              >
                {title}
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
