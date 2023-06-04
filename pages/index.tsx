import ButtonLink from 'components/atoms/Button/ButtonLink';
import LineDivider from 'components/atoms/LineDivider';
import FeatureCard from 'components/molecules/Card/FeatureCard';
import PageSentence from 'components/molecules/PageSentence'; /* 
import PricingCard from 'components/molecules/Card/PricingCard';
import ProjectCard from 'components/molecules/Card/ProjectCard'; */
import SectionSentence from 'components/molecules/SectionSentence';
import LogoList from 'components/organisms/LogoList'; /* 
import TestimonialList from 'components/organisms/TestimonialList'; */
import PageTemplate from 'components/templates/PageTemplate';
import Image from 'next/image';
import React from 'react';
import { FiFigma, FiCode, FiBox } from 'react-icons/fi';
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - AUDIO 4">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="A SOUND TECHNOLOGY COMPANY"
              description="Specializing in the DESIGN, ENGINEERING and INSTALLATION of professional audio, video & lighting equipment. Catering for professionals in the broadcasting, exhibition, conference center, learning institutes and entertainment industries."
              badge="AUDIO 4 DESIGN N TECHNOLOGY CORP."
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Send Quote" href="/quote" />
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>

        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Planing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Develop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={<FiBox />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Ship"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={<FiFigma />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="  If you have a requirement we have the technology!"
              paragraph="Everything is well planned, well designed and developed wholeheartedly!"
              badge="HOW WE WORK"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Testimonial */}
      </PageTemplate>
    </>
  );
};

export default Home;
