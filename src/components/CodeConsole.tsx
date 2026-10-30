import { useEffect, useState } from "react";

const lines = [
  <span>{"{"}</span>,

  <span>
    {"  "}
    <span className="k">"focus"</span>:{" "}
    <span className="s">"full stack JavaScript"</span>,
  </span>,

  <span>
    {"  "}
    <span className="k">"experience_years"</span>: <span className="n">4</span>,
  </span>,

  <span>
    {"  "}
    <span className="k">"frontend"</span>: [<span className="s">"React"</span>,{" "}
    <span className="s">"Next.js"</span>],
  </span>,

  <span>
    {"  "}
    <span className="k">"mobile"</span>:{" "}
    <span className="s">"React Native (Expo)"</span>,
  </span>,

  <span>
    {"  "}
    <span className="k">"backend"</span>: [<span className="s">"Node.js"</span>,{" "}
    <span className="s">"Express"</span>,<span className="s">"firebase"</span>],
  </span>,

  <span>
    {"  "}
    <span className="k">"security"</span>: [<span className="s">"JWT"</span>,{" "}
    <span className="s">"RBAC"</span>],
  </span>,

  <span>
    {"  "}
    <span className="k">"developers_mentored"</span>:{" "}
    <span className="n">60</span>,
  </span>,

  <span>
    {"  "}
    <span className="k">"open_to"</span>: [<span className="s">"remote"</span>,{" "}
    <span className="s">"hybrid"</span>, <span className="s">"relocation"</span>
    ]
  </span>,

  <span>{"}"}</span>,
];

export default function CodeConsole() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setVisibleCount(lines.length);
      return;
    }

    let index = 0;

    const timer = window.setInterval(() => {
      index++;

      setVisibleCount(index);

      if (index >= lines.length) {
        window.clearInterval(timer);
      }
    }, 170);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="console"
      role="img"
      aria-label="Animated JSON profile showing engineering skills and experience"
    >
      <div className="console-top">
        <span>GET /engineers/ouniniiyi</span>
        <b>200 OK</b>
      </div>

      <pre>
        {lines.map((line, index) => (
          <span
            key={index}
            className={`console-line ${index < visibleCount ? "on" : ""}`}
          >
            {line}
            {"\n"}
          </span>
        ))}
      </pre>
    </div>
  );
}
