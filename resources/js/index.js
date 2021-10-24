import ReactDOM from "react-dom";

// import App component
import App from "./components/App";

// render App component
if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
