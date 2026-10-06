import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen pb-24 pt-40 md:pt-52">
      <div className="site-container">

        {/* ================= HEADER ================= */}
        <section className="grid gap-14 md:grid-cols-[1.15fr_0.85fr]">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-[#b08d57]"
            >
              04 / Contact
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.06em]"
            >
              Let's make
              <br />

              <span className="italic text-[#b08d57]">
                something.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex max-w-lg items-end md:pb-3"
          >
            <p className="text-lg leading-8 text-[#766b5d]">
              Have a project in mind, need a website,
              or simply want to say hello? I'd love to
              hear from you.
            </p>
          </motion.div>

        </section>


        {/* ================= CONTACT GRID ================= */}
        <section className="mt-24 grid gap-px overflow-hidden border border-[#211c18]/10 bg-[#211c18]/10 md:mt-32 md:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:hunjan76@gmail.com"
            className="group bg-[#f4f0e8] p-8 transition-all duration-300 hover:bg-[#211c18] hover:text-white md:p-10"
          >
            <Mail
              size={28}
              strokeWidth={1.2}
              className="text-[#b08d57]"
            />

            <p className="mt-16 text-xs uppercase tracking-[0.25em] opacity-60">
              Email
            </p>

            <p className="mt-3 break-all text-lg">
              hunjan76@gmail.com
            </p>

            <ArrowUpRight
              size={20}
              className="mt-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>


          {/* Phone */}
          <a
            href="tel:+918699505787"
            className="group bg-[#f4f0e8] p-8 transition-all duration-300 hover:bg-[#211c18] hover:text-white md:p-10"
          >
            <Phone
              size={28}
              strokeWidth={1.2}
              className="text-[#b08d57]"
            />

            <p className="mt-16 text-xs uppercase tracking-[0.25em] opacity-60">
              Phone
            </p>

            <p className="mt-3 text-lg">
              +91-86995-05787
            </p>

            <ArrowUpRight
              size={20}
              className="mt-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>


          {/* Location */}
          <div className="bg-[#f4f0e8] p-8 md:p-10">

            <MapPin
              size={28}
              strokeWidth={1.2}
              className="text-[#b08d57]"
            />

            <p className="mt-16 text-xs uppercase tracking-[0.25em] opacity-60">
              Based in
            </p>

            <p className="mt-3 text-lg">
              Ludhiana, India
            </p>

          </div>

        </section>


        {/* ================= FORM ================= */}
        <section className="mt-28 border-t border-[#211c18]/10 pt-16 md:mt-40 md:pt-20">

          <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">

            {/* Left */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                Start a conversation
              </p>

              <h2 className="mt-6 text-4xl tracking-[-0.04em] md:text-5xl">
                Tell me about
                <br />

                <span className="italic text-[#b08d57]">
                  your project.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#766b5d]">
                Fill out the form and share a few details
                about what you're looking to build.
              </p>
            </div>


            {/* Form */}
            <form className="space-y-10">

              {/* Name */}
              <div className="group border-b border-[#211c18]/20 pb-3">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.2em] text-[#766b5d]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="mt-4 w-full bg-transparent text-lg outline-none placeholder:text-[#211c18]/30"
                />
              </div>


              {/* Email */}
              <div className="group border-b border-[#211c18]/20 pb-3">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] text-[#766b5d]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="mt-4 w-full bg-transparent text-lg outline-none placeholder:text-[#211c18]/30"
                />
              </div>


              {/* Project Type */}
              <div className="group border-b border-[#211c18]/20 pb-3">
                <label
                  htmlFor="project"
                  className="block text-xs uppercase tracking-[0.2em] text-[#766b5d]"
                >
                  Project Type
                </label>

                <select
                  id="project"
                  defaultValue=""
                  className="mt-4 w-full bg-transparent text-lg outline-none"
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  <option value="website">
                    Website
                  </option>

                  <option value="ecommerce">
                    E-commerce
                  </option>

                  <option value="web-app">
                    Web Application
                  </option>

                  <option value="other">
                    Something else
                  </option>
                </select>
              </div>


              {/* Message */}
              <div className="group border-b border-[#211c18]/20 pb-3">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.2em] text-[#766b5d]"
                >
                  Tell me more
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="mt-4 w-full resize-none bg-transparent text-lg outline-none placeholder:text-[#211c18]/30"
                />
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="group flex items-center gap-3 rounded-full bg-[#211c18] px-8 py-4 text-sm text-white transition-all duration-300 hover:bg-[#b08d57]"
              >
                Send Message

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

            </form>

          </div>

        </section>


        {/* ================= BOTTOM ================= */}
        <section className="mt-32 border-t border-[#211c18]/10 pt-10 md:mt-48">

          <div className="flex flex-col justify-between gap-6 text-sm text-[#766b5d] md:flex-row">

            <p>
              © {new Date().getFullYear()} PARDEEP.
            </p>

            <div className="flex gap-6">

              <a
                href="#"
                className="transition-colors hover:text-[#b08d57]"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#b08d57]"
              >
                GitHub
              </a>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Contact;