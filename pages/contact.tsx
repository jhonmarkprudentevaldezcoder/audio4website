import IconListItem from "components/molecules/IconListItem";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { MdLocationCity } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "components/molecules/Toast";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Contact = () => {
  const router = useRouter();

  const [state, handleSubmit, reset] = useForm("xjvdnnog");

  useEffect(() => {
    if (state.succeeded) {
      showToast("message sent!");
      router.replace(router.asPath);
    }
  }, [state.succeeded, reset]);
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
                  <label htmlFor="name" className="text-white">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <label htmlFor="email" className="text-white text-sm">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <label htmlFor="message" className="text-white text-sm">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
