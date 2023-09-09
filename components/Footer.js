// import React from "react";
// import logo from "@public/assests/Logo.svg";
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faInstagram,
//   faFacebookF,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// const Footer = () => {
//   return (
//     <>
//       <div className="flex justify-around p-9 gap-9 m-7">
//         <div>
//           <Link href="/" className="flex">
//             <Image src={logo} alt="logo" width={30} height={30} />
//             <p className=" font-semibold text-lg logo-text text-black tracking-wide">
//               IK Developers
//             </p>
//           </Link>
//           <p className="text-gray-600 font-poppins text-base font-normal">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
//             consequatur libero ea, placeat veritatis tempore aperiam quae
//             voluptates ullam culpa fuga nam explicabo facilis omnis eum haru
//             obcaecati? Blanditiis, impedit!
//           </p>
//           <img src="/assests/google-page-speed 1.png" alt="" />
//         </div>
//         <div className="w-full">
//           <h1 className="text-gray-700 font-inter  justify-start text-lg font-semibold">
//             Links
//           </h1>
//           <div className="text-[#4A5568] flex flex-col justify-between flex-shrink-0 md:gap-5">
//             <Link href="#">About Us</Link>
//             <Link href="#">Services</Link>
//             <Link href="#">Case Studies</Link>
//             <Link href="#">How it works</Link>
//             <Link href="#">Blog</Link>
//             <Link href="#">Careers</Link>
//             <Link href="#">Areas we serve</Link>
//           </div>
//         </div>
//         <div className="">
//           <p className="text-gray-700 font-inter text-lg font-semibold">
//             Contact Us
//           </p>
//           <p className="text-gray-600 font-poppins text-base font-normal">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
//             possimus aliquid hic dignissimos non, impedit necessitatibus, nam
//             vel eveniet tempora, distinctio excepturi quos quibusdam nobis animi
//             deleniti temporibus beatae blanditiis?
//           </p>
//           <p className="text-gray-600 font-poppins text-base font-normal">
//             +908 89097 890
//           </p>
//         </div>
//         <div className="justify-end flex flex-col">
//           <div className="flex justify-center gap-4">
//             <div className="w-10 h-10 rounded-full shadow-xl flex justify-center items-center">
//               <div className="w-9 h-9 p-2 rounded-full bg-white flex justify-center items-center">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </div>
//             </div>
//             <div className="w-10 h-10 rounded-full shadow-xl flex justify-center items-center">
//               <div className="w-9 h-9 p-2 rounded-full bg-white flex justify-center items-center">
//                 <FontAwesomeIcon icon={faInstagram} />
//               </div>
//             </div>
//             <div className="w-10 h-10 rounded-full shadow-xl flex justify-center items-center">
//               <div className="w-9 h-9 p-2 rounded-full bg-white flex justify-center items-center">
//                 <FontAwesomeIcon icon={faLinkedin} />
//               </div>
//             </div>
//             <div className="w-10 h-10 rounded-full shadow-xl flex justify-center items-center">
//               <div className="w-9 h-9 p-2 rounded-full bg-white flex justify-center items-center">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <div className="text-gray-700 font-inter text-sm font-normal text-center p-9">
//         <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import logo from "@public/assests/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="flex max-md:flex-col justify-center md:justify-between p-4 md:p-9 gap-4 md:gap-9 m-7">
        {/* Logo and About */}
        <div className="md:w-1/4 m-6">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={30} height={30} />
            <p className="ml-2 font-semibold text-lg logo-text text-black tracking-wide">
              IK Developers
            </p>
          </Link>
          <p className="text-gray-600 font-poppins text-base font-normal mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            consequatur libero ea, placeat veritatis tempore aperiam quae
            voluptates ullam culpa fuga nam explicabo facilis omnis eum harum
            obcaecati? Blanditiis, impedit!
          </p>
          <img src="/assests/google-page-speed 1.png" alt="" className="mt-4" />
        </div>

        {/* Links */}
        <div className="md:w-1/4 p-2 max-lg:flex-col">
          <div className="text-[#4A5568] max-lg:flex-col mt-2 flex md:flex-col gap-3 px-6 justify-between">
            <h1 className="text-gray-700 font-inter text-lg font-semibold">
              Links
            </h1>
            <Link href="#">About Us</Link>
            <Link href="#">Services</Link>
            <Link href="#">Case Studies</Link>
            <Link href="#">How it works</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Areas we serve</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="md:w-1/4 m-9">
          <p className="text-gray-700 font-inter text-lg font-semibold">
            Contact Us
          </p>
          <p className="text-gray-600 font-poppins text-base font-normal mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            possimus aliquid hic dignissimos non, impedit necessitatibus, nam
            vel eveniet tempora, distinctio excepturi quos quibusdam nobis animi
            deleniti temporibus beatae blanditiis?
          </p>
          <p className="text-gray-600 font-poppins text-base font-normal mt-2">
            +908 89097 890
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-end flex-col md:justify-end mt-4 md:mt-0">
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full shadow-xl flex items-center justify-center"
            >
              <div className="w-9 h-9 p-2 rounded-full bg-white flex items-center justify-center">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full shadow-xl flex items-center justify-center"
            >
              <div className="w-9 h-9 p-2 rounded-full bg-white flex items-center justify-center">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full shadow-xl flex items-center justify-center"
            >
              <div className="w-9 h-9 p-2 rounded-full bg-white flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full shadow-xl flex items-center justify-center"
            >
              <div className="w-9 h-9 p-2 rounded-full bg-white flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      <div className="text-gray-700 font-inter text-sm font-normal text-center p-4 md:p-9">
        <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
