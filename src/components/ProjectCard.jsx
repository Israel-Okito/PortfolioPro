import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const ProjectCard = ({ imgUrl,  techno, title, description, gitUrl, previewUrl, bigdescription }) => {
  return (
    <div>
      <div
        className="group relative h-52  rounded-t-xl md:h-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute left-0 top-0 hidden size-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80 ">
          {/* <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
         
                  <Dialog>
                   <DialogTrigger asChild>
                     <button   className="group/link relative h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white">
                       <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
       
                     </button>
                   </DialogTrigger>
                   <DialogContent className="sm:max-w-[650px]">
                     <DialogHeader>
                       <DialogTitle> 
                         <span className="mb-2 text-xl font-semibold">{title}</span>
                        </DialogTitle>
                       <DialogDescription>
                          {bigdescription}
                          <br/> <br/>
                          <span > les technos utiliser pour ce projet sont: 
                            
                             <span className="font-bold"> {techno}</span>
                          </span>
                       </DialogDescription>
                     </DialogHeader>
                       <span
                         className="group relative h-80  rounded-t-xl md:h-72"
                          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
                        >

                        </span>
                     <DialogFooter>
                        {/* <Link
                           href={previewUrl }
                           className={`${!previewUrl && 'overflow-hidden'}`}
                           >
                           <button className={`flex items-center gap-2 rounded bg-purple-500 p-4 text-white hover:bg-purple-800 ${!previewUrl && 'overflow-hidden'}`}>
                           <EyeIcon className=" w-5 text-white"  />voir le projet
                            </button>
                        </Link> */}

                        {previewUrl ? (
                           <Link href={previewUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           >
                             <button className="flex items-center gap-2 rounded bg-purple-500 p-4 text-white hover:bg-purple-800">
                               <EyeIcon className="w-5 text-white" />
                               voir le projet
                             </button>
                           </Link>
                         ) : (
                           <div className="overflow-hidden">
                             <button className="flex items-center gap-2 rounded bg-red-500 p-4 text-white hover:bg-red-800">
                               <EyeIcon className="w-5 text-white" />
                              Impossible de voir ce projet car il n&apos;est encore publier 
                             </button>
                           </div>
                         )}
                     </DialogFooter>
                   </DialogContent>
                 </Dialog>

        </div>
      </div>



      <div className="bg-[#181818]py-6 mt-3 rounded-b-xl px-4 text-white">
        <h1 className="mb-2 text-xl font-semibold">{title}</h1>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
