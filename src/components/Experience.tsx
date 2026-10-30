export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2>How I work</h2>

        <p className="sub">
          I work directly with clients from requirements to delivery, so what
          ships is what was needed.
        </p>

        <div className="two">
          <div>
            <div className="role-row">
              <h3>Full Stack JavaScript Engineer</h3>
              <span>2022 – Present</span>
            </div>

            <ul className="bullets">
              <li>
                Ship full-stack apps on React, Next.js, Node.js, Express and
                MongoDB.
              </li>

              <li>
                Build REST APIs with JWT authentication, role-based access and
                middleware-level security.
              </li>

              <li>
                Deliver installable PWAs, and integrate payments, cloud storage
                and email platforms.
              </li>

              <li>
                Speed up apps with lazy loading, code splitting and caching.
              </li>

              <li>
                Deploy to AWS, Google Cloud, Render, Railway, Netlify and
                Vercel.
              </li>
            </ul>
          </div>

          <div>
            <div className="role-row">
              <h3>Web Development Instructor</h3>
              <span>2025 – Present</span>
            </div>

            <ul className="bullets">
              <li>
                Teach HTML, CSS, JavaScript, React, Next.js, Node.js, MongoDB
                and React Native.
              </li>

              <li>
                Design learning paths, assignments and project-based curricula.
              </li>

              <li>
                Lead code reviews and live debugging, and mentor students
                through Git workflows and deployment.
              </li>
            </ul>

            <div className="teach">
              <p>
                <strong className="sans">60+ developers mentored</strong>, many
                toward job-ready portfolios and developer roles. I explain my
                work clearly, which makes me an easy teammate to review code
                with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
