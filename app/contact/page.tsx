import React from "react";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <div className="flex md:flex-wrap h-screen justify-center items-center flex-col max-h-screen">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="flex-1 justify-center items-center">
            <ContactForm />
          </div>
        </div>
        <div className="mt-4 max-w-md text-center">
          <h1 className="text-6xl font-extrabold my-5 transition duration-500 hover:text-blue-600">
            hire me.
          </h1>
          <p className="md:text-xl text-center text-block m-4 md:m-9 md:p-14">
            Ready to collaborate? Let&apos;s chat about how I can bring my
            skills to your team or project
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
