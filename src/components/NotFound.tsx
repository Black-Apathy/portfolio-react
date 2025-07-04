import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h1>&gt; 404/</h1>

      <pre className="ascii-art">(╯°□°)╯︵ ┻━┻</pre>

      <p className="error-msg">
        The command or page you’re looking for doesn’t exist.
      </p>

      <p className="hint">
        <span className="prompt">&gt;</span>
        <a href="/">Go back home</a>
      </p>
    </section>
  );
}

export default NotFound;
