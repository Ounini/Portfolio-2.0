const skillGroups = [
  {
    title: "Languages",
    description: "JavaScript, TypeScript, HTML5, CSS3, SQL",
  },
  {
    title: "Front end and mobile",
    description: "React, Next.js, React Native, Redux Toolkit, Tailwind CSS",
  },
  {
    title: "Back end",
    description: "Node.js, Express.js, REST APIs, JWT, Socket.io",
  },
  {
    title: "Databases",
    description: "MongoDB, MySQL, Firebase",
  },
  {
    title: "Cloud and DevOps",
    description: "AWS, Google Cloud, Docker, Git, CI/CD, Vercel",
  },
  {
    title: "Education",
    description:
      "Full Stack Web Development Specialization, Johns Hopkins University (Coursera)",
  },
];

export default function Skills() {
  return (
    <section id="stack">
      <div className="wrap">
        <h2>Tools I use</h2>

        <p className="sub">A JavaScript stack from database to device.</p>

        <div className="skills">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
