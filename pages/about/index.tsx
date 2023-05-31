import LineDivider from 'components/atoms/LineDivider';
import TeamCard from 'components/molecules/Card/TeamCard';
import PageSentence from 'components/molecules/PageSentence';
import SectionSentence from 'components/molecules/SectionSentence';
import LogoList from 'components/organisms/LogoList';
import StatisticList from 'components/organisms/StatisticList';
import PageTemplate from 'components/templates/PageTemplate';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <PageTemplate title="About - AUDIO 4">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT"
            title="We are creative, smart and hardworking people"
            description={`Audio 4 Design n Technology is engaged in providing its Clientele a technological expertise with a high quality service. It is your company and guide in improving your Audio Systems for it offers services from consultation/ inspection, demonstration to installation. The company extends its service to accompany you even after the completion of the project. It also includes the service to introduce to you the most appropriate and newest technology for your Systems.`}
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  );
};

export default About;
