import "./App.css";
import { Outlet, BrowserRouter as Router } from "react-router-dom";
import RouteTemplate from "./router/RouteTemplate";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <RouteTemplate />
        </Router>
      </div>
    </>
  );
}
export default App;
