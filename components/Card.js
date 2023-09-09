import React from "react";
import Image from "next/image";
const Card = ({ circle, image, head, body }) => {
  return (
    <div className="onHover relative px-[16px] py-[24.5px] transition-transform transform hover:translate-y-8 bg-white drop-shadow-2xl group">
      <div className="image-head pt-[24.5px] gap-[20px]">
        <div className="pb-[43px] overflow-hidden">
          <Image
            src={image}
            width={50}
            height={50}
            alt="image"
            className="rounded-[100px] p-[2px] border-2 border-[#F76680] overflow-hidden"
          />
        </div>

        <h2 className="text-xl relative pb-[20px] group-hover:text-[#F76680]">
          {head}
        </h2>
      </div>
      <div className="text-gray-700 font-sans text-base font-normal leading-relaxed">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
