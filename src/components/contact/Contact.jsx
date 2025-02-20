import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT YOUR QUERY" des="contact with me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};

export default Contact;
