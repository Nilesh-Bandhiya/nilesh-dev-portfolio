import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    icon: "{ }",
    title: "Frontend Architecture",
    subtitle: "React & Next.js",
    description:
      "Scalable React & Next.js apps with clean component structure, SSR optimization, and performance-first thinking.",
    tags: ["React.js", "Next.js", "TypeScript", "Redux", "Vite", "SSR"],
  },
  {
    icon: "⟳",
    title: "API Integration",
    subtitle: "Real-time & Async",
    description:
      "Complex third-party API integrations — real-time data sync, async workflows, error handling, and fallback strategies.",
    tags: ["REST APIs", "GDS APIs", "JWT", "Axios", "WebSockets"],
  },
  {
    icon: "▦",
    title: "Enterprise Platforms",
    subtitle: "CRM · ERP · OTA",
    description:
      "CRM, ERP, and OTA systems with role-based access, financial modules, and multi-workflow business logic.",
    tags: ["RBAC", "MongoDB", "Node.js", "Express.js", "Firebase"],
  },
  {
    icon: "◈",
    title: "Team Leadership",
    subtitle: "Mentor & Architect",
    description:
      "Leading frontend teams, conducting code reviews, enforcing standards, and mentoring developers to write better scalable code.",
    tags: ["Code Review", "PR Management", "Mentorship", "Git", "GitHub"],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO section">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box what-box-services">
        {services.map((service, index) => (
          <div
            className="what-content what-noTouch"
            key={index}
            ref={(el) => setRef(el, index)}
          >
            <div className="what-corner"></div>
            <div className="what-content-in">
              <div className="what-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.description}</p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                {service.tags.map((tag, ti) => (
                  <div className="what-tags" key={ti}>{tag}</div>
                ))}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
