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
  }
  const projectList: Project[] = [
    //Conference Systems
    {
      id: "1",
      category: "Conference-Systems",
      title: "Conference Systems",
      description: "A landing page for Products",
      image: "/images/projects/conference.jpg",
    },
    //Equipment Racks/Cases
    {
      id: "2",
      category: "Equipment-Racks-Cases",
      title: "Equipment Racks/Cases",
      description: "A landing page for Products",
      image: "/images/projects/Cases.jpeg",
    },
    //Radio Systems
    {
      id: "3",
      category: "Radio-Systems",
      title: "Radio Systems",
      description: "A landing page for Products",
      image: "/images/projects/RadioSystem.jfif",
    },
    //Video Projection system
    {
      id: "4",
      category: "Video-Projection-Systems",
      title: "Video Projection system",
      description: "A landing page for Products",
      image: "/images/projects/Projection.jfif",
    },
    //Telephone & PABX Systems
    {
      id: "5",
      category: "Telephone-PABX-Systems",
      title: "Telephone & PABX Systems",
      description: "A landing page for Products",
      image: "/images/projects/Telephone.jpg",
    },
    //Surveillance Cameras
    {
      id: "6",
      category: "Surveillance-Cameras",
      title: "Surveillance Cameras",
      description: "A landing page for Products",
      image: "/images/projects/Surveillance.jpg",
    },
    //Speech Laboratory Systems
    {
      id: "7",
      category: "Speech-Laboratory",
      title: "Speech Laboratory Systems",
      description: "A landing page for Products",
      image: "/images/projects/Laboratory.jpg",
    },

    //Intercom-Systems
    {
      id: "8",
      category: "Intercom-Systems",
      title: "Intercom Systems",
      description: "A landing page for Products",
      image: "/images/projects/Intercom.jpg",
    },

    //Paging Power Amplifiers
    {
      id: "9",
      category: "Paging-System-Amplifiers",
      title: "Paging System Amplifiers",
      description: "A landing page for Products",
      image: "/images/projects/Amplifiers.jpg",
    },

    //Specialize Speakers
    {
      id: "10",
      category: "Specialized-Speakers",
      title: "Weatherproof Speakers",
      description: "A landing page for Products",
      image: "/images/projects/Weatherproof.jfif",
    },
    {
      id: "11",
      category: "Specialized-Speakers",
      title: "Ceiling Speakers",
      description: "A landing page for Products",
      image: "/images/projects/Ceiling.jpg",
    },

    //Lighting-Systems
    {
      id: "12",
      category: "Lighting-Systems",
      title: "Lights",
      description: "A landing page for Products",
      image: "/images/projects/Lighting.jpg",
    },
    {
      id: "13",
      category: "Lighting-Systems",
      title: "Light Controllers",
      description: "A landing page for Products",
      image: "/images/projects/LightControllers.webp",
    },

    //Fog Machine
    {
      id: "14",
      category: "Fog-Machines",
      title: " Fog Machine Simple Products",
      description: "A Products description",
      image: "/images/projects/Fog-Machines.webp",
    },

    //Professional-Sound-Systems
    {
      id: "15",
      category: "Professional-Sound-Systems",
      image: "/images/projects/ProfessionalSpeakers.png",
      title: "Amplifiers",
      description: "A Products description",
    },
    {
      id: "16",
      category: "Professional-Sound-Systems",
      title: "Wireless System",
      description: "A Products description",
      image: "/images/projects/wireless.webp",
    },
    {
      id: "17",
      category: "Professional-Sound-Systems",
      title: "Wireless Podium / Lecturn",
      description: "A Products description",
      image: "/images/projects/WirelessLecturn.jpg",
    },
    {
      id: "18",
      category: "Professional-Sound-Systems",
      title: "Portable P.A. System",
      description: "A Products description",
      image: "/images/projects/PortableSystem.jpg",
    },
    {
      id: "19",
      category: "Professional-Sound-Systems",
      title: "Mixers",
      description: "A Products description",
      image: "/images/projects/mixers.jpeg",
    },
    {
      id: "20",
      category: "Professional-Sound-Systems",
      title: "CD Player",
      description: "A Products description",
      image: "/images/projects/CdPlayer.jpg",
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
        
        <Image src={product.image} alt={product.title} width={300} height={300} />
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
                <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
                <Text value={`${product.category}`} textStyle="ProjectDetailValue" />
              </div>

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
