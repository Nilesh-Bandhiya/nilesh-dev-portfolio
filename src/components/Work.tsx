import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Work.css";

const projects = [
// ... (omitting projects for brevity in targetContent but I will replace the whole top part)

  {
    title: "OTA Travel Booking Platform",
    tag: "Travel · Enterprise · B2B/B2C",
    description:
      "Full-scale flight & hotel booking platform with real-time GDS API integration, live fare comparison, passenger management, payment processing, and cancellation workflows.",
    features: [
      "One-way, round-trip & multi-city flight search",
      "Real-time pricing from 3 APIs simultaneously",
      "Role-based access: agents vs admins",
      "Ticket generation & refund tracking",
    ],
    tech: ["React.js", "Next.js", "Redux", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "AMT — Travel ERP System",
    tag: "ERP · Finance · Operations",
    description:
      "Enterprise ERP with 10+ modules covering inventory, financial ledger, vendor management, voucher systems, and GST reporting.",
    features: [
      "Hotel & airline block/inventory management",
      "Financial ledger with credit/debit tracking",
      "GST & operational reports",
      "Full codebase migration: class → functional React",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux", "MongoDB"],
  },
  {
    title: "AICRM — Travel CRM",
    tag: "CRM · Automation · Lead Management",
    description:
      "End-to-end CRM managing the full lead-to-booking lifecycle with automation, quotation generation, and marketing CMS.",
    features: [
      "Lead → inquiry → quotation → booking pipeline",
      "Email & WhatsApp automation triggers",
      "FIT and group booking management",
      "CMS for blogs, banners, marketing content",
    ],
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Careerline — Education CRM",
    tag: "Education · CRM · Real-time",
    description:
      "Education platform managing student lifecycle from admission to exams with HR modules, library management, and real-time notifications.",
    features: [
      "Student admission, batch & attendance tracking",
      "Library system with barcode issue/return",
      "Firebase real-time notifications",
      "Facebook lead source integration",
    ],
    tech: ["React.js", "Bootstrap", "Firebase", "REST APIs"],
  },
];

const Work = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-card",
        {
          y: window.innerWidth < 768 ? 0 : 60,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: component.current,
            start: window.innerWidth < 768 ? "top 98%" : "top 85%",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="work-section section" id="work" ref={component}>
      <div className="work-container section-container">
        <h2 className="work-heading">
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-header">
                <span className="work-num">0{index + 1}</span>
                <div className="work-card-title-group">
                  <h4 className="work-card-title">{project.title}</h4>
                  <p className="work-card-tag">{project.tag}</p>
                </div>
              </div>
              <hr className="work-divider" />
              <p className="work-card-desc">{project.description}</p>
              <ul className="work-card-features">
                {project.features.map((f, fi) => (
                  <li key={fi}>{f}</li>
                ))}
              </ul>
              <div className="work-card-tech">
                {project.tech.map((t, ti) => (
                  <span className="work-tag" key={ti}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
