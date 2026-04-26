import "./styles/Career.css";

const experiences = [
  {
    role: "Frontend Team Lead",
    company: "Aseum Infotech Pvt Ltd",
    duration: "July 2023 – Present",
    location: "Ahmedabad, Gujarat",
    points: [
      "Led frontend architecture for travel ERP, CRM & OTA platforms",
      "Migrated 6+ React SPAs to Next.js SSR, reducing load time by ~35%",
      "Integrated GDS APIs: Tripjack, Etrav, FlyCreative for real-time booking",
      "Built flight/hotel booking flows, wallet & financial modules",
      "Implemented RBAC and dynamic permission-driven UI for enterprise apps",
      "Mentored 4-person team with structured PR review processes",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    role: "Junior Software Developer",
    company: "Aspire Softserv Pvt Ltd",
    duration: "January 2023 – July 2023",
    location: "Ahmedabad, Gujarat",
    points: [
      "Built full-stack features for employee-employer middleware platform",
      "Developed REST APIs with JWT auth, Multer file uploads, Nodemailer",
      "Worked across frontend and backend ensuring seamless integration",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    role: "Frontend Developer (Intern → Full-time)",
    company: "Lectus Technologies",
    duration: "March 2022 – November 2022",
    location: "Ahmedabad, Gujarat",
    points: [
      "Built responsive UI components for production client applications",
      "Contributed to feature development and performance improvements",
    ],
    tech: ["React.js", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                  <span className="career-location">{exp.location}</span>
                </div>
                <h3 className="career-year">
                  {index === 0
                    ? "NOW"
                    : exp.duration.split("–")[0].trim().split(" ")[1]}
                </h3>
              </div>
              <div className="career-details">
                <p className="career-duration">{exp.duration}</p>
                <ul className="career-points">
                  {exp.points.map((point, pi) => (
                    <li key={pi}>{point}</li>
                  ))}
                </ul>
                <div className="career-tech">
                  {exp.tech.map((t, ti) => (
                    <span className="career-tag" key={ti}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
