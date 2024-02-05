import React from "react";

function ContactForm() {
  return (
    <>
      <div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 my-[80px] xl:mx-[90px]    ">
          <div className=" md:mx-[160px] xs:mx-[30px] xxs:mx-[20px] mx-[10px]">
            <form>
              <h1
                className="xl:text-4xl lg:text-4xl md:text-4xl xs:text-3xl xxs:text-2xl
              text-2xl font-bold"
              >
                Contact Us
              </h1>
              <div className="my-6">
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="p-2 border border-slate-900 xl:w-[500px] lg:w-[400px] md:w-[400px]
                  xs:w-[350px] xxs:w-[330px] w-[290px] rounded-full "
                />
              </div>
              <div className="my-6">
                <input
                  type="Email"
                  name="Email"
                  placeholder="Email"
                  className="p-2 border border-slate-900 xl:w-[500px]  lg:w-[400px] md:w-[400px]
                  xs:w-[350px] xxs:w-[330px]  w-[290px] rounded-full"
                />
              </div>
              <div className="my-6">
                <input
                  type="Message"
                  name="Message"
                  placeholder=" message "
                  className="p-2 border border-slate-900 xl:w-[500px]  lg:w-[400px] md:w-[400px]
                  xs:w-[350px] xxs:w-[330px]  w-[290px] rounded-2xl"
                />
              </div>

              <button
                className="rounded-full xl:w-[500px]  lg:w-[400px] lg:h-[40px] md:w-[400px] 
              xs:w-[350px] xs:h-[25px] xxs:w-[330px] xxs:h-[25px]  w-[290px] h-[20px] md:h-[30px] xl:h-[40px] bg-black text-white xl:text-xl lg:text-xl"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <img
              src="/assets/contact.png"
              className="xl:h-[600px] xl:w-[600px] lg:size-[400px] md:hidden xs:hidden xxs:hidden hidden xl:block lg:block
              lg:mx-[100px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
