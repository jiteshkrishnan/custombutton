import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
export default function App() {
  const handleClick = () => {
    alert("have been clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.target?.click();
    }
  };

  return (
    <div className="App">
      <br />
      <Button outline color="primary" onClick={handleClick}>
        primary button
      </Button>{" "}
      <a
        tabIndex={0}
        class="btn btn-outline-primary"
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        Primary button
      </a>
    </div>
  );
}
