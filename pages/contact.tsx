import Button from "components/atoms/Button";
import InputGroup from "components/molecules/FormGroup/InputGroup";
import TextAreaGroup from "components/molecules/FormGroup/TextAreaGroup";
import IconListItem from "components/molecules/IconListItem";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { MdLocationCity } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xjvdnnog");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
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
              <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
                <div className="grid grid-cols-2 gap-4">
                  <label htmlFor="name">NAME</label>
                  <input type="text" id="name" name="name" />

                  <label htmlFor="email">EMAIL</label>
                  <input id="email" name="email" type="email" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <textarea id="message" name="message" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                {/*  <Button value="Send Message" /> */}
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  );
};

export default Contact;
