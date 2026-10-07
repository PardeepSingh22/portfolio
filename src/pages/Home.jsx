import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  Palette,
  Sparkles,
  MoveUpRight,
  MousePointer2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { projects } from "../data/projects";
import { graphics } from "../data/graphics";
import profileImage from "../assets/profile-2.jpg";
import bg3 from "../assets/bg3.jpg";
import experiencebg from "../assets/experience.jpg";



const GOLD = "#b08d57";
const DARK = "#171614";
const CREAM = "#f3f0e8";
const MUTED = "#766b5d";

const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "PHP",
  "MySQL",
  "OpenCart",
  "PHPMaker",
  "Photoshop",
  "Canva",
  "CorelDRAW",
];

const services = [
  {
    number: "01",
    title: "Front-End",
    subtitle: "Development",
    text: "Responsive interfaces, reusable components and clean front-end architecture.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Digital",
    subtitle: "Experiences",
    text: "Web experiences designed around interaction, usability and visual storytelling.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Visual",
    subtitle: "Design",
    text: "Branding, graphics, typography and visual systems with a strong point of view.",
    icon: Palette,
  },
];

const Home = () => {
  return (
    <main className="overflow-hidden bg-[#f3f0e8] text-[#171614]">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          }}
        />
      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pt-36">

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #171614 1px, transparent 1px),
              linear-gradient(to bottom, #171614 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gold ambient light */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-0 h-[650px] w-[650px] rounded-full bg-[#b08d57] blur-[150px]"
        />

        <div className="relative mx-auto max-w-[1600px]">

          {/* Top navigation line */}
          <div className="mb-16 flex items-center justify-between border-b border-black/10 pb-5">

            <p className="text-[9px] uppercase tracking-[0.35em] text-black/50">
              Pardeep — Creative Developer
            </p>

            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.25em]">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b08d57] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b08d57]" />
              </span>

              Open to work

            </div>

          </div>


          {/* Hero layout */}
          <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-end">

            <div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="mb-8 flex items-center gap-4"
              >

                <span className="h-px w-12 bg-[#b08d57]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#766b5d]">
                  Web / Design / Code
                </span>

              </motion.div>


              {/* Main name */}
              <div className="relative">

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: "100%",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="relative z-10 text-[clamp(5rem,14vw,14rem)] font-black leading-[0.68] tracking-[-0.1em]"
                >
                  PARDEEP
                  <span className="text-[#b08d57]">.</span>
                </motion.h1>


                {/* Number */}
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                  }}
                  className="absolute -right-2 top-0 hidden font-mono text-[10px] text-black/30 md:block"
                >
                  01 / 08
                </motion.span>

              </div>


              {/* Hero description */}
              <div className="mt-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="max-w-xl text-xl leading-relaxed text-[#766b5d] md:text-2xl"
                >
                  I create digital experiences where{" "}
                  <span className="text-[#171614]">
                    technology meets visual thinking.
                  </span>
                </motion.p>


                <motion.div
                  initial={{
                    opacity: 0,
                    rotate: -20,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.8,
                  }}
                  className="hidden md:block"
                >

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-black/15">

                    <div className="absolute inset-2 rounded-full border border-[#b08d57]/40" />

                    <ArrowDown
                      size={22}
                      className="text-[#b08d57]"
                    />

                  </div>

                </motion.div>

              </div>


              {/* Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="mt-10 flex flex-wrap gap-3"
              >

                <Link
                  to="/work"
                  className="group flex items-center gap-4 rounded-full bg-[#171614] px-7 py-4 text-sm text-white transition-all duration-500 hover:bg-[#b08d57]"
                >

                  Explore selected work

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </Link>


                <Link
                  to="/contact"
                  className="group flex items-center gap-3 rounded-full border border-black/15 px-7 py-4 text-sm transition-all duration-300 hover:border-[#b08d57] hover:bg-[#b08d57] hover:text-white"
                >

                  Let's talk

                  <MoveUpRight
                    size={15}
                    className="opacity-50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </Link>

              </motion.div>

            </div>


            {/* Hero portrait */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: 4,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[420px]"
            >

              {/* Orbit */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute -inset-8 rounded-[3rem] border border-dashed border-[#b08d57]/30"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-[#171614] shadow-2xl">

                <img
                  src={profileImage}     
                  alt="Pardeep"
                  className="h-full w-full object-cover transition duration-1000 hover:scale-105 hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute inset-4 rounded-[1.7rem] border border-[#b08d57]/40" />


                <div className="absolute left-7 top-7">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#111]">
                    Since
                  </p>

                  <p className="mt-1 text-xl text-[#b08d57]">
                    2016
                  </p>

                </div>


                <div className="absolute bottom-7 right-7 flex items-end justify-between text-white">

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#b08d57]">
                      Experience
                    </p>

                    <p className="mt-2 text-lg">
                      Front-End / Web
                    </p>

                  </div>


                  <span className="hidden text-6xl font-black leading-none tracking-[-0.08em] text-[#b08d57]">
                    09
                  </span>

                </div>

              </div>


              {/* Floating tag */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 top-12 flex items-center gap-3 rounded-full bg-[#b08d57] px-5 py-3 text-xs font-medium text-white shadow-xl"
              >

                <Sparkles size={14} />

                Creative Developer

              </motion.div>


              {/* Mini card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-black/10 bg-white/90 p-4 shadow-xl backdrop-blur-xl">

                <p className="text-[8px] uppercase tracking-[0.25em] text-black/40">
                  Based in
                </p>

                <p className="mt-1 text-sm font-medium">
                  Ludhiana, India
                </p>

              </div>

            </motion.div>

          </div>


          {/* Moving strip */}
          <div className="mt-28 overflow-hidden border-y border-black/10 py-5">

            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max whitespace-nowrap"
            >

              {[1, 2, 3, 4].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-8 pr-8 text-xs uppercase tracking-[0.3em]"
                >

                  <span>Web Development</span>

                  <span className="text-[#b08d57]">
                    ✦
                  </span>

                  <span>Creative Design</span>

                  <span className="text-[#b08d57]">
                    ✦
                  </span>

                  <span>Responsive Web</span>

                  <span className="text-[#b08d57]">
                    ✦
                  </span>

                  <span>Digital Experiences</span>

                  <span className="text-[#b08d57]">
                    ✦
                  </span>

                </div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT — BIG STATEMENT
      ===================================================== */}

      <section className="bg-[#171614] px-5 py-32 text-white md:px-10 md:py-44">

        <div className="mx-auto max-w-[1500px]">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            className="grid gap-16 lg:grid-cols-[220px_1fr]"
          >

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                01 — About me
              </p>

            </div>


            <div>

              <h2 className="max-w-6xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">

                More than a developer.

                <br />

                <span className="text-white/25">
                  A problem solver
                </span>

                {" "}with a{" "}

                <span className="text-[#b08d57]">
                  visual mind.
                </span>

              </h2>


              <div className="mt-20 grid gap-12 md:grid-cols-2">

                <p className="text-lg leading-relaxed text-white/45">
                  With more than 9 years of experience, I work at the
                  intersection of front-end development, responsive web,
                  e-commerce and visual communication.
                </p>


                <div>

                  <p className="text-sm leading-relaxed text-white/40">
                    I care about the small things — spacing, typography,
                    movement, hierarchy and the feeling a website leaves
                    behind.
                  </p>


                  <Link
                    to="/about"
                    className="group mt-8 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm"
                  >

                    Discover my story

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </Link>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SERVICES — INTERACTIVE ROWS
      ===================================================== */}

      <section className="px-5 py-32 md:px-10 md:py-44">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-16 flex items-end justify-between">

            <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
              02 — What I do
            </p>

            <span className="hidden font-mono text-[10px] text-black/30 md:block">
              03 SERVICES
            </span>

          </div>


          <div className="border-t border-black/10">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <motion.div
                  key={service.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden border-b border-black/10 py-10 md:py-14"
                >

                  {/* Hover background */}
                  <div className="absolute inset-0 origin-left scale-x-0 bg-[#171614] transition-transform duration-700 group-hover:scale-x-100" />


                  <div className="relative grid gap-7 md:grid-cols-[80px_90px_1fr_1fr] md:items-center">

                    <span className="font-mono text-xs text-black/30 transition-colors group-hover:text-white/30">
                      {service.number}
                    </span>


                    <Icon
                      size={32}
                      strokeWidth={1}
                      className="transition-all duration-500 group-hover:rotate-12 group-hover:text-[#b08d57]"
                    />


                    <div>

                      <h3 className="text-3xl font-medium tracking-[-0.05em] transition-colors group-hover:text-white md:text-5xl">
                        {service.title}
                      </h3>

                      <h4 className="mt-1 text-3xl font-light tracking-[-0.05em] text-black/25 transition-colors group-hover:text-white/25 md:text-5xl">
                        {service.subtitle}
                      </h4>

                    </div>


                    <p className="max-w-md text-sm leading-relaxed text-black/45 transition-colors group-hover:text-white/45">
                      {service.text}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE STATEMENT
      ===================================================== */}

      <section className="px-5 md:px-10">

        <div className="relative mx-auto min-h-[700px] max-w-[1600px] overflow-hidden rounded-[2.5rem] bg-[#171614]">

          <img
            src={bg3}
            alt="Pardeep working"
            className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-[2s] hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />


          <div className="relative flex min-h-[700px] flex-col justify-between p-8 text-white md:p-16">

            <div className="flex items-center justify-between">

              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                03 — Perspective
              </p>

              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/40">

                <MousePointer2 size={13} />

                Think different

              </div>

            </div>


            <div>

              <p className="max-w-6xl text-5xl font-medium leading-[0.87] tracking-[-0.065em] md:text-8xl lg:text-9xl">

                Design should

                <br />

                <span className="text-white/30">
                  solve a problem
                </span>

                <br />

                before it{" "}

                <span className="text-[#b08d57]">
                  creates one.
                </span>

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      <section className="px-5 py-32 md:px-10 md:py-48">

        <div className="mx-auto max-w-[1500px]">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                04 — Selected work
              </p>

              <h2 className="mt-6 text-[clamp(4.5rem,11vw,10rem)] font-black leading-[0.7] tracking-[-0.1em]">

                WORK

                <span className="text-[#b08d57]">.</span>

              </h2>

            </div>


            <Link
              to="/work"
              className="group flex items-center gap-3 text-sm"
            >

              See complete portfolio

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>


        {/* Slider */}
        <div className="mx-auto mt-20 max-w-[1750px]">

          <Swiper
            modules={[
              Autoplay,
              Pagination,
            ]}
            spaceBetween={24}
            slidesPerView={1.05}
            loop
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.4,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.6,
              },
              1280: {
                slidesPerView: 3.2,
              },
            }}
            className="!overflow-visible"
          >

            {projects.map((project, index) => (
  <SwiperSlide key={project.id}>

    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group relative block h-[520px] overflow-hidden rounded-[2rem] bg-[#171614] text-white md:h-[620px]"
    >

      {/* Project Image */}
      <div className="absolute inset-0 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171614] via-[#171614]/45 to-transparent" />

        {/* Hover gold overlay */}
        <div className="absolute inset-0 bg-[#b08d57]/0 transition-all duration-700 group-hover:bg-[#b08d57]/10" />

      </div>


      {/* Project Number */}
      <div className="absolute right-7 top-7 z-20 font-mono text-[10px] text-white/60">
        {project.number || String(index + 1).padStart(2, "0")}
      </div>


      {/* Project Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-9">

        {/* Category */}
        <div>

          <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-[#b08d57] backdrop-blur-md">
            {project.category}
          </span>

        </div>


        {/* Bottom Content */}
        <div>

          <h3 className="max-w-[350px] text-4xl font-medium leading-[0.9] tracking-[-0.06em] md:text-5xl">
            {project.title}
          </h3>


          <div className="mt-8 flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 group-hover:text-[#b08d57]">

            Visit Project

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-[#b08d57] group-hover:bg-[#b08d57] group-hover:text-white">

              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </span>

          </div>

        </div>

      </div>


      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 z-20 h-[3px] w-0 bg-[#b08d57] transition-all duration-700 group-hover:w-full" />

    </a>

  </SwiperSlide>
))}

          </Swiper>

        </div>

      </section>


      {/* =====================================================
          GRAPHICS / VISUAL LAB
      ===================================================== */}

      <section className="bg-[#ded9cd] px-5 py-32 md:px-10 md:py-44">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-16 lg:grid-cols-[220px_1fr]">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                05 — Visual lab
              </p>

              <p className="mt-6 max-w-[180px] text-xs leading-relaxed text-black/40">
                Exploring typography, composition, branding and visual
                communication.
              </p>

            </div>


            <div>

              <h2 className="text-[clamp(4rem,9vw,9rem)] font-black leading-[0.72] tracking-[-0.1em]">

                GRAPHICS

                <br />

                <span className="text-black/15">
                  & DESIGN
                </span>

                <span className="text-[#b08d57]">
                  .
                </span>

              </h2>


              {/* Irregular gallery */}
              <div className="mt-20 grid grid-cols-12 gap-4">

                {graphics.map((graphic, index) => {

                  const layouts = [
                    "col-span-12 md:col-span-7",
                    "col-span-12 md:col-span-5 md:mt-24",
                    "col-span-12 md:col-span-5",
                    "col-span-12 md:col-span-7 md:mt-20",
                    "col-span-12 md:col-span-4",
                    "col-span-12 md:col-span-8",
                  ];

                  return (

                    <motion.div
                      key={graphic.id}
                      initial={{
                        opacity: 0,
                        y: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        margin: "-100px",
                      }}
                      transition={{
                        duration: 0.7,
                        delay: (index % 3) * 0.1,
                      }}
                      className={`group ${layouts[index % layouts.length]}`}
                    >

                      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#171614]">

                        <img
                          src={graphic.image}
                          alt={graphic.title}
                          className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                        />


                        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                        <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">

                          <div>

                            <p className="text-[9px] uppercase tracking-[0.25em] text-[#b08d57]">
                              {graphic.category}
                            </p>

                            <h3 className="mt-2 text-2xl text-white">
                              {graphic.title}
                            </h3>

                          </div>


                          <ArrowUpRight
                            size={25}
                            className="text-[#b08d57]"
                          />

                        </div>

                      </div>


                      <div className="mt-4 flex justify-between">

                        <p className="text-sm">
                          {graphic.title}
                        </p>

                        <span className="font-mono text-[9px] text-black/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
  className="relative overflow-hidden bg-[#171614] px-5 py-32 text-white md:px-10 md:py-44"
  style={{
    backgroundImage: "url('{experiencebg}')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Background overlay */}
  <div className="absolute inset-0 bg-[#171614]/95" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-[1500px]">

    <div className="grid gap-16 lg:grid-cols-[220px_1fr]">

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
          06 — Experience
        </p>
      </div>

      <div>

        <div className="mb-16 flex items-end justify-between">

          <h2 className="text-5xl font-medium md:text-7xl">
            A decade of
            <br />
            <span className="text-white/25">
              learning by doing.
            </span>
          </h2>

          <span className="hidden text-7xl font-black text-[#b08d57]/20 md:block">
            09+
          </span>

        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-8 md:pl-14">

          <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#b08d57]" />

          <div className="pb-16">

            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              Oct 2016 — Present
            </p>

            <h3 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              PunjabB2B
            </h3>

            <p className="mt-3 text-[#b08d57]">
              Front End / Web Developer
            </p>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/40">
              Working across responsive websites, e-commerce platforms,
              PHP-based solutions, databases and visual design.
            </p>

          </div>

          <div className="grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

            <div>
              <p className="text-5xl font-black tracking-[-0.07em] text-[#b08d57]">
                09+
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Years
              </p>
            </div>

            <div>
              <p className="text-5xl font-black tracking-[-0.07em]">
                06
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Core areas
              </p>
            </div>

            <div>
              <p className="text-5xl font-black tracking-[-0.07em]">
                ∞
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Curiosity
              </p>
            </div>

          </div>

        </div>

        <Link
          to="/experience"
          className="group mt-12 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-sm"
        >
          View full experience

          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>

      </div>

    </div>

  </div>
</section>



      {/* =====================================================
          TOOLKIT
      ===================================================== */}

      <section className="relative overflow-hidden px-5 py-32 md:px-10 md:py-44">

        {/* Giant background number */}
        <span className="pointer-events-none absolute -right-10 top-10 select-none text-[20rem] font-black leading-none tracking-[-0.12em] text-black/[0.025]">
          07
        </span>


        <div className="relative mx-auto max-w-[1500px]">

          <div className="grid gap-16 lg:grid-cols-[220px_1fr]">

            <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">
              07 — Toolkit
            </p>


            <div>

              <h2 className="max-w-6xl text-5xl font-medium leading-[0.88] tracking-[-0.065em] md:text-8xl">

                Tools are just tools.

                <br />

                <span className="text-black/20">
                  The thinking is
                </span>{" "}

                <span className="text-[#b08d57]">
                  everything.
                </span>

              </h2>


              <div className="mt-16 flex max-w-5xl flex-wrap gap-3">

                {skills.map((skill, index) => (

                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -5,
                      rotate: index % 2 === 0 ? 1 : -1,
                    }}
                    className="cursor-default rounded-full border border-black/10 px-5 py-3 text-sm transition-colors duration-300 hover:border-[#b08d57] hover:bg-[#b08d57] hover:text-white"
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative min-h-[800px] overflow-hidden bg-[#b08d57] px-5 pt-32 pb-5 text-white md:px-10 md:pt-30">

        {/* Huge circles */}
        <div className="pointer-events-none absolute -right-60 -top-60 h-[800px] w-[800px] rounded-full border-[100px] border-white/10" />

        <div className="pointer-events-none absolute -bottom-80 -left-80 h-[700px] w-[700px] rounded-full border-[80px] border-black/10" />


        <div className="relative mx-auto max-w-[1500px]">

          <div className="flex items-center justify-between">

            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              08 — Let's create something
            </p>

            <Sparkles
              size={22}
              className="text-white/70"
            />

          </div>


          <div className="mt-24">

            <h2 className="max-w-7xl text-[clamp(5rem,13vw,13rem)] font-black leading-[0.68] tracking-[-0.1em]">

              HAVE

              <br />

              AN IDEA
              <span className="text-[#171614]">?</span>

            </h2>


            <div className="mt-16 flex flex-col justify-between gap-12 md:flex-row md:items-end">

              <p className="max-w-lg text-lg leading-relaxed text-white/70">
                Have a website, brand, product or idea that needs a digital
                shape? Let's make something people remember.
              </p>


              <Link
                to="/contact"
                className="group flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-[#171614] text-white transition-all duration-700 hover:scale-110 hover:bg-white hover:text-[#171614] md:h-52 md:w-52"
              >

                <div className="flex flex-col items-center gap-3">

                  <ArrowUpRight
                    size={34}
                    className="transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
                  />

                  <span className="text-[9px] uppercase tracking-[0.25em]">
                    Start a project
                  </span>

                </div>

              </Link>

            </div>

          </div>


          {/* Footer */}
          <div className="mt-32 flex flex-col justify-between gap-5 border-t border-white/20 pt-7 text-xs text-white/60 md:flex-row">

            <p>
              © {new Date().getFullYear()} Pardeep
            </p>

            <p>
              Ludhiana — India
            </p>

            <p>
              Design × Code × Curiosity
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;
