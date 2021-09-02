import "./Display.css";
import Status from "../Status/Status";

const Display = () => {
  return (
    <section className="display-section">
      <div className="display-gray-bar" />
      <Status />
      <div className="display-division-line" />
    </section>
  );
};

export default Display;
