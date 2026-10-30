import CodeConsole from "./CodeConsole";

export default function Hero() {
  return (
    <div className="hero-grid">
      <div>
        <h1>Ouniniiyi O’Steveson</h1>

        <p className="role">Full stack JavaScript engineer</p>

        <p className="lede">
          I design, build and ship web and mobile products end to end: secure
          APIs, fast React and Next.js front ends, React Native apps, and the
          cloud infrastructure that keeps them running. Four years of client
          delivery, and 60+ developers mentored along the way.
        </p>

        <div className="cta">
          <a className="btn main" href="#contact">
            Hire me
          </a>

          <a
            className="btn"
            href="https://github.com/Ounini"
            target="_blank"
            rel="noreferrer"
          >
            See my code
          </a>
        </div>
      </div>

      <CodeConsole />
    </div>
  );
}
