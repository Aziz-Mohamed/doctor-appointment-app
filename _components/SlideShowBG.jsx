"use client";

import dentistChair from "@/public/dentist-chair.jpg";
import doctor from "@/public/doctor.jpg";
import hospitalBuilding from "@/public/hospital-building.jpg";
import hospitalHall from "@/public/hospital-hall-2.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [dentistChair, doctor, hospitalBuilding, hospitalHall];

// export default function SlideShowBG() {
//   return (
//     <div className="w-screen max-h-[60vh] overflow-hidden rounded-b-3xl shadow-2xl shadow-blue-950/50 bg-gradient-to-b from-transparent to-transparent flex justify-end">
//       {images.map((image, index) => (
//         <div key={index} className="mb-0">
//           <Image src={image} alt={`Image ${index + 1}`} />
//         </div>
//       ))}
//     </div>
//   );
// }

export default function SlideShowBG() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className=" relative w-screen min-h-[60vh] overflow-hidden rounded-b-3xl shadow-2xl shadow-black-50 bg-gradient-to-b from-transparent to-transparent flex justify-end">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 mb-0 h-full flex justify-center items-end ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="h-full w-full object-cover opacity-50"
          />
        </div>
      ))}
    </div>
  );
}
