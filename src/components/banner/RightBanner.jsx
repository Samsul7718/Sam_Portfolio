// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { bannerImg } from "../../assets";

// export const RightBanner = () => {
//   const [positions, setPositions] = useState(
//     Array.from({ length: 5 }, () => ({ x: 0, y: 0, z: 0 }))
//   );

//   const handleMouseMove = (e) => {
//     const newPositions = positions.map(() => ({
//       x: e.clientX - window.innerWidth / 2,
//       y: e.clientY - 100,
//       z: 0,
//     }));
//     setPositions(newPositions);
//   };

//   return (
//     <div
//       className="w-1/2 flex justify-center items-center relative"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Background Image */}
//       {/* <img
//         className="w-[500px] h-[680px] z-10"
//         src={bannerImg}
//         alt="bannerImg"
//       /> */}

//       {/* Gravity Balls */}
//       {positions.map((position, index) => (
//         <motion.div
//           key={index}
//           className="absolute w-16 h-16 bg-blue-500 rounded-full shadow-lg"
//           animate={{
//             x: position.x * 0.2, // Smooth movement
//             y: [position.y * 0.3, 300], // Gravity effect
//             z: position.z * 0.2, // Smooth movement
//           }}
//           transition={{
//             ease: "easeOut",
//             duration: 4, // Settles after 2s
//             type: "spring",
//             stiffness: 50,
//           }}
//         />
//       ))}

//       {/* Dark Gradient Overlay */}
//       {/* <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
//     </div>
//   );
// };
