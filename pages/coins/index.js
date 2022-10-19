import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Link } from "react-router-dom";
import Content from "../../components/Content";

import "../../pages/_app";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/random">Random</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <Content />
      </div>
    </Router>
  );
}

if (typeof window === "object") {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
}

export default App;
