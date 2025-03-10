import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

function Experiance() {
  return (
    <div className="py-20" id="experiance">
      <h1 className="heading">
        My Work <span className="text-purple">Experiance</span>
      </h1>
     

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div>
              <img src={card.thumbnail} className="lg:w-32 md:w-20 w-16" />
                    <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                        <p className="text-white-100 text-start mt-3 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
