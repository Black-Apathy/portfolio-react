import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>
        <span className="prompt">&gt;</span>Projects/
      </h2>
      <div className="project-list">
        <article className="project">
          <h3>USB Dashboard</h3>
          <p>React app with JSON data to monitor USB devices.</p>
        </article>

        <article className="project">
          <h3>RAG PDF Helper</h3>
          <p>
            Python tool using Retrieval-Augmented Generation (RAG) for document
            queries.
          </p>
        </article>

        <article className="project">
          <h3>Semantic Chatbot</h3>
          <p>Node.js chatbot using semantic search for contextual responses.</p>
        </article>

        <article className="project">
          <h3>Vanilla Portfolio</h3>
          <p>
            My first portfolio website built with plain HTML, CSS & JavaScript.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Projects;
