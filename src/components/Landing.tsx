import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";

const roles = [
  "Frontend Team Lead",
  "React.js Developer",
  "Next.js & SSR Specialist",
  "UI Architecture Expert",
  "Full Stack Developer",
];

const Landing = ({ children }: PropsWithChildren) => {
  const roleRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;

    el.textContent = roles[0];

    const interval = setInterval(() => {
      el.classList.add("role-fade-out");
      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % roles.length;
        el.textContent = roles[indexRef.current];
        el.classList.remove("role-fade-out");
        el.classList.add("role-fade-in");
        setTimeout(() => el.classList.remove("role-fade-in"), 400);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landing-section section" id="landingDiv">
        <div className="landing-container">

          {/* Left block — Hello + Name */}
          <div className="landing-intro">
            <p className="landing-greeting">Hello! I'm</p>
            <h1>
              Nilesh
              <br />
              <span>Bandhiya</span>
            </h1>
          </div>

          {/* Right block — A Creative + Role switcher only */}
          <div className="landing-info">
            <p className="landing-role-label">Specializing in</p>
            <div className="landing-role-switcher" ref={roleRef}>
              Frontend Team Lead
            </div>
          </div>

        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
