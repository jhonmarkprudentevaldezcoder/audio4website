import Button from 'components/atoms/Button';
import InputGroup from 'components/molecules/FormGroup/InputGroup';
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup';
import IconListItem from 'components/molecules/IconListItem';
import PageSentence from 'components/molecules/PageSentence';
import PageTemplate from 'components/templates/PageTemplate';
import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { MdLocationCity } from 'react-icons/md';

const Contact = () => {
  return (
    <>
      <PageTemplate title="Contact - AUDIO 4">
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
          <aside
            className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start"
            data-aos="fade-up-right"
          >
            <div className="sm:text-center lg:text-left">
              <PageSentence
                title="We love receiving messages from you, we are waiting for it."
                badge="CONTACT"
              />
            </div>
            <div className="space-y-6">
              <IconListItem
                label="Phone"
                value="812-2538 / 830-0760"
                icon={<FiPhoneCall />}
              />
              <IconListItem
                label="Email"
                value="salesaudio4design.com"
                icon={<FiMail />}
              />
              <IconListItem
                label="Address"
                value="UG-15 Cityland Pasong Tamo,
                #6264 Calle Estacion,
                Brgy. Pio Del Pilar,
                Makati City, Philippines"
                icon={<MdLocationCity />}
              />
            </div>
          </aside>
          <aside
            className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end"
            data-aos="fade-down-left"
          >
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Name" />
                <InputGroup label="Email" />
              </div>
              <InputGroup label="Subject" />
              <TextAreaGroup label="Message" />
              <Button value="Send Message" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  );
};

export default Contact;
