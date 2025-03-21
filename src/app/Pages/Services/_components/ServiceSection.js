import { Services } from "@/app/constant/Data";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

const ServiceSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 py-10 sm:py-14 dark:text-[#eeeeed]">
        {/* title section  */}
        <div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">
            What I Can Do for You
          </div>
          <div className="text-xs sm:text-lg md:text-xl font-bold">
            🔥Your Vision, Our Code.
          </div>
        </div>
        <div className="">
          <HoverEffect items={Services} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
