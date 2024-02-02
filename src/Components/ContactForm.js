import React from "react";

function ContactForm() {
  return (
    <>
      <div>
        <div className=" flex justify-between my-[80px] mx-[90px]">
          <div className="my-9">
            <form>
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <div className="my-6">
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="p-2 border border-slate-900 w-[500px] rounded-full "
                />
              </div>
              <div className="my-6">
                <input
                  type="Email"
                  name="Email"
                  placeholder="Email"
                  className="p-2 border border-slate-900 w-[500px] rounded-full"
                />
              </div>
              <div className="my-6">
                <input
                  type="Message"
                  name="Message"
                  placeholder=" message "
                  className="p-2 border border-slate-900 w-[500px] rounded-2xl"
                />
              </div>

              <button className="rounded-full w-[500px] h-[40px] bg-black text-white text-xl">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <img src="/assets/contact.png" className="h-[600px] w-[600px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
