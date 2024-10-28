import NavigateButton from "@/components/shared/NavigateButton";
import Image from "next/image";
import React from "react";
import img from "@/assets/images/sectionsImages/image_12-removebg-preview.png";
const BannerSection = () => {
  return (
    <div className="bg-[#E0C340] flex justify-center items-center" id="sale">
      <div className="md:flex gap-20 my-6  ">
        <div>
          <Image src={img} alt="banner image mix-blend-multiply w-full" />
        </div>
        <div className="space-y-4  text-center md:text-left pt-20 sm:w-[40%] mx-auto px-4 md:px-0">
          <div className="text-5xl md:text-6xl font-bold flex flex-col w-fit gap-2 mx-auto md:mx-0">
            <span className="bg-white p-2 ">PAYDAY</span>
            SALENOW
          </div>

          <p className="text-medium text-lg">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p className="text-medium text-lg">
            <span className="font-bold block">1 June - 10 June 2021</span>
            *Terms & Conditions apply
          </p>
          <NavigateButton label="Shop Now" url="/products" />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
