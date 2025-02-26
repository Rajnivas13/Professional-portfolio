"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const handleClick = (url:string) => () => {
  window.open(url, "_blank");
};

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-20 text-white text-center" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="logo"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s Work <span className="text-purple">Together</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you with
          your goals
        </p>
        <div className="flex items-center justify-center mt-5">
          <a href="mailto:rajnivasgt@gmail.com">
            <MagicButton
              title="Let's Get in Touch"
              icon={<FaLocationArrow />}
              position="right"
              otherclassNames="gap-2"
            />
          </a>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Rajnivas GT. All rights reserved.
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item, index) => (
            <div
              key={index}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-black-200 bg-opacity-75 rounded-full saturate-180"
              onClick={handleClick(item.url)}
            >
              <img src={item.img} alt={`${item.id}`} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
