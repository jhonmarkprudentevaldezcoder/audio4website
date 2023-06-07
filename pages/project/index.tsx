import Button from 'components/atoms/Button';
import Select from 'components/atoms/Form/Select';
import LineDivider from 'components/atoms/LineDivider';
import PageSentence from 'components/molecules/PageSentence';
import ProjectCard from 'components/molecules/Card/ProjectCard';
import PageTemplate from 'components/templates/PageTemplate';
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

import randomString from 'utils/randomString';

const Project = () => {
  interface Project {
    category: string;
    title: string;
    description: string;
    image: string;
  }
  const projectList: Project[] = [
    //Conference Systems
    {
      category: 'Conference-Systems',
      title: 'Conference Systems',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },
    //Equipment Racks/Cases
    {
      category: 'Equipment-Racks-Cases',
      title: 'Equipment Racks/Cases',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },
    //Radio Systems
    {
      category: 'Radio-Systems',
      title: 'Radio Systems',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },
    //Video Projection system
    {
      category: 'Video-Projection-Systems',
      title: 'Video Projection system',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },
    //Telephone & PABX Systems
    {
      category: 'Telephone-PABX-Systems',
      title: 'Telephone & PABX Systems',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },
    //Surveillance Cameras
    {
      category: 'Surveillance-Cameras',
      title: 'Surveillance Cameras',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },
    //Speech Laboratory Systems
    {
      category: 'Speech-Laboratory',
      title: 'Speech Laboratory Systems',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },

    //Intercom-Systems
    {
      category: 'Intercom-Systems',
      title: 'Intercom Systems',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },

    //Paging Power Amplifiers
    {
      category: 'Paging-Power-Amplifiers',
      title: 'Paging Power Amplifiers',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },

    //Specialize Speakers
    {
      category: 'Specialize-Speakers',
      title: 'Weatherproof Speakers',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },
    {
      category: 'Specialize-Speakers',
      title: 'Ceiling Speakers',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },

    //Lighting-Systems
    {
      category: 'Lighting-Systems',
      title: 'Lights',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },
    {
      category: 'Lighting-Systems',
      title: 'Light Controllers',
      description: 'A landing page for Products',
      image: '/images/projects/fogmachine.jpg',
    },

    //Fog Machine
    {
      category: 'Fog-Machines',
      title: ' Fog Machine Simple Products',
      description: 'A Products description',
      image: '/images/projects/fogmachine.jpg',
    },

    //Professional-Sound-Systems
    {
      category: 'Professional-Sound-Systems',
      image: '/images/projects/fogmachine.jpg',
      title: 'Amplifiers',
      description: 'A Products description',
    },
    {
      category: 'Professional-Sound-Systems',
      title: 'Wireless System',
      description: 'A Products description',
      image: '/images/projects/fogmachine.jpg',
    },
    {
      category: 'Professional-Sound-Systems',
      title: 'Wireless Podium / Lecturn',
      description: 'A Products description',
      image: '/images/projects/fogmachine.jpg',
    },
    {
      category: 'Professional-Sound-Systems',
      title: 'Portable P.A. System',
      description: 'A Products description',
      image: '/images/projects/fogmachine.jpg',
    },
    {
      category: 'Professional-Sound-Systems',
      title: 'Mixers',
      description: 'A Products description',
      image: '/images/projects/fogmachine.jpg',
    },
    {
      category: 'Professional-Sound-Systems',
      title: 'CD Player',
      description: 'A Products description',
      image: '/images/projects/fogmachine.jpg',
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string>('');
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
              { label: 'Conference Systems', value: 'Conference-Systems' },
              { label: 'Specialize Speakers', value: 'Specialize-Speakers' },
              {
                label: 'Paging Power Amplifiers',
                value: 'Paging-Power-Amplifiers',
              },
              {
                label: 'Professional Sound Systems',
                value: 'Professional-Sound-Systems',
              },
              {
                label: 'Fog Machines',
                value: 'Fog-Machines',
              },
              {
                label: 'Lighting Systems',
                value: 'Lighting-Systems',
              },
              {
                label: 'Intercom Systems',
                value: 'Intercom-Systems',
              },
              {
                label: 'Speech Laboratory',
                value: 'Speech-Laboratory',
              },
              {
                label: 'Surveillance Cameras',
                value: 'Surveillance-Cameras',
              },
              {
                label: 'Telephone & PABX Systems',
                value: 'Telephone-PABX-Systems',
              },
              {
                label: 'Video Projection Systems',
                value: 'Video-Projection-Systems',
              },
              {
                label: 'Radio Systems',
                value: 'Radio-Systems',
              },
              {
                label: 'Equipment Racks/Cases',
                value: 'Equipment-Racks-Cases',
              },
            ]}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-16 mt-64 sm:grid-cols-2 sm:gap-x-5">
          {filteredProducts.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </div>
            );
          })}
        </div>
        <Button value="Load More" color="white" style="light" />
      </section>
    </PageTemplate>
  );
};

export default Project;
