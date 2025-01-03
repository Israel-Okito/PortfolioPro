import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container gap-2 py-10 px-2 sm:p-12 flex justify-between">
       <Link
          href={"/"}
          className=" text-white font-semibold"
        >
          <Image src="/dev.png" alt="logo dev" width={50} height={50} />
        </Link>
        <p className="text-slate-400">Copyright &copy; {new Date().getFullYear()} développer par Okito</p>
      </div>
    </footer>
  );
};

export default Footer;
