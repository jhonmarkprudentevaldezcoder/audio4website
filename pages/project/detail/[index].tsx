import LazyCard from "components/atoms/LazyCard";
import LineDivider from "components/atoms/LineDivider";
import Text from "components/atoms/Text";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const ProjectDetail = () => {
  const router = useRouter();
  const { index } = router.query;

  interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    imageb: string;
    imagec: string;
  }
  const projectList: Project[] = [
    //Conference Systems
    {
      id: "1",
      category: "Conference-Systems",
      title: "Conference Room",
      description: "A landing page for Products",
      image: "/images/projects/conference.jpg",
      imageb: "/images/projects/confii 3.jpg",
      imagec: "/images/projects/confii 2.jpg",
    },
    //Equipment Racks/Cases
    {
      id: "2",
      category: "Equipment-Racks-Cases",
      title: "Equipment Racks/Cases",
      description: "A landing page for Products",
      image: "/images/projects/ERS 3.jpg",
      imageb: "/images/projects/ERS 4.jpg",
      imagec: "/images/projects/ERS 2.jpg",
    },
    //Radio Systems
    {
      id: "3",
      category: "Radio-Systems",
      title: "Radio Systems",
      description: "A landing page for Products",
      image: "/images/projects/RS4.jpg",
      imageb: "/images/projects/RS2.jpg",
      imagec: "/images/projects/RS3.jpg",
    },
    //Video Projection system
    {
      id: "4",
      category: "Video-Projection-Systems",
      title: "Video Projection system",
      description: "A landing page for Products",
      image: "/images/projects/Projection.jfif",
      imageb: "/images/projects/VPS1.jpg",
      imagec: "/images/projects/VPS3.JPG",
    },
    //Telephone & PABX Systems
    {
      id: "5",
      category: "Telephone-PABX-Systems",
      title: "Telephone & PABX Systems",
      description: "A landing page for Products",
      image: "/images/projects/Telephone.jpg",
      imageb: "/images/projects/PBX1.jpg",
      imagec: "/images/projects/PBX2.jpg",
    },
    //Surveillance Cameras
    {
      id: "6",
      category: "Surveillance-Cameras",
      title: "Surveillance Cameras",
      description: "A landing page for Products",
      image: "/images/projects/Surveillance.jpg",
      imageb: "/images/projects/cam1.jpg",
      imagec: "/images/projects/cam2.jpg",
    },
    //Speech Laboratory Systems
    {
      id: "7",
      category: "Speech-Laboratory",
      title: "Speech Laboratory Systems",
      description: "A landing page for Products",
      image: "/images/projects/Laboratory.jpg",
      imageb: "/images/projects/SLB3.jpg",
      imagec: "/images/projects/SLB2.jpg",
    },

    //Intercom-Systems
    {
      id: "8",
      category: "Intercom-Systems",
      title: "Intercom Systems",
      description: "A landing page for Products",
      image: "/images/projects/ICS1.jpg",
      imageb: "/images/projects/ICS4.jpg",
      imagec: "/images/projects/ICS3.jpg",
    },

    //Paging Power Amplifiers
    {
      id: "9",
      category: "Paging-System-Amplifiers",
      title: "Paging System ",
      description: "A landing page for Products",
      image: "/images/projects/TOA 1.jpg",
      imageb: "/images/projects/TOA 2.jpg",
      imagec: "/images/projects/TOA 3.jpg",
    },

    //Specialize Speakers
    {
      id: "10",
      category: "Specialized-Speakers",
      title: "WaterProof Speakers",
      description: "A landing page for Products",
      image: "/images/projects/WS6.jpg",
      imageb: "/images/projects/WS4.jpg",
      imagec: "/images/projects/WS5.jpg",
    },
    {
      id: "11",
      category: "Specialized-Speakers",
      title: "Ceiling Speakers",
      description: "A landing page for Products",
      image: "/images/projects/Ceiling.jpg",
      imageb: "/images/projects/CS1.jpg",
      imagec: "/images/projects/CS2.jpg",
    },

    //Lighting-Systems
    {
      id: "12",
      category: "Lighting-Systems",
      title: "Lights",
      description: "A landing page for Products",
      image: "/images/projects/PAR 2.jpg",
      imageb: "/images/projects/PAR3.jpg",
      imagec: "/images/projects/PAR4.jpg",
    },
    {
      id: "13",
      category: "Lighting-Systems",
      title: "Light Controllers",
      description: "A landing page for Products",
      image: "/images/projects/LG5.JPG",
      imageb: "/images/projects/LG3.jpg",
      imagec: "/images/projects/LG4.jpg",
    },

    //Fog Machine
    {
      id: "14",
      category: "Fog-Machines",
      title: " Fog Machine Simple Products",
      description: "A Products description",
      image: "/images/projects/FOG4.JPG",
      imageb: "/images/projects/FOG5.jpg",
      imagec: "/images/projects/FOG6.jpg",
    },

    //Professional-Sound-Systems
    {
      id: "15",
      category: "Professional-Sound-Systems",
      image: "/images/projects/AMP2.JPG",
      title: "Amplifiers",
      description: "A Products description",
      imageb: "/images/projects/AMP3.jpg",
      imagec: "/images/projects/AMP4.jpg",
    },
    {
      id: "16",
      category: "Professional-Sound-Systems",
      title: "Wireless System",
      description: "A Products description",
      image: "/images/projects/WR1.JPG",
      imageb: "/images/projects/WR2.jpg",
      imagec: "/images/projects/WR3.jpg",
    },
    {
      id: "17",
      category: "Professional-Sound-Systems",
      title: "Wireless Lectern",
      description: "A Products description",
      image: "/images/projects/WL4.jpg",
      imageb: "/images/projects/WL5.jpg",
      imagec: "/images/projects/WL7.jpg",
    },
    {
      id: "18",
      category: "Professional-Sound-Systems",
      title: "Portable P.A. System",
      description: "A Products description",
      image: "/images/projects/PS1.jpg",
      imageb: "/images/projects/PS2.jpg",
      imagec: "/images/projects/PS3.jpg",
    },
    {
      id: "19",
      category: "Professional-Sound-Systems",
      title: "Audio Mixers",
      description: "A Products description",
      image: "/images/projects/AD1.jpg",
      imageb: "/images/projects/AD2.jpg",
      imagec: "/images/projects/AD3.jpg",
    },

    //new item
    {
      id: "20",
      category: "Specialized-Speakers",
      title: "Wall Speaker",
      description: "A landing page for Products",
      image: "/images/projects/wall.jpg",
      imageb: "/images/projects/WALL1.jpg",
      imagec: "/images/projects/WALL2.jpg",
    },

    {
      id: "21",
      category: "Led-Wall",
      title: "LED WALL",
      description: "A landing page for Products",
      image: "/images/projects/LED2.jpg",
      imageb: "/images/projects/LED3.jpg",
      imagec: "/images/projects/LED5.jpg",
    },
    {
      id: "22",
      category: "Smart-Interactive-Tv",
      title: "Smart Interactive Tv",
      description: "A landing page for Products",
      image: "/images/projects/SM5.png",
      imageb: "/images/projects/SM3.jpg",
      imagec: "/images/projects/SM4.avif",
    },

    {
      id: "23",
      category: "Fire-Alarm-System",
      title: "Fire Alarm System",
      description: "A landing page for Products",
      image: "/images/projects/FA1.jpg",
      imageb: "/images/projects/FA2.png",
      imagec: "/images/projects/FA3.jpg",
    },

    {
      id: "24",
      category: "Window-Intercoms-System",
      title: "Window Intercom System",
      description: "A landing page for Products",
      image: "/images/projects/IN1.jpg",
      imageb: "/images/projects/IN2.png",
      imagec: "/images/projects/IN3.jpg",
    },
    
    {
      id: "25",
      category: "Professional-Sound-Systems",
      title: "Micro Mixer",
      description: "A Products description",
      image: "/images/projects/MC1.jpg",
      imageb: "/images/projects/MC2.jpg",
      imagec: "/images/projects/MC3.jpg",
    },
  ];

  const filteredProducts = projectList.filter(
    (product) => product.id === `${index}`
  );
  return (
    <PageTemplate title="Project Detail - AUDIO 4">
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Products Landing Page"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProducts.map((product) => (
          <>
            <aside data-aos="fade-up-right">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
              />
            </aside>
            <aside data-aos="fade-up-right">
              <Image
                src={product.imageb}
                alt={product.title}
                width={300}
                height={300}
              />
            </aside>
            <aside data-aos="fade-up-right">
              <Image
                src={product.imagec}
                alt={product.title}
                width={300}
                height={300}
              />
            </aside>
            <aside
              className="grid gap-12 place-content-center"
              data-aos="fade-up-left"
            >
              <Text
                textStyle="SectionParagraph"
                value={`${product.description}`}
              />
              <div className="grid gap-6">
              

                <div className="grid gap-2">
                  <Text value="PROJECT NAME" textStyle="ProjectDetailLabel" />
                  <Text
                    value={`${product.title}`}
                    textStyle="ProjectDetailValue"
                  />
                </div>
              </div>
            </aside>
          </>
        ))}
      </section>
      <LineDivider />
      <section className="grid gap-16 place-items-center">
        <div
          className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Product Landing Page"
          />
        </div>
      </section>
    </PageTemplate>
  );
};

export default ProjectDetail;
