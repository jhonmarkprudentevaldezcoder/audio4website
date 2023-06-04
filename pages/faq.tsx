import LineDivider from 'components/atoms/LineDivider';
import FaqTabbar from 'components/molecules/FaqTabbar';
import PageSentence from 'components/molecules/PageSentence';
import FaqList from 'components/organisms/FaqList';
import PageTemplate from 'components/templates/PageTemplate';
import React, { useEffect, useState } from 'react';
import getRandomItemsFromArray from 'utils/getRandomItemsFromArray';

const Faq = () => {
  const faqs = [
    {
      title: `Our Manpower`,
      description: `The Company has a team of people passionate about their work & dedicated to excellence. It has engaged the services of capable and skillful manpower, expert engineers who underwent thorough sales & technical training focused on service and commitment.`,
    },
    {
      title: `Our Service`,
      description: `Audio 4 Design n Technology is engaged in providing its Clientele a technological expertise with a high quality service. It is your company and guide in improving your Audio Systems for it offers services from consultation/ inspection, demonstration to installation. The company extends its service to accompany you even after the completion of the project. It also includes the service to introduce to you the most appropriate and newest technology for your Systems.
      `,
    },
    {
      title: `Our Mission / Vision      `,
      description: `We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.`,
    },
  ];
  const [randomFaqs, setRandomFaqs] = useState([faqs, faqs, faqs, faqs]);
  const [activeFaq, setActiveFaq] = useState(faqs);
  useEffect(() => {
    const faqs = [
      {
        title: `Our Manpower`,
        description: `The Company has a team of people passionate about their work & dedicated to excellence. It has engaged the services of capable and skillful manpower, expert engineers who underwent thorough sales & technical training focused on service and commitment.`,
      },
      {
        title: `Our Service`,
        description: `Audio 4 Design n Technology is engaged in providing its Clientele a technological expertise with a high quality service. It is your company and guide in improving your Audio Systems for it offers services from consultation/ inspection, demonstration to installation. The company extends its service to accompany you even after the completion of the project. It also includes the service to introduce to you the most appropriate and newest technology for your Systems.
        `,
      },
      {
        title: `Our Mission / Vision      `,
        description: `We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.`,
      },
      /* {
        title: `Does it include servers and domains?`,
        description: `You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.`,
      },
      {
        title: `Will I get the source code?`,
        description: `When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this.`,
      },
      {
        title: `Is there a warranty?`,
        description: `1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.`,
      }, */
    ];
    setRandomFaqs([
      faqs,
      getRandomItemsFromArray(faqs, 5),
      getRandomItemsFromArray(faqs, 4),
      getRandomItemsFromArray(faqs, 3),
    ]);
  }, []);
  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div
          className="sm:w-10/12 md:8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="basis-12/12 md:basis-4/12" data-aos="fade-up">
          <FaqTabbar
            tabs={[
              {
                name: 'General',
                onClick: () => {
                  setActiveFaq(randomFaqs[0]);
                },
              },
              {
                name: 'Customers',
                onClick: () => {
                  setActiveFaq(randomFaqs[0]);
                },
              },
            ]}
          />
        </div>
        <div className="basis-12/12 md:basis-8/12">
          <FaqList faqs={activeFaq} />
        </div>
      </section>
      <LineDivider />
    </PageTemplate>
  );
};

export default Faq;
