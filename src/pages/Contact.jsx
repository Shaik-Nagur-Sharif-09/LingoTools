import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1uhf9lb",
        "template_8n927ac",
        form.current,
        "coAT9fYdvqP3vfPdK"
      )
      .then(() => {
      alert(
  "Thank you! Your message has been sent successfully."
);  
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to Send Message");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-6 py-12">
      
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* Left Side */}
          <div className="p-10 bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 border-r border-white/10">

            <h1 className="text-5xl font-bold text-white mb-4">
              Let's Connect
            </h1>

            <p className="text-slate-300 leading-relaxed mb-8">
              Have a project idea, internship opportunity, freelance work,
              or simply want to connect? Send a message and I'll get back
              to you as soon as possible.
            </p>

            <div className="space-y-4">

              <div className="bg-white/5 p-4 rounded-xl">
                <h3 className="text-white font-semibold">
                  Email Support
                </h3>

                <p className="text-slate-400 text-sm">
                  Direct responses via email.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl">
                <h3 className="text-white font-semibold">
                  Quick Response
                </h3>

                <p className="text-slate-400 text-sm">
                  Usually within 24 hours.
                </p>
              </div>

            </div>

            <a
              href="https://wa.me/916300571350"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                mt-8
                bg-green-600
                hover:bg-green-700
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              💬 Chat on WhatsApp
            </a>

          </div>

          {/* Right Side Form */}
          <div className="p-10">

            <h2 className="text-3xl font-bold text-white mb-6">
              Send Message
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="
                  w-full
                  bg-slate-800/70
                  text-white
                  p-4
                  rounded-xl
                  border
                  border-slate-700
                  focus:border-cyan-400
                  outline-none
                "
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="
                  w-full
                  bg-slate-800/70
                  text-white
                  p-4
                  rounded-xl
                  border
                  border-slate-700
                  focus:border-cyan-400
                  outline-none
                "
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="
                  w-full
                  bg-slate-800/70
                  text-white
                  p-4
                  rounded-xl
                  border
                  border-slate-700
                  focus:border-cyan-400
                  outline-none
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                className="
                  w-full
                  bg-slate-800/70
                  text-white
                  p-4
                  rounded-xl
                  border
                  border-slate-700
                  focus:border-cyan-400
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-gradient-to-r
                  from-indigo-600
                  to-cyan-500
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                "
              >
                🚀 Send Message
              </button>
            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;