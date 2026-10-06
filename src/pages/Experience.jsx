import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Palette,
} from "lucide-react";

const Experience = () => {
  return (
    <main className="min-h-screen pb-24 pt-40 md:pt-52">
      <div className="site-container">

        {/* ================= HEADER ================= */}
        <section className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b08d57]"
            >
              03 / Experience
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.06em]"
            >
              Years of
              <br />

              <span className="italic text-[#b08d57]">
                experience.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg md:pb-4"
          >
            <p className="text-lg leading-8 text-[#766b5d]">
              9+ years of building responsive websites,
              web applications and digital experiences across
              multiple industries.
            </p>
          </motion.div>

        </section>


        {/* ================= MAIN EXPERIENCE ================= */}
        <section className="mt-24 border-y border-[#211c18]/10 md:mt-32">

          <div className="grid md:grid-cols-12">

            {/* Date */}
            <div className="border-b border-[#211c18]/10 py-10 md:col-span-3 md:border-b-0 md:border-r md:py-14">
              <p className="text-xs uppercase tracking-[0.25em] text-[#766b5d]">
                Oct 2016
              </p>

              <p className="mt-2 text-sm text-[#b08d57]">
                Present
              </p>
            </div>


            {/* Role */}
            <div className="py-10 md:col-span-9 md:py-14 md:pl-12">

              <div className="flex flex-col justify-between gap-8 md:flex-row">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                    PunjabB2B
                  </p>

                  <h2 className="mt-4 text-3xl tracking-tight md:text-5xl">
                    Front End / Web Developer
                  </h2>

                  <p className="mt-3 text-sm text-[#766b5d]">
                    Ludhiana, Punjab
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#211c18]/15">
                  <BriefcaseBusiness
                    size={20}
                    strokeWidth={1.3}
                  />
                </div>

              </div>


              {/* Description */}
              <p className="mt-12 max-w-3xl text-base leading-8 text-[#766b5d] md:text-lg">
                As a Front End Developer, I am responsible for
                designing and building websites for clients using
                HTML, CSS, JavaScript and Adobe Photoshop.
              </p>


              {/* Responsibilities */}
              <div className="mt-14 border-t border-[#211c18]/10 pt-10">

                <p className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                  Responsibilities
                </p>

                <div className="mt-8 space-y-7">

                  {/* 01 */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <span className="text-xs text-[#b08d57]">
                      01
                    </span>

                    <p className="max-w-2xl text-sm leading-7 text-[#766b5d]">
                      Created responsive layouts using Bootstrap
                      3, 4 and 5 along with modern CSS techniques.
                    </p>
                  </motion.div>


                  {/* 02 */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <span className="text-xs text-[#b08d57]">
                      02
                    </span>

                    <p className="max-w-2xl text-sm leading-7 text-[#766b5d]">
                      Developed and customized e-commerce
                      websites using OpenCart 2.0, 3.0 and 4.0.
                    </p>
                  </motion.div>


                  {/* 03 */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <span className="text-xs text-[#b08d57]">
                      03
                    </span>

                    <p className="max-w-2xl text-sm leading-7 text-[#766b5d]">
                      Created PHP website forms and integrated
                      email functionality using PHPMailer.
                    </p>
                  </motion.div>


                  {/* 04 */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <span className="text-xs text-[#b08d57]">
                      04
                    </span>

                    <p className="max-w-2xl text-sm leading-7 text-[#766b5d]">
                      Developed and maintained CMS solutions
                      using PHPMaker and database-driven solutions.
                    </p>
                  </motion.div>


                  {/* 05 */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <span className="text-xs text-[#b08d57]">
                      05
                    </span>

                    <p className="max-w-2xl text-sm leading-7 text-[#766b5d]">
                      Created and optimized web graphics using
                      Photoshop, Canva and CorelDRAW.
                    </p>
                  </motion.div>


                  {/* 06 */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <span className="text-xs text-[#b08d57]">
                      06
                    </span>

                    <p className="max-w-2xl text-sm leading-7 text-[#766b5d]">
                      Collaborated with clients and project teams
                      to understand requirements and deliver
                      functional websites.
                    </p>
                  </motion.div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CAPABILITIES ================= */}
        <section className="mt-28 md:mt-40">

          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
              04 / Capabilities
            </p>

            <h2 className="mt-5 text-5xl tracking-[-0.04em] md:text-6xl">
              What I bring
              <br />
              <span className="italic text-[#b08d57]">
                to projects.
              </span>
            </h2>
          </div>


          <div className="grid gap-px overflow-hidden border border-[#211c18]/10 bg-[#211c18]/10 md:grid-cols-2">

            {/* Development */}
            <div className="bg-[#f4f0e8] p-8 md:p-10">

              <Code2
                size={30}
                strokeWidth={1.2}
                className="text-[#b08d57]"
              />

              <h3 className="mt-12 text-2xl">
                Development
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#766b5d]">
                HTML5, CSS3, JavaScript, Tailwind CSS,
                Bootstrap, PHP and basic React.js.
              </p>

            </div>


            {/* E-commerce */}
            <div className="bg-[#f4f0e8] p-8 md:p-10">

              <Database
                size={30}
                strokeWidth={1.2}
                className="text-[#b08d57]"
              />

              <h3 className="mt-12 text-2xl">
                Web & E-commerce
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#766b5d]">
                OpenCart development, PHP forms, PHPMailer,
                MySQL and PHPMaker solutions.
              </p>

            </div>


            {/* Design */}
            <div className="bg-[#f4f0e8] p-8 md:p-10">

              <Palette
                size={30}
                strokeWidth={1.2}
                className="text-[#b08d57]"
              />

              <h3 className="mt-12 text-2xl">
                Visual Design
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#766b5d]">
                Photoshop, Canva and CorelDRAW for web
                graphics, image editing and design requirements.
              </p>

            </div>


            {/* Collaboration */}
            <div className="bg-[#f4f0e8] p-8 md:p-10">

              <ArrowUpRight
                size={30}
                strokeWidth={1.2}
                className="text-[#b08d57]"
              />

              <h3 className="mt-12 text-2xl">
                Collaboration
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#766b5d]">
                Understanding client requirements, managing
                multiple projects and delivering according to
                project-specific needs.
              </p>

            </div>

          </div>

        </section>


        {/* ================= PROJECT INDUSTRIES ================= */}
        <section className="mt-28 border-t border-[#211c18]/10 pt-16 md:mt-40 md:pt-20">

          <div className="grid gap-10 md:grid-cols-2 md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                Industries
              </p>

              <h2 className="mt-5 text-5xl tracking-[-0.04em] md:text-6xl">
                Different
                <br />
                <span className="italic text-[#b08d57]">
                  industries.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">

              {[
                "Fastener",
                "Medical",
                "Education",
                "Construction",
                "Agriculture",
                "E-commerce",
              ].map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-[#211c18]/15 px-5 py-3 text-sm text-[#766b5d]"
                >
                  {industry}
                </span>
              ))}

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="mt-28 border-t border-[#211c18]/10 pt-16 md:mt-40">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                Next
              </p>

              <h2 className="mt-5 text-4xl tracking-[-0.04em] md:text-6xl">
                See the
                <br />
                <span className="italic text-[#b08d57]">
                  work.
                </span>
              </h2>
            </div>

            <a
              href="/work"
              className="group flex w-fit items-center gap-3 rounded-full bg-[#211c18] px-7 py-4 text-sm text-white transition-all hover:bg-[#b08d57]"
            >
              Explore Projects

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Experience;