import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "About",
      path: "/about",
      number: "01",
    },
    {
      name: "Work",
      path: "/work",
      number: "02",
    },
    {
      name: "Experience",
      path: "/experience",
      number: "03",
    },
    {
      name: "Contact",
      path: "/contact",
      number: "04",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-[#f4f0e8]/95 py-5 backdrop-blur-md">

        <nav className="site-container flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="relative z-[60] text-2xl font-bold tracking-[-0.04em]"
          >
            PARDEEP<span className="text-[#b08d57]">.</span>
          </Link>


          {/* ================= DESKTOP ================= */}
          <div className="hidden items-center gap-8 md:flex">

            <Link
              to="/about"
              className="text-sm transition-colors hover:text-[#b08d57]"
            >
              About
            </Link>

            <Link
              to="/work"
              className="text-sm transition-colors hover:text-[#b08d57]"
            >
              Work
            </Link>

            <Link
              to="/experience"
              className="text-sm transition-colors hover:text-[#b08d57]"
            >
              Experience
            </Link>

            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-full border border-[#211c18]/20 px-5 py-2.5 text-sm transition-all hover:border-[#b08d57] hover:text-[#8f7042]"
            >
              Let's Talk

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>


          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-[#211c18]/20 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>

        </nav>

      </header>


      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#211c18] px-6 pb-10 pt-32 text-[#f4f0e8] md:hidden"
          >

            {/* Links */}
            <div>

              <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                Navigation
              </p>

              <div className="border-t border-white/10">

                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                    }}
                    className="border-b border-white/10"
                  >

                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className="group flex items-center justify-between py-5"
                    >

                      <div className="flex items-center gap-5">

                        <span className="text-xs text-[#b08d57]">
                          {link.number}
                        </span>

                        <span className="text-4xl tracking-[-0.04em] transition-colors group-hover:text-[#b08d57]">
                          {link.name}
                        </span>

                      </div>

                      <ArrowUpRight
                        size={22}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />

                    </Link>

                  </motion.div>
                ))}

              </div>

            </div>


            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-end justify-between"
            >

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Based in
                </p>

                <p className="mt-2 text-sm">
                  India
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Front-End Developer
                </p>

                <p className="mt-2 text-sm text-[#b08d57]">
                  9+ Years
                </p>
              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;