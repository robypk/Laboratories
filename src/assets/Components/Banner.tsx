import React from "react";
import LabBanner from "../images/LabBanner.jpg";

interface BannerProps {
  // props definition
}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <>
      <div
        className=" relative bg-cover bg-center h-72"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${LabBanner})`,
        }}
      >
        <div className="absolute bottom-10 left-10 text-5xl text-zinc-50">
          {" "}
          INFRAST LABORATORIES{" "}
        </div>
      </div>
    </>
  );
};

export default Banner;
