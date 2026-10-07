import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Code2,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiPhp,
  SiGooglegemini,
  SiHtml5,
  SiBootstrap,
  SiCoreldraw,
} from "react-icons/si";

import { BiLogoAdobe } from "react-icons/bi";
import { TfiPalette } from "react-icons/tfi";
import { BsCss, BsOpenai } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import profileImage from "../assets/profile-2.jpg";
import skill from "../assets/skills.jpg";


/* =====================================================
   ORBIT COMPONENT
===================================================== */

const SkillOrbit = ({
  items,
  direction = -1,
  duration = 25,
  inset = "0%",
}) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        inset,
      }}
      animate={{
        rotate: direction * 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {items.map((item, index) => {
        const angle = (360 / items.length) * index - 90;
        const radians = (angle * Math.PI) / 180;

        const left = 50 + 50 * Math.cos(radians);
        const top = 50 + 50 * Math.sin(radians);

        return (
          <div
            key={item.name}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Counter rotation keeps icon upright */}
            <motion.div
              animate={{
                rotate: direction * -360,
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                title={item.name}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#211c18]/10 bg-[#f4f0e8] text-[#b08d57] shadow-[0_8px_25px_rgba(33,28,24,0.10)] transition-all duration-300 hover:scale-110 hover:border-[#b08d57] md:h-14 md:w-14"
              >
                {item.icon}
              </div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

const About = () => {
  /* =====================================================
     ORBIT SKILLS
  ===================================================== */

  const innerSkills = [
    {
      name: "JavaScript",
      icon: <SiJavascript size={24} />,
    },
    {
      name: "CSS3",
      icon: <BsCss size={24} />,
    },
    {
      name: "React",
      icon: <SiReact size={24} />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={24} />,
    },
  ];

  const middleSkills = [
    {
      name: "MySQL",
      icon: <SiMysql size={24} />,
    },
    {
      name: "PHP",
      icon: <SiPhp size={24} />,
    },
    {
      name: "ChatGPT",
      icon: <BsOpenai size={24} />,
    },
    {
      name: "Gemini",
      icon: <SiGooglegemini size={24} />,
    },
    {
      name: "OpenCart",
      icon: <FaOpencart size={24} />,
    },
  ];

  const outerSkills = [
    {
      name: "HTML5",
      icon: <SiHtml5 size={24} />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap size={24} />,
    },
    {
      name: "Photoshop",
      icon: <BiLogoAdobe size={24} />,
    },
    {
      name: "Canva",
      icon: <TfiPalette size={24} />,
    },
    {
      name: "CorelDRAW",
      icon: <SiCoreldraw size={24} />,
    },
  ];

  return (
    <main className="min-h-screen pb-24 pt-40 md:pt-52">
      <div className="site-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b08d57]"
            >
              About Me
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.06em]"
              >
                More than
                <br />

                <span className="italic text-[#b08d57]">
                  code.
                </span>
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg md:pb-3"
          >
            <p className="text-lg leading-8 text-[#766b5d]">
              I build responsive, functional and visually engaging
              websites that combine clean development with thoughtful
              design.
            </p>
          </motion.div>
        </section>

        {/* =====================================================
            PHOTO + INTRO
        ===================================================== */}

        <section className="mt-24 border-y border-[#211c18]/10 py-16 md:mt-32 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">

            {/* PHOTO */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5"
            >
              <div className="group relative overflow-hidden rounded-[2rem] bg-[#e8dfd1]">

                <div className="pointer-events-none absolute inset-4 z-10 rounded-[1.5rem] border border-white/30" />

                <img
                  src={profileImage} 
                  alt="Pardeep - Front End Developer"
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#211c18]/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                    Front-End Developer
                  </p>
                </div>
              </div>
            </motion.div>

            {/* INTRO */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-7"
            >
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                A little about me
              </p>

              <p className="text-2xl leading-relaxed tracking-tight md:text-4xl md:leading-relaxed">
                I am a passionate Front-End Developer with
                <span className="text-[#b08d57]"> 9+ years </span>
                of hands-on experience in web development.
              </p>

              <p className="mt-8 max-w-3xl text-base leading-8 text-[#766b5d] md:text-lg">
                Over the years, I have worked on responsive and
                functional websites for different industries and
                businesses, focusing on creating practical digital
                experiences with clean layouts and engaging visuals.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#211c18]/15 px-5 py-3 text-xs uppercase tracking-[0.15em]">
                  9+ Years
                </span>

                <span className="rounded-full border border-[#211c18]/15 px-5 py-3 text-xs uppercase tracking-[0.15em]">
                  Web Development
                </span>

                <span className="rounded-full border border-[#211c18]/15 px-5 py-3 text-xs uppercase tracking-[0.15em]">
                  Visual Design
                </span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* =====================================================
            NUMBERS
        ===================================================== */}

        <section className="grid border-b border-[#211c18]/10 md:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-[#211c18]/10 py-12 md:border-b-0 md:border-r"
          >
            <span className="font-serif text-6xl tracking-tight md:text-7xl">
              09+
            </span>

            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#766b5d]">
              Years Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-b border-[#211c18]/10 py-12 md:border-b-0 md:border-r md:px-10"
          >
            <span className="font-serif text-6xl tracking-tight md:text-7xl">
              06
            </span>

            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#766b5d]">
              Core Technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="py-12 md:pl-10"
          >
            <span className="font-serif text-6xl tracking-tight md:text-7xl">
              ∞
            </span>

            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#766b5d]">
              Ideas to Build
            </p>
          </motion.div>

        </section>

        {/* =====================================================
            WHAT I DO
        ===================================================== */}

        <section className="mt-28 md:mt-40">

          <div className="mb-14 flex items-center gap-4">
          

            <span className="h-px w-10 bg-[#b08d57]" />

            <span className="h3 text-xs uppercase tracking-[0.3em] text-[#766b5d]">
              What I Do
            </span>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#211c18]/10 bg-[#211c18]/10 md:grid-cols-3">

            {/* FRONT-END */}

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f4f0e8] p-8 md:p-10"
            >
              <Code2
                size={32}
                strokeWidth={1.2}
                className="text-[#b08d57]"
              />

              <h2 className="mt-16 text-2xl tracking-tight">
                Front-End
                <br />
                Development
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#766b5d]">
                Building responsive and functional interfaces
                with clean and maintainable front-end code.
              </p>
            </motion.div>

            {/* RESPONSIVE */}

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f4f0e8] p-8 md:p-10"
            >
              <MonitorSmartphone
                size={32}
                strokeWidth={1.2}
                className="text-[#b08d57]"
              />

              <h2 className="mt-16 text-2xl tracking-tight">
                Responsive
                <br />
                Experiences
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#766b5d]">
                Creating layouts that work smoothly across
                desktop, tablet and mobile devices.
              </p>
            </motion.div>

            {/* VISUAL DESIGN */}

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f4f0e8] p-8 md:p-10"
            >
              <Layers3
                size={32}
                strokeWidth={1.2}
                className="text-[#b08d57]"
              />

              <h2 className="mt-16 text-2xl tracking-tight">
                Visual
                <br />
                Design
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#766b5d]">
                Combining development and visual thinking to
                create engaging and practical websites.
              </p>
            </motion.div>

          </div>
        </section>

        {/* =====================================================
            03 — SKILLS & TOOLS
        ===================================================== */}

        <section className="mt-28 overflow-hidden md:mt-40">

          {/* SECTION TITLE */}

         <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end"> 
          <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]"> Skills & Tools </p> 
          <h2 className="mt-3 max-w-3xl text-5xl tracking-[-0.04em] md:text-6xl"> My digital <span className="text-[#b08d57]">toolkit.</span> </h2>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg"> A curated set of skills, technologies, and creative tools I use to turn ideas into thoughtful, polished, and high-performing digital experiences. </p> 
          </div>

          {/* =================================================
              THREE CONCENTRIC ORBITS
          ================================================= */}

          <div className="relative mx-auto flex aspect-square w-full max-w-[760px] items-center justify-center">

            {/* OUTER STATIC CIRCLE */}

            <div className="absolute inset-[3%] rounded-full border border-[#b08d57]/20" />

            {/* MIDDLE STATIC CIRCLE */}

            <div className="absolute inset-[17%] rounded-full border border-[#211c18]/10" />

            {/* INNER STATIC CIRCLE */}

            <div className="absolute inset-[31%] rounded-full border border-[#b08d57]/15" />

            {/* DECORATIVE DOTS */}

            <div className="absolute left-[7%] top-[28%] h-2 w-2 rounded-full bg-[#b08d57]" />

            <div className="absolute right-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#211c18]/40" />

            <div className="absolute bottom-[18%] left-[13%] h-1.5 w-1.5 rounded-full bg-[#b08d57]/60" />

            <div className="absolute bottom-[13%] right-[17%] h-2 w-2 rounded-full bg-[#211c18]/30" />

            {/* =================================================
                1st CIRCLE
                JavaScript
                CSS3
                React
                Tailwind CSS

                RIGHT TO LEFT
            ================================================= */}

            <SkillOrbit
              items={innerSkills}
              direction={-1}
              duration={18}
              inset="31%"
            />

            {/* =================================================
                2nd CIRCLE
                MySQL
                PHP
                ChatGPT
                Gemini
                OpenCart

                LEFT TO RIGHT
            ================================================= */}

            <SkillOrbit
              items={middleSkills}
              direction={1}
              duration={24}
              inset="17%"
            />

            {/* =================================================
                3rd CIRCLE
                HTML
                Bootstrap
                Photoshop
                Canva
                CorelDRAW

                RIGHT TO LEFT
            ================================================= */}

            <SkillOrbit
              items={outerSkills}
              direction={-1}
              duration={32}
              inset="3%"
            />

            {/* =================================================
                CENTER PHOTO
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-20 h-[175px] w-[175px] overflow-hidden rounded-full border-[6px] border-[#f4f0e8] shadow-[0_20px_60px_rgba(33,28,24,0.15)] sm:h-[210px] sm:w-[210px] md:h-[280px] md:w-[280px]"
            >
              <img
                src={skill} 
                alt="Pardeep - Front End Developer"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#211c18]/10" />
            </motion.div>

            {/* PHOTO RING */}

            <div className="absolute z-10 h-[195px] w-[195px] rounded-full border border-[#b08d57]/40 sm:h-[230px] sm:w-[230px] md:h-[310px] md:w-[310px]" />

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <div className="mx-auto mt-12 max-w-xl text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-[#b08d57]">
              Development · Design · Web
            </p>

            <p className="mt-5 text-base leading-8 text-[#766b5d] md:text-lg">
              A combination of development, design and web technologies
              that helps turn ideas into practical digital experiences.
            </p>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="mt-32 border-t border-[#211c18]/10 pt-16 md:mt-48 md:pt-20">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                What's next?
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl tracking-[-0.04em] md:text-7xl">
                Let's create something
                <span className="italic text-[#b08d57]">
                  {" "}meaningful.
                </span>
              </h2>
            </div>

            <a
              href="/contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-[#211c18] px-7 py-4 text-sm text-white transition-all duration-300 hover:bg-[#b08d57]"
            >
              Let's Talk

              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </section>

      </div>
    </main>
  );
};

export default About;
