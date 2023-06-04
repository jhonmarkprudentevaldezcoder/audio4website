import Button from 'components/atoms/Button';
import Select from 'components/atoms/Form/Select';
import LineDivider from 'components/atoms/LineDivider';
import PageSentence from 'components/molecules/PageSentence';
import ProjectCard from 'components/molecules/Card/ProjectCard';
import PageTemplate from 'components/templates/PageTemplate';
import React from 'react';
import randomString from 'utils/randomString';

const Project = () => {
  interface Project {
    title: string;
    description: string;
  }
  const projectList: Project[] = [
    {
      title: 'Products Landing Page',
      description: 'A landing page for Products',
    },
    {
      title: 'Products Landing Page',
      description: 'A landing page for Products',
    },
    {
      title: 'Simple Products',
      description: 'A Products description',
    },
    {
      title: 'Products name',
      description: 'A Products description',
    },
  ];
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
                value: 'Equipment-Racks/Cases',
              },
            ]}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-16 mt-64 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
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
