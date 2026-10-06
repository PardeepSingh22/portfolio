import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../data/projects";

const categories = [
  "All",
  "Corporate",
  "Industrial",
  "Medical",
  "Education",
  "Travel",
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="min-h-screen pb-24 pt-40 md:pt-52">

      <div className="site-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">

          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-xs uppercase tracking-[0.3em] text-[#b08d57]"
            >
              02 / Selected Work
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
                Selected
                <br />

                <span className="italic text-[#b08d57]">
                  Work.
                </span>
              </motion.h1>

            </div>

          </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg md:pb-4"
          >

            <p className="text-base leading-7 text-[#766b5d] md:text-lg">
              A selection of websites and digital projects
              developed for businesses across different
              industries.
            </p>

          </motion.div>

        </div>


        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <div className="mt-20 flex flex-wrap gap-3 border-y border-[#211c18]/10 py-5">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-xs transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#211c18] text-[#f4f0e8]"
                  : "border border-[#211c18]/15 text-[#766b5d] hover:border-[#b08d57] hover:text-[#b08d57]"
              }`}
            >
              {category}
            </button>

          ))}

        </div>


        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <motion.div
          layout
          className="mt-12 grid w-full grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3"
        >

          <AnimatePresence mode="popLayout">

            {filteredProjects.map((project, index) => (

              <motion.a
                layout
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: 30,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}

                className="group block"
              >

                {/* =================================================
                    PROJECT IMAGE
                ================================================= */}

                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#e8dfd1]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />


                  {/* Dark Hover Overlay */}

                  <div className="absolute inset-0 bg-[#211c18]/0 transition-all duration-500 group-hover:bg-[#211c18]/55" />


                  {/* View Project Button */}

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex translate-y-5 items-center gap-3 rounded-full bg-[#f4f0e8] px-6 py-3 text-sm opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                      View Project

                      <ArrowUpRight size={16} />

                    </div>

                  </div>


                  {/* Project Number */}

                  <span className="absolute right-5 top-5 rounded-full bg-[#f4f0e8]/90 px-3 py-1.5 text-xs text-[#211c18]">
                    {project.number}
                  </span>

                </div>


                {/* =================================================
                    PROJECT INFO
                ================================================= */}

                <div className="mt-5 flex items-start justify-between gap-5">

                  <div>

                    <h2 className="text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[#b08d57]">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-sm text-[#766b5d]">
                      {project.category}
                    </p>

                  </div>


                  <ArrowUpRight
                    size={20}
                    className="mt-1 text-[#766b5d] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b08d57]"
                  />

                </div>

              </motion.a>

            ))}

          </AnimatePresence>

        </motion.div>


        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {filteredProjects.length === 0 && (

          <div className="py-32 text-center">

            <p className="text-lg text-[#766b5d]">
              No projects found in this category.
            </p>

          </div>

        )}

      </div>

    </main>
  );
};

export default Work;