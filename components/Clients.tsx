"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

export function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        A Kind words from <span className="text-purple">Colleagues</span>
      </h1>
      <div className="flex flex-col items-center justify-center relative">
        <div className="h-[50vh] md:[30rem] rounded-md relative overflow-hidden flex flex-col justify-center items-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-[40vw] max-w-[50vw] gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-full h-full w-10"
                />
                  <img
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                  />
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </div>
  );
}
