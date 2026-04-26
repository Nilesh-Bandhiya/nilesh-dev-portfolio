import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      speed: 1.5,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    // All anchor links — use smoother.scrollTo on every screen size
    // because ScrollSmoother owns the scroll container; native href="#x" fails
    const allLinks = document.querySelectorAll(
      ".header ul a, .landing-cta a[href^='#']"
    );
    allLinks.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const section =
          element.getAttribute("data-href") || element.getAttribute("href");
        if (section) smoother.scrollTo(section, true, "top top");
      });
    });

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });

    const header = document.querySelector(".header") as HTMLElement | null;
    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 30 || smoother.scrollTop() > 30) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Nilesh<span className="navbar-dot">·</span>
        </a>
        <a
          href="mailto:nileshbandhiya2002@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          nileshbandhiya2002@gmail.com
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a data-href={link.href} href={link.href}>
                <HoverLinks text={link.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
