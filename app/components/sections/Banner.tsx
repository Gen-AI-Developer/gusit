import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#2E577D] text-1xl  text-white hidden lg:flex lg:justify-between">
      <div className="flex gap-4 py-3 px-3 font-bold">
        <div>PSH : +92 91-5825707</div>
        <div>D.I.KHAN : +92 966-714007</div>
        <div>info@qurtuba.edu.pk</div>
      </div>
      <div>
        <button className="hover:bg-white hover:text-[#2E577D] h-full px-4 font-bold">
          Online Admission
        </button>
      </div>
    </div>
  );
};

export default Banner;
