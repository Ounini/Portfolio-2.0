import { useState } from "react";
import f4w from "../assets/f4w.png";
import car from "../assets/car.png";
import siji from "../assets/siji 1.png";
import dlr from "../assets/dlr.png";

const projects = [
  {
    id: 1,
    title: "Fantastic4Wheels",
    category: "Web Development",
    description:
      "A premium automotive platform showcasing luxury, exotic, and supercars with an elegant browsing experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: f4w,
    demo: "",
    github: "https://github.com/Ounini",
    number: "01",
    accent: "blue",
  },
  {
    id: 2,
    title: "SijiCart",
    category: "Full Stack",
    description:
      "A premium E-commerce platform for selling of gadgets and marketing of products in the regard.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: siji,
    demo: "https://sijicart.vercel.app/",
    github: "https://github.com/Ounini",
    number: "02",
    accent: "yellow",
  },
  {
    id: 3,
    title: "Divine Light of Resurrection",
    category: "Full Stack",
    description:
      "A responsive church website using React.js with integrations for YouTube, Apple Music, YouTube Music, and Spotify and so on.",
    technologies: ["React", "Node.js", "Firebase"],
    image: dlr,
    demo: "https://www.divinelightofresurrection.org/",
    github: "https://github.com/Ounini",
    number: "03",
    accent: "gold",
  },

  {
    id: 4,
    title: "Paybay",
    category: "Full Stack",
    description:
      "A financial empowerment platform featuring payment workflows and blockchain wallet functionality.",
    technologies: ["React", "Node.js", "MongoDB", "Payments"],
    image: "/images/paybay.png",
    demo: "",
    github: "https://github.com/Ounini",
    number: "04",
    accent: "purple",
  },
  {
    id: 5,
    title: "Step Up Football Academy",
    category: "Web Development",
    description:
      "A football academy platform designed to showcase training programs and opportunities for young players aged 5–17.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/images/sfa.png",
    demo: "",
    github: "https://github.com/Ounini",
    number: "05",
    accent: "green",
  },
  {
    id: 6,
    title: "Corporate Toggleweb",
    category: "Web Development",
    description:
      "A corporate website experience featuring a flexible presentation that can switch between corporate and single-page layouts.",
    technologies: ["React", "JavaScript", "CSS"],
    image: car,
    demo: "https://corporate-1.vercel.app",
    github: "https://github.com/Ounini",
    number: "06",
    accent: "orange",
  },
  {
    id: 7,
    title: "WIGMA Chat App",
    category: "Full Stack",
    description:
      "A full-stack messaging application concept built around interactive communication and a modern user experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/wigma.png",
    demo: "",
    github: "https://github.com/Ounini",
    number: "07",
    accent: "pink",
  },
  {
    id: 8,
    title: "Social Media Platform",
    category: "Full Stack",
    description:
      "A social media application demonstrating full-stack development, interactive user interfaces, and backend integration.",
    technologies: ["MERN Stack", "REST API", "JavaScript"],
    image: "/images/social-media.png",
    demo: "",
    github: "https://github.com/Ounini",
    number: "08",
    accent: "cyan",
  },
];

const categories = ["All", "Full Stack", "Web Development"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="work-section" id="projects">
      <div className="work-container">
        <div className="work-heading">
          <div className="work-eyebrow">
            <span className="work-eyebrow-line" />
            SELECTED PROJECTS
          </div>

          <div className="work-heading-content">
            <h2>
              Things I've <span>built.</span>
            </h2>

            <p>
              A collection of projects where ideas become functional,
              user-focused digital experiences.
            </p>
          </div>

          <div className="work-filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "work-filter active"
                    : "work-filter"
                }
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="work-grid">
          {filteredProjects.map((project) => (
            <article
              className={`work-card accent-${project.accent}`}
              key={project.id}
            >
              <div className="work-preview">
                <div className="preview-topbar">
                  <div className="preview-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="preview-label">
                    PROJECT_{project.number}
                  </span>
                </div>

                <div className="preview-content">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />

                  <div className="preview-fallback">
                    <span className="fallback-number">{project.number}</span>
                    <span className="fallback-title">{project.title}</span>
                    <span className="fallback-category">
                      {project.category}
                    </span>
                  </div>
                </div>

                <span className="preview-corner">
                  <span />
                </span>
              </div>

              <div className="work-card-body">
                <div className="work-card-meta">
                  <span>{project.category}</span>
                  <span>/{project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="work-description">{project.description}</p>

                <div className="work-tech-stack">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="work-card-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="work-link work-link-primary"
                    >
                      Live Preview <span>↗</span>
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="work-link work-link-secondary"
                  >
                    GitHub <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-footer">
          <p>Have an interesting idea? Let's build something meaningful.</p>

          <a href="#contact" className="work-contact-link">
            Let's talk <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
