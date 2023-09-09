// "use client";
// import React from "react";
// import Image from "next/image";
// import App from "@components/SliderComponent";
// const Hero2 = () => {
//   return (
//     <>
//       <div className="flex pr-[103px] gap-[92px] pt-[182px] pl-[105px]">
//         <div className="gap-[92px]">
//           <div>
//             <div className="gap-[20px]">
//               <div className="w-[69px] h-[5px] bg-gradient-to-br from-[#F76680]  to-[#57007B]" />
//               <p className="text-gray-900 font-inter text-5xl font-normal pt-5">
//                 Leading companies trust us{" "}
//                 <span className="text-gray-900 font-inter text-5xl font-bold">
//                   to develop software
//                 </span>
//               </p>
//             </div>
//             <div className="text-gray-600 pt-[30px] font-inter text-lg font-normal">
//               <p className="w-[535px] h-[181px]">
//                 We{" "}
//                 <span className="relative text-[#F76680]">
//                   add development capacity
//                 </span>{" "}
//                 to tech teams. Our value isn't limited to building teams but is
//                 equally distributed across the project lifecycle. We are a
//                 custom software development company that guarantees the
//                 successful delivery of your project.
//               </p>
//             </div>
//             <div className="flex gap-[15px] text-[#57007B]">
//               <p>See more Informations</p>
//               <Image src="/assests/Group.svg" width={20} height={20} />
//             </div>
//           </div>
//         </div>
//         <div>
//           <Image src="/assests/Rectangle 8.png" width={950} height={901} />
//         </div>
//       </div>

//       <div className="pl-[105px] pt-[192px] pr-[103px]">
//         <div className="w-[69px] h-[5px] bg-gradient-to-br from-[#F76680]  to-[#57007B]" />
//         <p className="text-gray-900 font-inter text-5xl w-[480px] font-normal pt-5">
//           Meet the People{" "}
//           <span className="text-gray-900 font-inter text-5xl font-bold">
//             We are Working With
//           </span>
//         </p>
//         <div>BUTTONS</div>
//       </div>

//       {/* Slider */}

//       <div className="bg-[#F7F7FA] pt-[60px] pb-[60px] gap-[54px]">
//         <App />
//       </div>

//       <div className="pt-[124.66px] flex flex-col items-center justify-center">
//         <div className="w-[69px] h-[5px] bg-gradient-to-br from-[#F76680] to-[#57007B]" />
//         <p className="text-gray-900 font-inter text-5xl font-normal pt-20 text-center">
//           Why customers love{" "}
//           <span className="text-gray-900 font-inter text-5xl font-bold">
//             working with us
//           </span>
//         </p>
//         <div className="text-gray-600 text-center font-inter text-base font-normal pt-[51px] pb-[40px] w-[535px] h-[181px]">
//           <p className="pt-51">
//             Without any doubt I recommend Alcaline Solutions as one of the best
//             web design and digital marketing agencies. One of the best agencies
//             I've come across so far. Wouldn't hesitate to introduce their work
//             to someone else.
//           </p>
//         </div>
//         <div className="flex gap-[76px]">
//           <div className="justify-center gap-[10px]">
//             <img src="/assests/Ellipse-1-face.svg" alt="image1" />
//             <div className="flex justify-center gap-2">
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//             </div>
//             <p className="text-gray-500 text-center font-inter text-base font-medium">
//               Romeena De Silva
//             </p>
//             <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
//               Janet Cosmetics
//             </p>
//           </div>
//           <div className="justify-center gap-[10px]">
//             <img src="/assests/Ellipse-1-face.svg" alt="image1" />
//             <div className="flex justify-center gap-2">
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//             </div>
//             <p className="text-gray-500 text-center font-inter text-base font-medium">
//               Romeena De Silva
//             </p>
//             <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
//               Janet Cosmetics
//             </p>
//           </div>
//           <div className="justify-center gap-[10px]">
//             <img src="/assests/Ellipse-1-face.svg" alt="image1" />
//             <div className="flex justify-center gap-2">
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//             </div>
//             <p className="text-gray-500 text-center font-inter text-base font-medium">
//               Romeena De Silva
//             </p>
//             <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
//               Janet Cosmetics
//             </p>
//           </div>
//           <div className="justify-center gap-[10px]">
//             <img src="/assests/Ellipse-1-face.svg" alt="image1" />
//             <div className="flex justify-center gap-2">
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//             </div>
//             <p className="text-gray-500 text-center font-inter text-base font-medium">
//               Romeena De Silva
//             </p>
//             <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
//               Janet Cosmetics
//             </p>
//           </div>
//           <div className="justify-center gap-[10px]">
//             <img src="/assests/Ellipse-1-face.svg" alt="image1" />
//             <div className="flex justify-center gap-2">
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//               <img src="/assests/Star_perspective_matte.png" alt="stars" />
//             </div>
//             <p className="text-gray-500 text-center font-inter text-base font-medium">
//               Romeena De Silva
//             </p>
//             <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
//               Janet Cosmetics
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero2;

