import "./Header.css";
import { useTypingEffect } from "../hooks/useTypingEffect";

function Header() {
  const typedText = useTypingEffect(
    ["Developer", "Explorer", "Tinkerer", "Curious Mind"],
    75,
    1500
  );

  return (
    <header>
      <img src="/avatar.jpg" alt="Deril Kurian Chundakal" className="avatar" />
      <h1>Deril Kurian Chundakal</h1>
      <p>
        <span className="prompt">$</span> {typedText}
        <span className="cursor">|</span>
      </p>
      <p className="about">
        MSc IT student & developer from India, exploring React, Node.js, AI/ML &
        music. Always learning, always building.
      </p>
    </header>
  );
}

export default Header;
