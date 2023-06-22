import Button from "components/atoms/Button";
import InputGroup from "components/molecules/FormGroup/InputGroup";
import TextAreaGroup from "components/molecules/FormGroup/TextAreaGroup";
import IconListItem from "components/molecules/IconListItem";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { MdLocationCity } from "react-icons/md";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface EmailData {
  to: string;
  subject: string;
  text: string;
}

const Contact: React.FC = () => {
  const [emailData, setEmailData] = useState<EmailData>({
    to: "",
    subject: "",
    text: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log("Email sent successfully.");
        setEmailData({
          to: "",
          subject: "",
          text: "",
        });
      } else {
        console.log("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };
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
