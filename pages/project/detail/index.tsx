import LazyCard from 'components/atoms/LazyCard';
import LineDivider from 'components/atoms/LineDivider';
import Text from 'components/atoms/Text';
import PageSentence from 'components/molecules/PageSentence';
import PageTemplate from 'components/templates/PageTemplate';
import React from 'react';

const ProjectDetail = () => {
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
        <aside data-aos="fade-up-right">
          <LazyCard bottomSquareSize="big" height={400} />
        </aside>
        <aside
          className="grid gap-12 place-content-center"
          data-aos="fade-up-left"
        >
          <Text
            textStyle="SectionParagraph"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="PRODUCT CATEGORY" textStyle="ProjectDetailValue" />
            </div>
            {/*     <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="Acme, Inc" textStyle="ProjectDetailValue" />
            </div> */}
            <div className="grid gap-2">
              <Text value="DESCRIPTION" textStyle="ProjectDetailLabel" />
              <Text
                value="PRODUCT DESCRIPTION"
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside>
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
