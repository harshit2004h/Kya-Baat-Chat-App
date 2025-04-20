import React from "react";
import Image from "next/image";
import ProfileMenu from "../auth/ProfileMenu";

const DashNav = ({ name, image }: { name: string; image?: string }) => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold pl-3 flex items-center">
        <Image src={"/Logo.png"} alt="Logo" width={80} height={50} />
        Kya Baat
      </h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700 p-6">
        <ProfileMenu name={name} image={image} />
      </div>
    </nav>
  );
};

export default DashNav;
