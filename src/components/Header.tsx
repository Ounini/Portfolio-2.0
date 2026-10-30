export default function Header() {
  return (
    <div className="bar">
      <span className="avail">
        <i aria-hidden="true"></i>
        Open to full-time roles
      </span>

      <nav aria-label="Sections">
        <a href="#work">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#stack">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
