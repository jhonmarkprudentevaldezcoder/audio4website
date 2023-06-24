import Button from "components/atoms/Button";
import ButtonLink from "components/atoms/Button/ButtonLink";
import InputGroup from "components/molecules/FormGroup/InputGroup";
import SelectGroup from "components/molecules/FormGroup/SelectGroup";
import TextAreaGroup from "components/molecules/FormGroup/TextAreaGroup";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, ValidationError } from "@formspree/react";
import { showToast } from "components/molecules/Toast";
const Quote = () => {
  const router = useRouter();
  const [state, handleSubmit] = useForm("mnqyeezn");

  useEffect(() => {
    if (state.succeeded) {
      router.replace(router.asPath);
      return showToast("message sent!");
    }
  }, [state.succeeded]);
  return (
    <>
      <PageTemplate title="Send Quote - AUDIO 4">
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside
            className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start"
            data-aos="fade-down-right"
          >
            <div className="text-center lg:text-left">
              <PageSentence
                title="Tell us about your problem and how we can help"
                description="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond."
                badge="SEND QUOTE"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Ask Us"
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end"
            data-aos="fade-up-left"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Name" name="name" />
                  <InputGroup label="Email" name="email" />
                </div>

                <TextAreaGroup
                  label="Tell Us Your Problem"
                  id="message"
                  name="message"
                />
                <Button value="Send Quote" />
              </div>
            </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  );
};

export default Quote;
