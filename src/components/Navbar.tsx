"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const mobileButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  /* =========================================
     NAVBAR ENTRANCE
  ========================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navRef.current, {
        opacity: 0,
        y: -15,
      });

      gsap.set(logoRef.current, {
        opacity: 0,
        x: -25,
      });

      gsap.set(linksRef.current, {
        opacity: 0,
        y: -10,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        x: 20,
        scale: 0.95,
      });

      gsap.set(mobileButtonRef.current, {
        opacity: 0,
        x: 15,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });

      tl.to(
        logoRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.3",
      );

      tl.to(
        linksRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
        },
        "-=0.4",
      );

      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
        },
        "-=0.35",
      );

      tl.to(
        mobileButtonRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
        },
        "-=0.4",
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  /* =========================================
     ACTIVE DESKTOP LINK
  ========================================= */

  useEffect(() => {
    linksRef.current.forEach((link) => {
      if (!link) return;

      const underline = link.querySelector<HTMLElement>(".nav-underline");

      if (!underline) return;

      const isActive = link.dataset.href === activeLink;

      gsap.to(underline, {
        scaleX: isActive ? 1 : 0,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      });
    });
  }, [activeLink]);

  /* =========================================
     DESKTOP HOVER
  ========================================= */

  const handleDesktopEnter = (link: HTMLAnchorElement) => {
    const underline = link.querySelector<HTMLElement>(".nav-underline");

    if (!underline) return;

    gsap.to(underline, {
      scaleX: 1,
      duration: 0.3,
      ease: "power3.out",
      overwrite: true,
    });

    gsap.to(link, {
      y: -2,
      duration: 0.2,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleDesktopLeave = (link: HTMLAnchorElement) => {
    const underline = link.querySelector<HTMLElement>(".nav-underline");

    if (!underline) return;

    const isActive = link.dataset.href === activeLink;

    gsap.to(underline, {
      scaleX: isActive ? 1 : 0,
      duration: 0.25,
      ease: "power3.inOut",
      overwrite: true,
    });

    gsap.to(link, {
      y: 0,
      duration: 0.2,
      ease: "power2.out",
      overwrite: true,
    });
  };

  /* =========================================
     NAVIGATION
  ========================================= */

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  /* =========================================
     BODY SCROLL LOCK
  ========================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================
     MOBILE MENU ANIMATION
  ========================================= */

  useEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    if (mobileOpen) {
      gsap.set(menu, {
        display: "flex",
        opacity: 1,
      });

      gsap.fromTo(
        mobileLinksRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.055,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(mobileLinksRef.current, {
        y: -12,
        opacity: 0,
        duration: 0.18,
        stagger: 0.02,
        ease: "power2.in",
      });

      gsap.to(menu, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          if (mobileMenuRef.current) {
            gsap.set(mobileMenuRef.current, {
              display: "none",
            });
          }
        },
      });
    }
  }, [mobileOpen]);

  /* =========================================
     ESCAPE KEY
  ========================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-[100]">
      {/* =====================================
          HEADER
      ===================================== */}

      <nav
        className="
          relative
          mx-auto
          flex
          h-16
          w-full
          items-center
          justify-between
          bg-background/90
          px-5
          backdrop-blur-xl
          sm:px-8
          md:px-10
          lg:h-[72px]
          lg:px-12
          xl:px-14
        "
      >
        {/* LOGO */}

        <Link
          ref={logoRef}
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="
            relative
            z-[120]
            shrink-0
            font-anton
            text-[28px]
            uppercase
            leading-none
            tracking-[-0.03em]
            text-foreground
            transition-opacity
            duration-300
            hover:opacity-70
            sm:text-[30px]
          "
        >
          NAZISH
          <span className="text-orange">.</span>
        </Link>

        {/* =====================================
            DESKTOP NAV
        ===================================== */}

        <div
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-5
            lg:flex
            xl:gap-7
            2xl:gap-9
          "
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
              data-href={item.href}
              onClick={() => handleNavClick(item.href)}
              onMouseEnter={(event) => handleDesktopEnter(event.currentTarget)}
              onMouseLeave={(event) => handleDesktopLeave(event.currentTarget)}
              className="
                group
                relative
                shrink-0
                whitespace-nowrap
                py-2
                font-inter
                text-sm
                font-medium
                leading-none
                text-foreground
              "
            >
              {item.name}

              <span
                className="
                  nav-underline
                  absolute
                  bottom-0
                  left-0
                  h-[1.5px]
                  w-full
                  origin-left
                  scale-x-0
                  bg-orange
                "
              />
            </Link>
          ))}
        </div>

        {/* =====================================
            DESKTOP CTA
        ===================================== */}

        <Link
          ref={ctaRef}
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          className="
            relative
            hidden
            h-10
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-foreground/60
            px-6
            font-inter
            text-sm
            font-medium
            leading-none
            text-foreground
            lg:flex
          "
          onMouseEnter={(event) => {
            const cta = event.currentTarget;

            gsap.to(cta, {
              scale: 1.04,
              duration: 0.3,
              ease: "power3.out",
            });

            gsap.to(cta.querySelector(".cta-bg"), {
              y: "0%",
              duration: 0.4,
              ease: "power3.out",
            });

            gsap.to(cta.querySelector(".cta-text"), {
              color: "#030405",
              duration: 0.25,
            });
          }}
          onMouseLeave={(event) => {
            const cta = event.currentTarget;

            gsap.to(cta, {
              scale: 1,
              duration: 0.3,
              ease: "power3.out",
            });

            gsap.to(cta.querySelector(".cta-bg"), {
              y: "100%",
              duration: 0.4,
              ease: "power3.inOut",
            });

            gsap.to(cta.querySelector(".cta-text"), {
              color: "#fdf9f4",
              duration: 0.25,
            });
          }}
        >
          <span
            className="
              cta-text
              relative
              z-10
              text-foreground
            "
          >
            Let's Talk
          </span>

          <span
            className="
              cta-bg
              absolute
              inset-0
              translate-y-full
              rounded-full
              bg-orange
            "
          />
        </Link>

        {/* =====================================
            MOBILE BUTTON
        ===================================== */}

        <button
          ref={mobileButtonRef}
          type="button"
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((previous) => !previous)}
          className="
            relative
            z-[120]
            flex
            h-10
            w-10
            shrink-0
            flex-col
            items-end
            justify-center
            gap-[6px]
            lg:hidden
          "
        >
          <span
            className={`
              block
              h-[1.5px]
              bg-foreground
              transition-all
              duration-300
              ${mobileOpen ? "w-6 translate-y-[3.75px] rotate-45" : "w-6"}
            `}
          />

          <span
            className={`
              block
              h-[1.5px]
              bg-orange
              transition-all
              duration-300
              ${mobileOpen ? "w-6 -translate-y-[3.75px] -rotate-45" : "w-4"}
            `}
          />
        </button>
      </nav>

      {/* =====================================
          MOBILE FULLSCREEN MENU
      ===================================== */}

      <div
        ref={mobileMenuRef}
        className="
          fixed
          inset-x-0
          top-16
          z-[90]
          hidden
          h-[calc(100dvh-4rem)]
          w-full
          flex-col
          overflow-hidden
          bg-background
          lg:hidden
        "
      >
        {/* SCROLLABLE CONTENT */}

        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-5
            py-7
            pb-10
            sm:px-8
            md:px-12
          "
        >
          <div className="flex min-h-full flex-col">
            {/* LABEL */}

            <div
              className="
                mb-8
                flex
                items-center
                gap-3
                font-inter
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-foreground/35
                sm:mb-10
                sm:text-xs
              "
            >
              <span className="h-px w-7 bg-orange" />
              Navigation
            </div>

            {/* LINKS */}

            <div className="flex flex-col">
              {navItems.map((item, index) => {
                const isActive = activeLink === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    ref={(el) => {
                      mobileLinksRef.current[index] = el;
                    }}
                    onClick={() => handleNavClick(item.href)}
                    className="
                      group
                      relative
                      border-b
                      border-foreground/10
                      py-4
                      sm:py-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className={`
                          font-anton
                          text-[clamp(2.7rem,11vw,6rem)]
                          uppercase
                          leading-[0.82]
                          tracking-[-0.035em]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "text-foreground"
                              : "text-foreground/70 group-hover:translate-x-2 group-hover:text-foreground"
                          }
                        `}
                      >
                        {item.name}
                      </span>

                      <span
                        className="
                          mr-1
                          text-2xl
                          text-orange
                          opacity-0
                          -translate-x-2
                          -rotate-45
                          transition-all
                          duration-300
                          group-hover:translate-x-0
                          group-hover:rotate-0
                          group-hover:opacity-100
                          sm:text-3xl
                        "
                      >
                        ↗
                      </span>
                    </div>

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-0
                        bg-orange
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                );
              })}
            </div>

            {/* =====================================
                BOTTOM
            ===================================== */}

            <div
              className="
                mt-auto
                flex
                flex-col
                gap-5
                pt-10
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    font-inter
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-foreground/30
                  "
                >
                  Full Stack Developer
                </p>

                <p
                  className="
                    mt-1
                    font-inter
                    text-sm
                    text-foreground/50
                  "
                >
                  Hyderabad, India
                </p>
              </div>

              <Link
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  bg-orange
                  px-5
                  font-inter
                  text-sm
                  font-semibold
                  text-black
                  transition-transform
                  duration-200
                  active:scale-[0.98]
                  sm:w-[155px]
                "
              >
                <span>Let's Talk</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
