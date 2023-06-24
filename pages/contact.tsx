import IconListItem from "components/molecules/IconListItem";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { MdLocationCity } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "components/molecules/Toast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InputGroup from "components/molecules/FormGroup/InputGroup";
import TextArea from "components/atoms/Form/Textarea";
import Button from "components/atoms/Button";

const Contact = () => {
  const router = useRouter();
  const [state, handleSubmit] = useForm("xjvdnnog");

  useEffect(() => {
    if (state.succeeded) {
      router.replace(router.asPath);
      return showToast("message sent!");
    }
  }, [state.succeeded]);
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
                value="8812-2538 / 8830-0760"
                icon={<FiPhoneCall />}
              />
              <IconListItem
                label="Email"
                value="bencuales@audio4design.com <br/> a4dnt@yahoo.com"
                icon={<FiMail />}
              />

              <IconListItem
                label="Address"
                value="2nd Flr., Unit 209 Cityland Pasong Tamo,
                #6264 Calle Estacion, Pio Del Pilar Makati City 1200"
                icon={<MdLocationCity />}
              />
            </div>
          </aside>
          <aside
            className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end"
            data-aos="fade-down-left"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 p-6 md:p-9 bg-light rounded-md lg:w-20/12 ">
                <div className="grid grid-cols-2 gap-2">
                  <InputGroup
                    label="Name"
                    name="name"
                    id="name"
                    required
                    placeholder="NAME"
                  />

                  <InputGroup
                    label="Email"
                    name="email"
                    id="email"
                    required
                    placeholder="EMAIL"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <TextArea
                  id="message"
                  rows={10}
                  name="message"
                  placeholder="message"
                  required
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <Button value="send message" />
              </div>
            </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  );
};

export default Contact;
