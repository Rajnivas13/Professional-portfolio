import React from "react";
import Image from "next/image";
import { Timeline as TimelineUI } from "./ui/TimelineUI";
import { FcCheckmark } from "react-icons/fc";

export function Timeline() {
  const changelogItems = [
    {
      year: "2025",
      changeLogItemsContent: [
        "Review Workbook Generator: Integrated Single Sign-On (SSO) for Internal users using Auth0 with JumpCloud",
        "Enabling DataShare in Databricks",
      ],
    },
    {
      year: "2024",
      changeLogItemsContent: [
        "School Records Interface: Developed NextJS-based platform for seamless school record access, leveraging ReactJS, TailwindCSS, and SnowflakeDB.",
        "SkillFit Frontend: Integrated Single Sign-On (SSO) for AHIMA users using AWS Cognito with Azure ADB2C and also done Database Migration from Dynamodb to Postgres in SkillFit Application",
        "Alumni Pathway Tool: Enhanced review tracking, bulk OPE ID upload, and export functionality.",
        "Raptor Applications: Enabled SSO (Falcon & Review Workbook Generator) using Auth0 & JumpCloud.",
        "Alumni Pathways Tool: Built a data table integrating IPEDS completion counts with graduation data.",
      ],
    },
    {
      year: "2023",
      changeLogItemsContent: [
        "Focus App: Integrated Lightcast API, optimizing data retrieval speed.",
        "Skillfit Admin: Boosted dashboard efficiency, reducing talent search slowness. (Performance Fix)",
        "Falcon: Migrated NOC Codes from 2016 to 2021, prioritized occupation mappings.",
        "Review Workbook Generator: Transitioned 7 Career Coach applications to the India Dev team, ensuring zero downtime while enhancing CI/CD automation.",
        "Built reusable components for Applied Research Portal.",
      ],
    },
    {
      year: "2022",
      changeLogItemsContent: [
        "Lens Xray: Led PDF-to-text feasibility study, fixed character sequence & multi-column resume issues, developed PyMuPDF extraction with dynamic text mapping.",
        "Lens API Team: Deployed Lens API Admin Dashboard v1.0 (AWS), migrated SQL to PostgreSQL, removed OAuth 1.0, integrated CI/CD, Dockerized images, enabled AWS CloudWatch logging, conducted code reviews & optimizations.",
        "Nova Team: Improved PGT logging for better error tracking & failure detection.",
        "Customer Impact: Optimized Lens API Admin Dashboard, improved PDF-to-text extraction speed to 0.6ms.",
      ],
    },
  ];

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-8 grid grid-flow-col gap-2">
            <div>
              {changelogItems
                .filter((item) => item.year === "2025")[0]
                .changeLogItemsContent.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <p className="col-span-1 top-0">
                      <FcCheckmark />
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal col-span-2 ml-2">
                      {item}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/DatabricksImage.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8 grid grid-flow-col gap-2">
            <div>
              {changelogItems
                .filter((item) => item.year === "2024")[0]
                .changeLogItemsContent.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <p className="col-span-1 top-0">
                      <FcCheckmark />
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal col-span-2 ml-2">
                      {item}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/NextJSAuth.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-8 grid grid-flow-col gap-2">
            <div>
              {changelogItems
                .filter((item) => item.year === "2023")[0]
                .changeLogItemsContent.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <p className="col-span-1 top-0">
                      <FcCheckmark />
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal col-span-2 ml-2">
                      {item}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-8 grid grid-flow-col gap-2">
            <div>
              {changelogItems
                .filter((item) => item.year === "2022")[0]
                .changeLogItemsContent.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <p className="col-span-1 top-0">
                      <FcCheckmark />
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal col-span-2 ml-2">
                      {item}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/ResumeParsing.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover object-center h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-10">
      <TimelineUI data={data} />
    </div>
  );
}

export default Timeline;
