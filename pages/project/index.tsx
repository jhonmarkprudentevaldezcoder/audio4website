import Button from "components/atoms/Button";
import Select from "components/atoms/Form/Select";
import LineDivider from "components/atoms/LineDivider";
import PageSentence from "components/molecules/PageSentence";
import ProjectCard from "components/molecules/Card/ProjectCard";
import PageTemplate from "components/templates/PageTemplate";
import React, { useState, ChangeEvent } from "react";

import randomString from "utils/randomString";

const Project: React.FC = () => {
  interface Project {
    num: string;
    category: string;
    title: string;
    description: string;
    image: string;
  }
  const projectList: Project[] = [
    //Conference Systems
    {
      num: "1",
      category: "Conference-Systems",
      title: "Conference Room",
      description: "A landing page for Products",
      image: "/images/projects/conference.jpg",
    },
    //Equipment Racks/Cases
    {
      num: "2",
      category: "Equipment-Racks-Cases",
      title: "Equipment Racks/Cases",
      description: "A landing page for Products",
      image: "/images/projects/Cases.jpeg",
    },
    //Radio Systems
    {
      num: "3",
      category: "Radio-Systems",
      title: "Radio Systems",
      description: "A landing page for Products",
      image: "/images/projects/RadioSystem.jfif",
    },
    //Video Projection system
    {
      num: "4",
      category: "Video-Projection-Systems",
      title: " Projection system",
      description: "A landing page for Products",
      image: "/images/projects/Projection.jfif",
    },
    //Telephone & PABX Systems
    {
      num: "5",
      category: "Telephone-PABX-Systems",
      title: "Telephone & PABX Systems",
      description: "A landing page for Products",
      image: "/images/projects/Telephone.jpg",
    },
    //Surveillance Cameras
    {
      num: "6",
      category: "Surveillance-Cameras",
      title: "Surveillance Cameras",
      description: "A landing page for Products",
      image: "/images/projects/Surveillance.jpg",
    },
    //Speech Laboratory Systems
    {
      num: "7",
      category: "Speech-Laboratory",
      title: "Speech Laboratory Systems",
      description: "A landing page for Products",
      image: "/images/projects/Laboratory.jpg",
    },

    //Intercom-Systems
    {
      num: "8",
      category: "Intercom-Systems",
      title: "Intercom Systems",
      description: "A landing page for Products",
      image: "/images/projects/Intercom.jpg",
    },

    //Paging Power Amplifiers
    {
      num: "9",
      category: "Paging-System-Amplifiers",
      title: "Paging System ",
      description: "A landing page for Products",
      image: "/images/projects/Amplifiers.jpg",
    },

    //Specialize Speakers
    {
      num: "10",
      category: "Specialized-Speakers",
      title: "WaterProof Speakers",
      description: "A landing page for Products",
      image: "/images/projects/Weatherproof.jfif",
    },
    {
      num: "11",
      category: "Specialized-Speakers",
      title: "Ceiling Speakers",
      description: "A landing page for Products",
      image: "/images/projects/Ceiling.jpg",
    },

    //Lighting-Systems
    {
      num: "12",
      category: "Lighting-Systems",
      title: "Lights",
      description: "A landing page for Products",
      image: "/images/projects/l.jfif",
    },
    {
      num: "13",
      category: "Lighting-Systems",
      title: "Light Controllers",
      description: "A landing page for Products",
      image: "/images/projects/LightControllers.webp",
    },

    //Fog Machine
    {
      num: "14",
      category: "Fog-Machines",
      title: " Fog Machine Simple Products",
      description: "A Products description",
      image: "/images/projects/Fog-Machines.webp",
    },

    //Professional-Sound-Systems
    {
      num: "15",
      category: "Professional-Sound-Systems",
      image: "/images/projects/ProfessionalSpeakers.png",
      title: "Amplifiers",
      description: "A Products description",
    },
    {
      num: "16",
      category: "Professional-Sound-Systems",
      title: "Wireless System",
      description: "A Products description",
      image: "/images/projects/wireless.webp",
    },
    {
      num: "17",
      category: "Professional-Sound-Systems",
      title: "Wireless  Lectern",
      description: "A Products description",
      image: "/images/projects/WirelessLecturn.jpg",
    },
    {
      num: "18",
      category: "Professional-Sound-Systems",
      title: "Portable P.A. System",
      description: "A Products description",
      image: "/images/projects/PortableSystem.jpg",
    },
    {
      num: "19",
      category: "Professional-Sound-Systems",
      title: "Audio Mixers",
      description: "A Products description",
      image: "/images/projects/mixers.jpeg",
    },
    {
      num: "24",
      category: "Professional-Sound-Systems",
      title: "Microphone Mixers",
      description: "A landing page for Products",
      image: "/images/projects/micro.jpg",
    },
    {
      num: "25",
      category: "Professional-Sound-Systems",
      title: "Wireless System",
      description: "A landing page for Products",
      image: "/images/projects/wires.jpg",
    },
    //new item
    {
      num: "20",
      category: "Specialized-Speakers",
      title: "Wall Speaker",
      description: "A landing page for Products",
      image: "/images/projects/wall.jpg",
    },

    {
      num: "21",
      category: "Led-Wall",
      title: "LED WALL",
      description: "A landing page for Products",
      image: "/images/projects/ledwall.jpg",
    },
    {
      num: "22",
      category: "Smart-Interactive-Tv",
      title: "Smart Interactive Tv",
      description: "A landing page for Products",
      image: "/images/projects/smarttv.jpg",
    },

    {
      num: "23",
      category: "Fire-Alarm-System",
      title: "Fire Alarm System",
      description: "A landing page for Products",
      image: "/images/projects/fire.jpeg",
    },

    {
      num: "24",
      category: "Window-Intercoms-System",
      title: "Window Intercoms System",
      description: "A landing page for Products",
      image: "/images/projects/win2.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const filteredProducts: Project[] = selectedCategory
    ? projectList.filter((product) => product.category === selectedCategory)
    : projectList;

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <PageTemplate title="Project - AUDIO 4">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="PROJECTS"
              title="We have  many amazing Products for your needs"
            />
          </div>
        </aside>
        <aside className="w-full min-w-[375px] md:w-fit  " data-aos="fade-left">
          <Select
            onChange={handleCategoryChange}
            options={[
              { label: "Conference Room", value: "Conference-Systems" },
              { label: "Specialized Speakers", value: "Specialized-Speakers" },
              {
                label: "System Amplifiers",
                value: "Paging-System-Amplifiers",
              },
              {
                label: "Professional Sound Systems",
                value: "Professional-Sound-Systems",
              },
              {
                label: "Fog Machines",
                value: "Fog-Machines",
              },
              {
                label: "Lighting Systems",
                value: "Lighting-Systems",
              },
              {
                label: "Intercom Systems",
                value: "Intercom-Systems",
              },
              {
                label: "Speech Laboratory",
                value: "Speech-Laboratory",
              },
              {
                label: "Cctv",
                value: "Surveillance-Cameras",
              },
              {
                label: "Telephone & PABX Systems",
                value: "Telephone-PABX-Systems",
              },
              {
                label: " Projection Systems",
                value: "Video-Projection-Systems",
              },
              {
                label: "Radio Systems",
                value: "Radio-Systems",
              },
              {
                label: "Equipment Racks",
                value: "Equipment-Racks-Cases",
              },

              {
                label: "Led Wall",
                value: "Led-Wall",
              },
              {
                label: "Smart Interactive Tv",
                value: "Smart-Interactive-Tv",
              },
              {
                label: "Fire Alarm System",
                value: "Fire-Alarm-System",
              },
              {
                label: "Window Intercoms System",
                value: "Window-Intercoms-System",
              },
            ]}
          />
        </aside>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-12 mt-64 sm:grid-cols-2 sm:gap-x-5">
          {filteredProducts.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  num={project.num}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </div>
            );
          })}
        </div>
      </section>
    </PageTemplate>
  );
};

export default Project;
