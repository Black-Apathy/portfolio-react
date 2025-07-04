import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2>
        <span className="prompt">&gt;</span>Skills/
      </h2>

      <div>
        <h3>Core Technologies</h3>
        <div className="skill-badges">
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>RPA</span>
          <span>Git</span>
          <span>Linux</span>
          <span>VS Code</span>
        </div>
      </div>

      <div>
        <h3>Exploring & Intermediate</h3>
        <div className="skill-badges">
          <span>AI/ML</span>
          <span>LLMs</span>
          <span>FastAPI</span>
          <span>Flask</span>
          <span>PHP</span>
          <span>Java</span>
          <span>C/C++</span>
          <span>Kotlin</span>
          <span>App Development</span>
          <span>Flutter</span>
        </div>
      </div>

      <div>
        <h3>Learning & Experimenting</h3>
        <div className="skill-badges">
          <span>Rust</span>
          <span>Embedded Programming</span>
          <span>Go</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
