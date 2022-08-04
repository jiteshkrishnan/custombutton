import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
export default function App() {
  const handleClick = () => {
    alert("have been clicked");
  };
  return (
    <div className="App">
      <Button outline color="primary" onClick={handleClick}>
        primary button
      </Button>{" "}
      <a
        role="button"
        tabIndex={0}
        className="btn btn-outline-primary"
        onClick={handleClick}
      >
        primary button custom
      </a>{" "}
    </div>
  );
}
