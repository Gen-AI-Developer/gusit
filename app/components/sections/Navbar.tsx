import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="bg-white">
      <nav className="sticky top-0 flex items-center justify-between">
        <div className="text-black font-bold text-4xl">QUSIT</div>
        <div className=" flex gap-5">
          <Link className="" href={"/"}>
            Home
          </Link>
          <Link href={"/aboutus"}>About</Link>
          <Link href={"/admissions"}>Admissions</Link>
          <Link href={"/departments"}>Departments</Link>
          <Link href={"/faculties"}>Faculties</Link>
          <Link href={"/oric"}>ORIC</Link>
          <Link href={"/researchjournals"}>Reseach Journals</Link>
          <Link href={"/qec"}>QEC</Link>
          <Link href={"/portal-mis"}>Portal/MIS</Link>
          <Link href={"/convocations"}>Convocations</Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
