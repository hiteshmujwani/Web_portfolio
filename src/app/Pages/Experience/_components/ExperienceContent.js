import { Expe } from "@/app/constant/Data";
import { Badge } from "@/components/ui/badge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Briefcase, BriefcaseBusiness, Calendar, MapPin } from "lucide-react";
import React from "react";

const ExperienceContent = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 py-10 sm:py-14 dark:text-[#eeeeed]">
        <div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">
            The Road of Experience
          </div>
          <div className="text-xs sm:text-lg md:text-xl font-bold">
            🌟 Chapters of My Career
          </div>
        </div>

        {/* experience list  */}
        <TracingBeam className={"hidden md:block h-full"}>
          <div className="flex flex-col gap-2 relative antialiased ">
            {Expe.map((item, index) => (
              <div className="flex flex-col gap-3 mt-3" key={index}>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="text-lg sm:text-2xl font-medium flex items-center gap-2">
                      <BriefcaseBusiness className="h-4 w-4 md:h-5 md:w-5" />{" "}
                      {item.company_name}
                    </div>
                    <div className="text-sm sm:text-lg font-medium flex items-center gap-2">
                      {item.location}{" "}
                      <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                  </div>
                  <div className="flex justify-between sm:items-center items-start text-sm sm:text-lg">
                    <div className="flex flex-col sm:flex-row gap-2">
                      {item.designation} <Badge>{item.job_type}</Badge>
                    </div>
                    <div className="text-sm sm:text-lg flex items-center gap-2">
                      <span>
                        {item.duration.start_date} - {item.duration.end_date}
                      </span>
                      <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" hidden md:flex flex-col">
                    {item.description.map((line, index) => (
                      <li className="text-lg" key={index}>
                        {line}
                      </li>
                    ))}
                  </div>
                  <div className="md:hidden flex">{item.sm_description}</div>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>

        <div className="flex flex-col md:hidden gap-2 relative antialiased ">
          {Expe.map((item, index) => (
            <div className="flex flex-col gap-3 mt-3" key={index}>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="text-lg sm:text-2xl font-medium flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 md:h-5 md:w-5" />{" "}
                    {item.company_name}
                  </div>
                  <div className="text-sm sm:text-lg font-medium flex items-center gap-2">
                    {item.location} <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </div>
                <div className="flex justify-between sm:items-center items-start text-sm sm:text-lg">
                  <div className="flex flex-col sm:flex-row gap-2">
                    {item.designation} <Badge>{item.job_type}</Badge>
                  </div>
                  <div className="text-sm sm:text-lg flex items-center gap-2">
                    <span>
                      {item.duration.start_date} - {item.duration.end_date}
                    </span>
                    <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </div>
              </div>
              <div>
                <div className=" hidden md:flex flex-col">
                  {item.description.map((line, index) => (
                    <li key={index} className="text-lg">
                      {line}
                    </li>
                  ))}
                </div>
                <div className="md:hidden flex">{item.sm_description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;

// <div className="flex flex-col gap-2 relative antialiased ">
//           {Expe.map((item, index) => (
//             <div className="flex flex-col gap-3 mt-3" key={index}>
//               <div className="flex flex-col">
//                 <div className="flex justify-between items-center">
//                   <div className="text-2xl font-medium flex items-center gap-2">
//                     <BriefcaseBusiness /> {item.company_name}
//                   </div>
//                   <div className="text-lg font-medium flex items-center gap-2">
//                     {item.location} <MapPin />
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center text-xl">
//                   <div className="">
//                     {item.designation} <Badge>{item.job_type}</Badge>
//                   </div>
//                   <div className="text-lg flex items-center gap-2">
//                     <span>
//                       {item.duration.start_date} - {item.duration.end_date}
//                     </span>
//                     <Calendar />
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className=" hidden sm:flex flex-col">
//                   {item.description.map((line, index) => (
//                     <li className="text-lg">{line}</li>
//                   ))}
//                 </div>
//                 <div className="sm:hidden flex">{item.sm_description}</div>
//               </div>
//             </div>
//           ))}
//         </div>