import React from "react";
import Image from "next/image";
import App from "@components/SliderComponent";

const Hero2 = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start p-5 md:p-10 gap-5">
        {/* Left Content */}
        <div className="md:w-2/3">
          <div className="gap-5 items-center justify-center">
            <div className="w-16 md:w-[69px] h-2 md:h-[5px] bg-gradient-to-br from-[#F76680] to-[#57007B]" />
            <p className="text-gray-900 font-inter text-4xl md:text-5xl font-normal pt-5">
              Leading companies trust us{" "}
              <span className="text-gray-900 font-inter text-4xl md:text-5xl font-bold">
                to develop software
              </span>
            </p>
          </div>
          <div className="text-gray-600 pt-5 md:pt-10 font-inter text-base md:text-lg font-normal">
            <p className="max-w-[535px]">
              We{" "}
              <span className="relative text-[#F76680]">
                add development capacity
              </span>{" "}
              to tech teams. Our value isn't limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>
          </div>
          <div className="flex items-center mt-5 md:mt-10 space-x-3 text-[#57007B]">
            <p>See more Information</p>
            <Image src="/assests/Group.svg" width={20} height={20} />
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-1/3">
          <Image src="/assests/Rectangle 8.png" width={950} height={901} />
        </div>
      </div>

      {/* Section 2 */}
      <div className="p-5 md:p-10">
        <div className="w-14 h-2 bg-gradient-to-br from-[#F76680] to-[#57007B]" />
        <p className="text-gray-900 font-inter text-4xl md:text-5xl w-full md:w-[480px] font-normal pt-5">
          Meet the People{" "}
          <span className="text-gray-900 font-inter text-4xl md:text-5xl font-bold">
            We are Working With
          </span>
        </p>
        <div className="flex justify-end mt-5 md:mt-10 space-x-3">
          {/* Add buttons here */}
          <button className="px-4 py-2 bg-[#F76680] text-white rounded-md hover:bg-opacity-80 transition duration-300 ease-in-out">
            <img src="/assests/eva_arrow-back-fill.svg" alt="" />
          </button>
          <button className="px-4 py-2 bg-[#57007B] text-white rounded-md hover:bg-opacity-80 transition duration-300 ease-in-out">
            <img src="/assests/eva_arrow-back-fill.svg" alt="" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="bg-[#F7F7FA] py-10 md:py-20">
        <App />
      </div>

      {/* Section 3 */}
      <div className="bg-[#fff] pt-10 pb-20 gap-5">
        <div className="p-5 md:p-10">
          <div className="w-14 h-2 bg-gradient-to-br from-[#F76680] to-[#57007B]" />
          <p className="text-gray-900 font-inter text-4xl md:text-5xl font-normal pt-10 text-center">
            Why customers love{" "}
            <span className="text-gray-900 font-inter text-4xl md:text-5xl font-bold">
              working with us
            </span>
          </p>
          <div className="text-gray-600 text-center font-inter text-base md:text-lg font-normal pt-5 md:pt-10 max-w-[535px] mx-auto">
            <p>
              Without any doubt I recommend Alcaline Solutions as one of the
              best web design and digital marketing agencies. One of the best
              agencies I've come across so far. Wouldn't hesitate to introduce
              their work to someone else.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-[76px] mt-10">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/assests/Ellipse-1-face.svg"
                alt="image1"
                width={100}
                height={100}
              />
              <div className="flex justify-center space-x-1">
                {/* Replace this with a loop for star ratings */}
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-gray-500 text-center font-inter text-base font-medium">
                Romeena De Silva
              </p>
              <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
                Janet Cosmetics
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/assests/Ellipse-1-face.svg"
                alt="image1"
                width={100}
                height={100}
              />
              <div className="flex justify-center space-x-1">
                {/* Replace this with a loop for star ratings */}
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-gray-500 text-center font-inter text-base font-medium">
                Romeena De Silva
              </p>
              <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
                Janet Cosmetics
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/assests/Ellipse-1-face.svg"
                alt="image1"
                width={100}
                height={100}
              />
              <div className="flex justify-center space-x-1">
                {/* Replace this with a loop for star ratings */}
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-gray-500 text-center font-inter text-base font-medium">
                Romeena De Silva
              </p>
              <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
                Janet Cosmetics
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/assests/Ellipse-1-face.svg"
                alt="image1"
                width={100}
                height={100}
              />
              <div className="flex justify-center space-x-1">
                {/* Replace this with a loop for star ratings */}
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-gray-500 text-center font-inter text-base font-medium">
                Romeena De Silva
              </p>
              <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
                Janet Cosmetics
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/assests/Ellipse-1-face.svg"
                alt="image1"
                width={100}
                height={100}
              />
              <div className="flex justify-center space-x-1">
                {/* Replace this with a loop for star ratings */}
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assests/Star_perspective_matte.png"
                  alt="stars"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-gray-500 text-center font-inter text-base font-medium">
                Romeena De Silva
              </p>
              <p className="text-gray-400 text-center font-inter text-xs font-normal font-salt">
                Janet Cosmetics
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
