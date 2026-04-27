import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#050A14",
    duration: 0.5,
    delay: 1,
  });

  // Split-animate the small label texts
  var landingText = new SplitText(
    [".landing-greeting", ".landing-role-label"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 40, filter: "blur(4px)" },
    {
      opacity: 1,
      duration: 1.0,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.02,
      delay: 0.3,
    }
  );

  // Name h1 — animate as a whole block to keep font rendering clean
  gsap.fromTo(
    ".landing-intro h1",
    { opacity: 0, y: 60, filter: "blur(8px)" },
    {
      opacity: 1,
      duration: 1.4,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      delay: 0.5,
    }
  );

  // Role switcher text — slide up after name
  gsap.fromTo(
    ".landing-role-switcher",
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      duration: 1.0,
      ease: "power2.out",
      y: 0,
      delay: 0.9,
    }
  );

  // Navbar + social icons
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
      onComplete: () => {
        gsap.ticker.add(() => {
          gsap.registerPlugin(ScrollTrigger);
          ScrollTrigger.refresh();
        }, true, true);
      }
    }
  );
}
