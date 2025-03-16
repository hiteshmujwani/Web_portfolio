import React from "react";
import AboutContent from "./_components/AboutContent";

const About = () => {
  return (
    <div className="font-lora relative px-4 sm:px-12 xl:px-24">
      <div className="h-full w-full absolute z-[-1] top-0 left-0 ">
        <img
          src="/aboutbgmobile.png"
          className="object-cover h-full w-full md:hidden dark:invert-100"
        />
        <img
          src="/aboutbg.png"
          className="object-cover h-full w-full hidden md:block dark:invert-100"
        />
      </div>
      <div>
        <AboutContent />
      </div>
    </div>
  );
};

export default About;

// <div className="flex flex-col gap-6 py-10 sm:py-14">
//         <div>
//           <div className="text-3xl font-bold">The Journey Behind My Code</div>
//           <div className="text-xl font-bold">👋 Hey, I'm Hitesh!</div>
//         </div>

//         <div className="flex flex-col gap-3 text-xl font-base ">
//           <div>
//             A passionate
//             <Highlight>
//               {" "}
//               Full-Stack Developer, UI/UX Designer, and Mobile App Developer{" "}
//             </Highlight>
//             with a journey fueled by self-discovery and persistence. Though I
//             pursued a<strong> B.Com from Rajasthan University</strong> due to
//             incorrect guidance, I soon realized my true passion lay in{" "}
//             <strong>technology and development</strong>. While working in a{" "}
//             <strong>BPO for two years</strong>, I started exploring
//             <strong> web development</strong>—and that’s when everything
//             changed.
//           </div>

//           <div>
//             As my interest grew, I <strong>quit my job</strong> to fully
//             dedicate myself to learning. I completed a{" "}
//             <strong>MERN stack training program </strong>, followed by a
//             <Highlight> 6-month full-stack development internship</Highlight>,
//             which ultimately led me to my first role as a{" "}
//             <strong>Frontend Developer</strong>. Along the way, I also honed my
//             skills in <strong>UI/UX design</strong>, realizing that building
//             user-friendly, visually appealing experiences is just as important
//             as writing clean code.
//           </div>

//           <div>
//             Driven by curiosity, I expanded into{" "}
//             <strong> mobile app development</strong> and learned
//             <strong> React Native</strong>, completing a{" "}
//             <strong> 3-month internship</strong> focused on building
//             cross-platform mobile applications. To further deepen my expertise,
//             I am currently pursuing an{" "}
//             <Highlight> MCA (Master of Computer Applications)</Highlight> to
//             gain a
//             <strong>
//               {" "}
//               stronger foundation in software development and advanced
//               technologies
//             </strong>
//             .
//           </div>

//           <div>
//             With hands-on experience in{" "}
//             <strong> web and mobile development</strong>, I thrive in the world
//             of <strong> development & design</strong>, always eager to innovate
//             and grow.
//             <Highlight>This is just the beginning!</Highlight>
//           </div>
//         </div>
//       </div>
